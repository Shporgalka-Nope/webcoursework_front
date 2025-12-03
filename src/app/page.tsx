"use client";
import Message from "@/Classes/Message";
import MessagesWindow from "@/components/MessagesWindow";
import MessageTypeArea from "@/components/MessageTypeArea";
import UserSidebar from "@/components/UserSidebar";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Home() {
  const wsConnection = useRef<Socket | null>(null);
  const [usersList, setUsersList] = useState<Array<string>>(
    new Array<string>(),
  );
  const [currentlyActiveId, setCurrentlyActiveId] = useState<string>();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Array<Message>>(
    new Array<Message>(),
  );

  //Update messsages list when changing partner
  useEffect(() => {
    fetchOldDialogData(currentlyActiveId!, wsConnection.current?.id!);
  }, [currentlyActiveId]);

  async function fetchOldDialogData(senderId: string, addresserId: string) {
    console.log(`Fetching for previous messages with \"${currentlyActiveId}\"`);
    const params = new URLSearchParams({
      senderId: senderId,
      addresserId: addresserId,
    });
    await fetch("http://localhost:3001/api/getMessages?" + params.toString())
      .then(async (res: Response) => {
        return await res.json();
      })
      .then((data: any) => {
        console.log("Succesfully fetched messages from server:");
        console.log(data);
        setMessages(Array.isArray(data) ? data : []);
      });
  }

  function CheckEnter(
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    callback: () => void,
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      callback();
    }
  }

  async function SendMessage() {
    if (!currentlyActiveId) return;

    const text = messageText.trim();
    wsConnection.current!.emit(
      "sendMessage",
      wsConnection.current!.id,
      currentlyActiveId,
      text,
    );
    console.log(`Message sent to \"${currentlyActiveId}\"`);
    setMessages((prev) => [
      ...prev,
      new Message(wsConnection.current?.id!, currentlyActiveId, text),
    ]);
    setMessageText("");
  }

  //Do immediately
  useEffect(() => {
    wsConnection.current = io("http://localhost:3001");
    wsConnection.current.on("connect", () => {
      console.log(`Connected. Id: ${wsConnection.current?.id}}`);

      //Listen for updates for userlist
      wsConnection.current!.on("getUsersResponce", (users: Array<string>) => {
        if (!users || users.length === 0) {
          setUsersList(new Array<string>());
        } else {
          setUsersList(users!.filter((id) => id !== wsConnection.current!.id));
        }
      });

      //Listen for new messages
      wsConnection.current!.on(
        "recieveMessage",
        (from: string, to: string, text: string) => {
          console.log(`New message. From: ${from}`);
          console.log(`Currently active id: ${currentlyActiveId}`);
          const newMessage = new Message(from, to, text);
          setMessages((prev) => [...prev, newMessage]);
          return;
        },
      );
    });
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid h-160 w-350 grid-cols-[3fr_1fr] grid-rows-1 gap-1 rounded-lg border-4 border-[#FA812F] bg-[#FEF3E2] p-2">
        <div className="flex h-full flex-col rounded-l-md border-4 border-[#FFB22C] p-2">
          <p className="text-black">Chatting with: {currentlyActiveId}</p>
          <MessagesWindow
            currentlyActiveId={currentlyActiveId!}
            messageList={messages}
          ></MessagesWindow>
          <MessageTypeArea
            CheckEnter={CheckEnter}
            SendMessage={SendMessage}
            messageText={messageText}
            setMessageText={setMessageText}
          ></MessageTypeArea>
        </div>
        <UserSidebar
          currentlyActiveId={currentlyActiveId!}
          setCurrentlyActiveId={setCurrentlyActiveId}
          userList={usersList}
        ></UserSidebar>
      </div>
    </div>
  );
}
