import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          style={{ display: 'block' }}
          to={`/user/${user.id}`}
          key={user.id}
          data-testid='user-link'
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
};
