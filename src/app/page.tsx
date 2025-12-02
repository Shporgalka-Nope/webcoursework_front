"use client";
import Message from "@/Classes/Message";
import MessageTypeArea from "@/components/MessageTypeArea";
import UserSidebar from "@/components/UserSidebar";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Home() {
  const wsConnection = useRef<Socket | null>(null);
  const [usersList, setUsersList] = useState<Array<string>>(
    new Array<string>(),
  );
  const [currentId, setCurrentId] = useState<string>("");
  const [currentlyActiveId, setCurrentlyActiveId] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Array<Message>>(
    new Array<Message>(),
  );

  useEffect(() => {
    console.log(currentlyActiveId);
  }, [currentlyActiveId]);

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
    if (!currentlyActiveId || currentlyActiveId === undefined) {
      return;
    }
    const text = messageText.trim();
    wsConnection.current!.emit(
      "sendMessage",
      wsConnection.current!.id,
      currentlyActiveId,
      text,
    );
    const newMessage = new Message(
      wsConnection.current!.id!,
      currentlyActiveId,
      text,
    );
    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");
  }

  //Do immediately
  useEffect(() => {
    wsConnection.current = io("http://localhost:3001");
    setCurrentId(wsConnection.current.id!);

    wsConnection.current.on("connect", () => {
      console.log(`Connected. Id: ${wsConnection.current?.id}}`);

      //Request for users list
      wsConnection.current!.emit("getUsers");

      //Listen for responce with users list
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
          const newMessage = new Message(from, to, text);
          setMessages((prev) => [...prev, newMessage]);
        },
      );
    });
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid h-160 w-350 grid-cols-[3fr_1fr] grid-rows-1 gap-1 rounded-lg border-4 border-[#FA812F] bg-[#FEF3E2] p-2">
        <div className="flex flex-col rounded-l-md border-4 border-[#FFB22C] p-2">
          <div className="mb-2 grow border-2 border-[#FA812F] p-2"></div>
          <MessageTypeArea
            CheckEnter={CheckEnter}
            SendMessage={SendMessage}
            messageText={messageText}
            setMessageText={setMessageText}
          ></MessageTypeArea>
        </div>
        <UserSidebar
          currentlyActiveId={currentlyActiveId}
          setCurrentlyActiveId={setCurrentlyActiveId}
          userList={usersList}
        ></UserSidebar>
      </div>
    </div>
  );
}
