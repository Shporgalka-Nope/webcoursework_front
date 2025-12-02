import HeaderButton from "@components/Header/headerButton";
import { useState } from "react";
import HeaderDropdownButton from "./headerDowndownButton";

interface Props {
  Logged?: boolean;
  RegisterHandler: () => void;
}

export default function Header({ Logged = true, RegisterHandler }: Props) {
  //Show controls

  return (
    <div className="fixed left-[50%] z-1 h-12 w-[90%] min-w-90 translate-x-[-50%]">
      <div className="bg-secondary flex justify-between rounded-b-xl border-r-4 border-b-3 border-l-4 border-white p-1 px-2">
        <div className="hidden sm:block">
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>Search</HeaderButton>
        </div>
        <div className="block sm:hidden">
          <HeaderButton>Home</HeaderButton>
        </div>
        {Logged ? (
          <div>
            <div className="hidden sm:block">
              <HeaderButton callback={RegisterHandler}>User name</HeaderButton>
              <HeaderButton callback={RegisterHandler}>Logout</HeaderButton>
            </div>
            <div className="block sm:hidden">
              <HeaderDropdownButton text="Profile">
                <HeaderButton callback={RegisterHandler}>
                  User name
                </HeaderButton>
                <HeaderButton callback={RegisterHandler}>Logout</HeaderButton>
              </HeaderDropdownButton>
            </div>
          </div>
        ) : (
          <HeaderButton callback={RegisterHandler}>Sign In</HeaderButton>
        )}
      </div>
      <div className="bg-main-light font-roboto-slab absolute top-0 left-[50%] flex h-full translate-x-[-50%] items-center rounded-b-xl border-r-4 border-b-4 border-l-4 border-white p-1 text-xl font-semibold text-black">
        Connection Point
      </div>
    </div>
  );
}
