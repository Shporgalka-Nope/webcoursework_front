import UserListButton from "@components/UserListButton";
import { useEffect, useState } from "react";

interface Props {
  userList: Array<string>;
  currentlyActiveId: string;
  setCurrentlyActiveId: (id: string) => void;
}

export default function UserSidebar({
  userList,
  currentlyActiveId,
  setCurrentlyActiveId,
}: Props) {
  const [usersList, setUsersList] = useState<Array<string>>(Array<string>);
  useEffect(() => {
    setUsersList(userList);
  }, [userList]);

  return (
    <div className="flex-col rounded-r-md border-4 border-[#FFB22C] p-2">
      {usersList.map((user: string) => (
        <UserListButton
          currentlyActiveButtonId={currentlyActiveId}
          onClick={() => setCurrentlyActiveId(user)}
          text={user}
          key={user}
        ></UserListButton>
      ))}
    </div>
  );
}
