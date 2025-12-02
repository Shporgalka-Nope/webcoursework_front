interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  padding?: 0 | 0.5 | 1 | 2 | 3;
  type?: "none" | "basic";
  borderType?: "none" | "basic";
}

export default function WindowButton({
  children,
  onClick,
  padding = 0,
  type = "none",
  borderType = "none",
}: Props) {
  const paddingLevel = {
    0: "p-0",
    0.5: "p-0.5",
    1: "p-1",
    2: "p-2",
    3: "p-3",
  }[padding];

  const selectedType = {
    none: "",
    basic: "bg-blue-950",
  }[type];

  const selectedBorder = {
    none: "",
    basic: "border-2 border-blue-50",
  }[borderType];

  return (
    <button
      onClick={onClick}
      className={`h-full ${paddingLevel} ${selectedType} rounded-lg ${selectedBorder} duration-200 ease-out hover:rounded-lg hover:bg-white hover:text-black`}
    >
      {children}
    </button>
  );
}
