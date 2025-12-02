"use client";

interface Props {
  children: React.ReactNode;
  callback?: () => void;
}

export default function HeaderButton({
  children,
  callback = () => {
    return;
  },
}: Props) {
  return (
    <button
      onClick={callback}
      className={
        "mx-1 h-full p-1 duration-200 ease-out hover:rounded-full hover:bg-blue-100 hover:text-black"
      }
    >
      {children}
    </button>
  );
}
