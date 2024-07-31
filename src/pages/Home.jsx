import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="flex justify-center gap-4 border-2 border-black">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-3 text-center border-4 border-red-500"
          >
            <h3>{user.first_name}</h3>
            <p>{user.email}</p>
            <img
              src={user.avatar}
              alt="gambar avatar"
            />
            <div>
              <Link
                to={`/user-details/${user.id}`}
                className="text-blue-500 hover:text-blue-800"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
