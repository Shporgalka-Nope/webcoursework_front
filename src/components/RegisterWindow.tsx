import { useState } from "react";
import WindowButton from "./Buttons/WindowButton";

interface Props {
  WindowStateControl: () => void;
}

export default function RegisterWindow({ WindowStateControl }: Props) {
  const [username, setUsername] = useState<string>("");

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  async function Register() {
    if (username || username.trim() !== "") {
      await fetch("http://localhost:3001", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.parse(username),
      })
        .then((res: Response) => {
          if (res.ok) {
            WindowStateControl();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="absolute z-1 flex-col rounded-md border-2 border-gray-500 p-2">
      <p className="mb-2">Register please</p>
      <span>Login</span>
      <div className="mb-1">
        <input
          className="border-b border-b-white"
          type="text"
          value={username}
          onChange={HandleChange}
        ></input>
      </div>
      <div className="flex items-center justify-center">
        <WindowButton onClick={Register} padding={1}>
          Register
        </WindowButton>
      </div>
    </div>
  );
}
