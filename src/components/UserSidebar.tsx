import UserListButton from "@components/UserListButton";

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
  return (
    <div className="flex-col rounded-r-md border-4 border-[#FFB22C] p-2">
      {userList.map((user: string) => (
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
