import React, { useEffect, useState, useSyncExternalStore } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";
export interface User {
  id: number;
  name: string;
  messages: Array<String>;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
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

  return (
    <div className="container mx-auto flex1 font-sans">
      <div className="flex-1 h-80 m-10 border-solid  border-0 text-center  border-gray-200 rounded-sm shadow-xl drop ">
        <div className="text-3xl font-light"> REACT CHAT</div>
        <Tabs
          users={users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        ></Tabs>
      </div>
    </div>
  );
}

export default App;
