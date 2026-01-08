import UserCard from "./UserCard";

const UserList = ({ users = [], search = "" }) => {
  // SAFETY: ensure users is always an array
  if (!Array.isArray(users)) return null;

  //  Filter users by name or email (real-time)
  const filteredUsers = users.filter((user) => {
    if (!user) return false;

    const name = user.name?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const query = search.toLowerCase();

    return name.includes(query) || email.includes(query);
  });

  // No users found
  if (filteredUsers.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {filteredUsers.map((user, index) => (
        <UserCard
          key={user.id || index} // works for API + added users
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
