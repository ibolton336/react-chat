import { useContext } from "react";
import { ChatContext } from "../App";
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");

dayjs.extend(localizedFormat);

const ChatForm = () => {
  const chatContext = useContext(ChatContext);
  return (
    <form
      id="chat-form"
      className="m-10"
      onSubmit={(e) => {
        e.preventDefault();
        const element = document.getElementById("message") as HTMLInputElement;
        const value = element.value;
        chatContext?.setUsers((prevState) => {
          if (prevState && chatContext.users) {
            const updatedUsers = chatContext.users.map((user) => {
              if (
                user.id === chatContext?.currentUser?.id &&
                element.value !== ""
              ) {
                user.messages = [
                  ...user.messages,
                  { messageText: value, dateSent: dayjs().format("L LT") },
                ];
                return user;
              } else return user;
            });
            element.value = "";
            return updatedUsers;
          } else {
            return prevState;
          }
        });
      }}
    >
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <input
          type="text"
          id="message"
          maxLength={140}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your message..."
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
