import { useContext } from "react";
import { ChatContext } from "../App";

const ChatBox = () => {
  const chatContext = useContext(ChatContext);
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-10 p-3 min-h-[4em]">
      {chatContext?.currentUser?.messages.map((message, index) => {
        return (
          <div className="text-zinc-300  mx-3" key={index}>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
              {message}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
