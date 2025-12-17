"use client";
import { useState } from "react";
import "./globals.css";
import ModalFrame from "@/components/ModalFrame";
import RegisterModal from "@/components/Modals/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modalIsOpen, setModalOpen] = useState(true);
  const [registerIsOpen, setRegisterOpen] = useState(false);
  const [personality, setPersonality] = useState<any>(null);
  function ToggleMenus() {
    setRegisterOpen((prev) => !prev);
  }

  function ToggleModal() {
    setModalOpen((prev) => !prev);
  }
  return (
    <html lang="en">
      <body>
        {modalIsOpen && (
          <ModalFrame>
            {registerIsOpen ? (
              <RegisterModal toggleMenus={ToggleMenus}></RegisterModal>
            ) : (
              <LoginModal
                setPersonality={setPersonality}
                toggleMenus={ToggleMenus}
                toggleModal={ToggleModal}
              ></LoginModal>
            )}
          </ModalFrame>
        )}
        {!modalIsOpen && <>{children}</>}
      </body>
    </html>
  );
}
