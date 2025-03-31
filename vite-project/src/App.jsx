import { useState, useEffect } from "react";
import UserStatusList from "./components/userStatusList";
import "./styles.css";

const initialUsers = [
  { id: 1, name: "Fiona", status: "online" },
  { id: 2, name: "Shalva", status: "offline" },
  { id: 3, name: "Buba", status: "online" },
  { id: 4, name: "Levana", status: "offline" },
  { id: 5, name: "Bacho", status: "online" },
  { id: 6, name: "Mari", status: "online" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) => {
        return prevUsers.map((user) =>
          Math.random() > 0.5
            ? {
                ...user,
                status: user.status === "online" ? "offline" : "online",
              }
            : user
        );
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <h1>User Status Dashboard</h1>
      <UserStatusList users={users} />
    </div>
  );
}

export default App;
