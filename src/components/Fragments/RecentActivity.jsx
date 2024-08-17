import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Table from '../Elements/Table';

const RecentActivity = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users?per_page=3&page=3')
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

  return (
    <div className="flex flex-col gap-4">
      <h3>Top Users</h3>
      <Table
        logic={users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 border-b-2">
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
            <td className="border-y-2">
              <Link
                to={`/users/${user.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                View Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </td>
          </tr>
        ))}
      />
    </div>
  );
};

export default RecentActivity;
