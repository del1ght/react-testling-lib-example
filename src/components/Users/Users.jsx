import axios from 'axios';
import { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id} data-testid='user-item'>
          {user.name}
        </p>
      ))}
    </div>
  );
};
