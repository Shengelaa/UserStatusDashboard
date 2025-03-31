import UserStatusItem from "./userStatusItem";

function UserStatusList({ users }) {
  const onlineCount = users.filter((user) => user.status === "online").length;

  return (
    <div>
      <h2>
        Online: {onlineCount} / {users.length}
      </h2>
      <ul className='user-list'>
        {users.map((user) => (
          <UserStatusItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserStatusList;
