import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log('users', users);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      {/* nanti di sini ada api terus pake pagination */}
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.first_name}</h3>
          <p>{user.email}</p>
          <img
            src={user.avatar}
            alt="gambar avatar"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
