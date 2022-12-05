import { useContext } from "react";
import { ChatContext } from "../App";

const ChatBox = () => {
  const chatContext = useContext(ChatContext);
  const chatDiv = document.getElementById("chatbox") as HTMLElement;
  if (chatDiv) {
    chatDiv.scrollTop = chatDiv?.scrollHeight;
  }

  return (
    <div
      id="chatbox"
      className="
            bg-white 
            border 
            border-gray-200 
            rounded-lg shadow-md 
            dark:bg-gray-800 
            dark:border-gray-700 
            m-10 
            p-10 
            min-h-[4em] 
            max-h-80 
            overflow-scroll
    "
    >
      {chatContext?.currentUser?.messages.map((message, index) => {
        return (
          <div className="text-zinc-300  mx-1 px-1" key={index}>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
              {`${message.dateSent}: ${message.messageText} `}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
