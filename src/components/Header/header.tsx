import HeaderButton from "./headerButton";

export default function Header() {
  return (
    <div className="flex h-10 items-center justify-between bg-yellow-400 dark:bg-gray-800">
      <div className="ml-5 flex h-full items-center">
        <HeaderButton text="Lol sans"></HeaderButton>
        <HeaderButton text="Header2"></HeaderButton>
        <HeaderButton text="Header3"></HeaderButton>
        <HeaderButton text="Header4"></HeaderButton>
      </div>

      <div className="mr-5 flex h-full items-center">
        <HeaderButton text="Lol sans"></HeaderButton>
        <HeaderButton text="Header2"></HeaderButton>
      </div>
    </div>
  );
}
