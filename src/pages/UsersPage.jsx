import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import AddUserForm from "../components/AddUserForm";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { fetchUsers } from "../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load users (localStorage first, else API)
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const localUsers = localStorage.getItem("users");

        if (localUsers) {
          setUsers(JSON.parse(localUsers));
        } else {
          const data = await fetchUsers();
          const sorted = data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setUsers(sorted);
        }
      } catch (err) {
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  //  Persist users to localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  //  Add new user (frontend only)
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) =>
      [...prevUsers, newUser].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
  };

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="page-container">
      {/* Add User */}
      <AddUserForm onAddUser={handleAddUser} />

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* User List */}
      <UserList users={users} search={search} />
    </div>
  );
};

export default UsersPage;
