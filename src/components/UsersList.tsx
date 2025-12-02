interface Props {
  userList: Array<string>;
}

export default function UsersList({ userList }: Props) {
  return (
    <select className="h-10 w-full">
      {userList.map((user) => (
        <option
          className="border-2 border-white bg-black"
          key={user}
          value={user}
        >
          {user}
        </option>
      ))}
    </select>
  );
}
