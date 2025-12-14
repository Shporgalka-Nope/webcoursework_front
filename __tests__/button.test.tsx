import Message from "@/Classes/Message";
import MessagesWindow from "@/components/MessagesWindow";
import MessageTypeArea from "@/components/MessageTypeArea";
import UserListButton from "@/components/UserListButton";
import UserSidebar from "@/components/UserSidebar";
import { render, screen } from "@testing-library/react";

describe("Render tests", () => {
  it("UserListButton", () => {
    render(
      <UserListButton
        currentlyActiveButtonId="1"
        onClick={() => {}}
        text="TestText"
        key={"1"}
      ></UserListButton>,
    );

    const element = screen.getByText("TestText");
    expect(element).toBeInTheDocument();
  });

  it("UserSidebar", () => {
    const users = new Array<string>();
    users[0] = "User1";
    users[1] = "User2";

    render(
      <UserSidebar
        currentlyActiveId=""
        setCurrentlyActiveId={(id: string) => {}}
        userList={users}
      ></UserSidebar>,
    );

    const element = screen.getByText("User1");
    expect(element).toBeInTheDocument();
  });

  it("MessageTypeArea", () => {
    render(
      <MessageTypeArea
        CheckEnter={(
          e: React.KeyboardEvent<HTMLTextAreaElement>,
          callback: () => void,
        ) => {}}
        SendMessage={() => {}}
        messageText="TestMessage"
        setMessageText={(e: string) => {}}
      ></MessageTypeArea>,
    );

    const element = screen.getByText("TestMessage");
    expect(element).toBeInTheDocument();
  });

  it("MessagesWindow", () => {
    const messageList: Array<Message> = new Array<Message>();
    messageList[0] = new Message("1", "2", "TestText");

    render(
      <MessagesWindow
        currentlyActiveId="1"
        messageList={messageList}
      ></MessagesWindow>,
    );

    const element = screen.getByText("TestText");
    expect(element).toBeInTheDocument();
  });
});
