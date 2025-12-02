import Image from "next/image";
import SVGIMG from "@public/close.svg";
import WindowButton from "@components/Buttons/WindowButton";

interface Props {
  children?: React.ReactNode;
  title: string;
  description?: string;
  closeFunction: () => void;
  animationState: boolean;
}

export default function ModalWindow({
  children,
  title,
  description,
  closeFunction,
  animationState,
}: Props) {
  return (
    <div
      // prettier-ignore
      className={`${animationState ? "animate-slidein" : "animate-slideout"} 
              absolute z-1 h-auto w-auto min-w-120 
              rounded-md bg-linear-to-br to-blue-400 from-blue-700 p-1`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="mb-0.5 text-xl font-bold">{title}</h1>
        <WindowButton onClick={closeFunction} padding={0}>
          <Image src={SVGIMG} alt=""></Image>
        </WindowButton>
      </div>
      <div className="z-2 h-auto w-auto min-w-120 bg-[#222831] p-2">
        {description && <div>{description}</div>}
        <hr className="mb-2 rounded-xl border-2 border-blue-600"></hr>
        {children}
      </div>
    </div>
  );
}
