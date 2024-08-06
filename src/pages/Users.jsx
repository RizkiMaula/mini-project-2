import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => {
        // console.log(res.data.data); //buat cek data dari api
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  //   console.log('users', users); //buat cek users
  return (
    <div className='h-screen flex flex-col justify-center'>
      <div className='gap flex flex-col justify-center items-center h-full border-4 border-black'>
        <div>

      <h1>User</h1>
        </div>
      <div className='flex items-center justify-around gap-3 py-3 text-center border-x-4 border-black w-[75%] text-gray-500'>
        <h2>Pic</h2>
        <h2>Name</h2>
        <h2>Action</h2>
      </div>
      {/* nanti di sini ada api terus pake pagination */}
      <div className="flex flex-col border-7 border-black w-[75%] ">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-around gap-3 py-3 text-center border-x-4 border-black "
          >
            <img
              className="w-[2.9rem] h-[2.9rem] rounded"
              src={user.avatar}
              alt="gambar avatar"
            />
            <h3 className="text-xl">{user.first_name}</h3>
            <div>
              <Link
                to={`/users/${user.id}`}
                className="text-blue-800 hover:text-blue-700"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
      </div>
    </div>
  );
};

export default User;

// eve.holt@reqres.in