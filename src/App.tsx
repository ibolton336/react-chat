import React, {
  createContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import ChatForm from "./components/ChatForm";
import ChatBox from "./components/ChatBox";
export interface User {
  id: number;
  name: string;
  messages: Array<String>;
}
interface ChatContextInterface {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  users: User[] | null;
  setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
}

export const ChatContext = createContext<ChatContextInterface | null>(null);

function App() {
  const [users, setUsers] = useState<User[] | null>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const fetchUsers = async () => {
    return [
      { id: 1, name: "Don", messages: [] },
      { id: 2, name: "Michael", messages: [] },
      { id: 3, name: "Sonny", messages: [] },
      { id: 4, name: "Vito", messages: [] },
    ];
  };
  useEffect(() => {
    fetchUsers().then((userRes) => {
      setUsers(userRes);
    });
  }, []);

  const chatContext: ChatContextInterface = {
    currentUser,
    setCurrentUser,
    users,
    setUsers,
  };

  return (
    <ChatContext.Provider value={chatContext}>
      <div className="container mx-auto flex1 font-sans">
        <div className="flex-1 h-auto m-10 p-10 border-solid  border-0 text-center  border-gray-200 rounded-sm shadow-xl drop ">
          <div className="text-3xl font-light"> REACT CHAT</div>
          <Tabs></Tabs>
          {currentUser ? (
            <>
              <ChatBox></ChatBox>
              <ChatForm></ChatForm>
            </>
          ) : (
            <p className="m-5 font-light">Select a user to begin chatting...</p>
          )}
        </div>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
