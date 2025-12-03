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
  return (
    <button
      onClick={onClick}
      className={`transition-border h-10 w-full rounded-md border-l-0 border-l-[#F3C623] ${currentlyActiveButtonId === text ? "bg-[#FA812F]" : ""} p-2 text-left font-bold ${currentlyActiveButtonId === text ? "text-white" : "text-black"} duration-300 ease-out hover:border-l-6 ${currentlyActiveButtonId === text ? "border-l-6" : ""}`}
    >
      {text}
    </button>
  );
}
