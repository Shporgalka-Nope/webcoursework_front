import Message from "@/Classes/Message";
import { useEffect } from "react";

interface Props {
  messageList: Array<Message>;
  currentlyActiveId: string;
}

export default function MessagesWindow({
  messageList,
  currentlyActiveId,
}: Props) {
  return (
    <div className="mb-2 flex h-150 flex-col overflow-y-auto border-2 border-[#FA812F] p-2">
      {messageList.map((message: Message) => {
        if (message.from == currentlyActiveId) {
          {
            /* Partner message */
          }
          return (
            <div
              key={crypto.randomUUID()}
              className="mb-1 w-fit rounded-tl-lg rounded-r-lg border-3 border-[#F3C623] bg-white p-2 text-black"
            >
              {message.text}
            </div>
          );
        } else if (message.to == currentlyActiveId) {
          {
            /* My message */
          }
          return (
            <div key={crypto.randomUUID()} className="grid">
              <div className="mb-1 w-fit justify-self-end rounded-l-lg rounded-tr-lg border-3 border-[#FA812F] bg-white p-2 text-black">
                {message.text}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
