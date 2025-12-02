import { ChangeEvent } from "react";

interface Props {
  SendMessage: () => void;
  CheckEnter: (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    callback: () => void,
  ) => void;
  messageText: string;
  setMessageText: (e: string) => void;
}

export default function MessageTypeArea({
  SendMessage,
  CheckEnter,
  messageText,
  setMessageText,
}: Props) {
  return (
    <div className="flex h-15 w-full">
      <textarea
        onKeyDown={(e) => CheckEnter(e, SendMessage)}
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        className="h-full w-full grow resize-none rounded-l-md border-black bg-white p-1 text-left align-top text-black"
      ></textarea>
      <button
        onClick={SendMessage}
        className="h-full rounded-r-md bg-blue-700 p-2 text-white transition-colors duration-100 hover:bg-blue-500 active:bg-blue-300"
      >
        Send
      </button>
    </div>
  );
}
