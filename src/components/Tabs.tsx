import { User } from "../App";

interface TabsProps {
  users: User[];
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}
const Tabs = (props: TabsProps) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {props.users.map((user) => {
          return (
            <li className="mr-2">
              <a
                onClick={() => props.setCurrentUser(user)}
                href="#"
                className={`
                inline-block 
                p-4 
                rounded-t-lg 
                border-b-2 
                border-transparent 
                hover:text-gray-600 
                hover:border-gray-300 
                dark:hover:text-gray-300
                ${
                  props.currentUser === user
                    ? "active dark:text-blue-500 dark:border-blue-500"
                    : ""
                }
                `}
              >
                {user.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
