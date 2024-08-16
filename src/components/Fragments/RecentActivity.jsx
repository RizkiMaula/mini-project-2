import axios from 'axios';
import { useEffect, useState } from 'react';

const RecentActivity = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users?per_page=3&page=3')
      .then((res) => {
        console.log(res.data.data); //buat cek data dari api
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3>Top Users</h3>
      <table className="w-full h-[3rem] text-center  border-collapse border-slate-500">
        <thead>
          <tr className="border-red-700 border-3">
            <th className="bg-[#2F80ED] bg-opacity-[20%] py-3 rounded-l-lg">Pic</th>
            <th className="bg-[#2F80ED] bg-opacity-[20%] py-3">Name</th>
            <th className="bg-[#2F80ED] bg-opacity-[20%] py-3 rounded-r-lg">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b-2 py-2">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-xl"
                    src={user.avatar}
                    alt={user.first_name}
                  />
                </div>
              </td>
              <td className="border-y-2">
                {user.first_name} {user.last_name}
              </td>
              <td className="border-y-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
