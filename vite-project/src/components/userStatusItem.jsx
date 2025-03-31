function UserStatusItem({ user }) {
  return (
    <li className='user-item'>
      <span className={`status-dot ${user.status}`} />
      {user.name} - {user.status}
    </li>
  );
}

export default UserStatusItem;
