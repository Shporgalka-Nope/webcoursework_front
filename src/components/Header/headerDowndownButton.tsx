"use client";

import { useState } from "react";
import SVGIMG from "@public/arrow_downward.svg";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  text: string;
}

export default function HeaderDropdownButton({ children, text }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  function clickHandler() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div>
      <button
        onClick={clickHandler}
        className={
          "relative mx-1 h-full p-1 duration-200 ease-out hover:rounded-full hover:bg-blue-100 hover:text-black"
        }
      >
        <div className="flex">
          {text}
          <span className="material-symbols-outlined">arrow_downward</span>
        </div>
      </button>
      {isVisible && (
        <div className="border-main-light bg-secondary absolute z-2 h-auto w-auto rounded-md border-2">
          {children}
        </div>
      )}
    </div>
  );
}
