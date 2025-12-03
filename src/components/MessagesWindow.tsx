import Message from "@/Classes/Message";
import { useEffect, useState } from "react";

interface Props {
    messageList : Array<Message>;
    currentlyActiveId : string;
}

export default function MessagesWindow({messageList, currentlyActiveId} : Props) {
    const [localMessageList, setLocalMessageList] = useState<Array<Message>>(new Array<Message>);
    const [_currentlyActiveId, set_currentlyActiveId] = useState<string>("");
    useEffect(() => {
        setLocalMessageList(messageList);
    }, [messageList])

    useEffect(() => {
        set_currentlyActiveId(currentlyActiveId);
    }, [currentlyActiveId])

    return(
        <div className="mb-2 h-150 border-2 border-[#FA812F] p-2 overflow-y-auto flex flex-col">
            {localMessageList.map((message : Message) => {
                if(message.from == _currentlyActiveId) {
                {/* Partner message */}
                return (<div key={new Date().toLocaleString()} className="mb-1 w-fit p-2 rounded-r-lg rounded-tl-lg border-2 bg-white">{message.text}</div>);
                } else {
                {/* My message */}
                <div className="grid">
                    <div key={new Date().toLocaleString()} className="mb-1 justify-self-end w-fit p-2 rounded-l-lg rounded-tr-lg border-2 bg-white ">{message.text}</div>
                </div>
                }})}
        </div>
    )
}