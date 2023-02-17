import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return {
    users,
    isLoading
  };
};

export default useUsers;
