import { useEffect, useState } from "react";

interface Props {
  text: string;
  onClick: () => void;
  currentlyActiveButtonId: string;
}

export default function UserListButton({
  text,
  onClick,
  currentlyActiveButtonId,
}: Props) {
  const [currentlyActiveId, setCurrentlyActiveId] = useState<string>();
  useEffect(() => {
    setCurrentlyActiveId(currentlyActiveButtonId);
  }, [currentlyActiveButtonId]);
  return (
    <button
      onClick={onClick}
      className={`transition-border h-10 w-full rounded-md border-l-0 border-l-[#F3C623] ${currentlyActiveId === text ? "bg-[#FA812F]" : ""} p-2 text-left font-bold ${currentlyActiveId === text ? "text-white" : "text-black"} duration-300 ease-out hover:border-l-6 ${currentlyActiveId === text ? "border-l-6" : ""}`}
    >
      {text}
    </button>
  );
}
