interface Props {
  text: string;
}

export default function HeaderButton({ text }: Props) {
  return (
    <button className="z-1 m-1 h-full p-1 font-serif text-base font-bold text-black subpixel-antialiased duration-200 ease-out hover:bg-amber-600 dark:text-white">
      {text}
    </button>
  );
}
