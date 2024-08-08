import { useEffect, useState } from 'react';
import Square from '../Elements/Square';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import UserAPI from '../../helpers/UserAPI';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
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
    <div className="flex gap-3">
      <Square
        icon={faUser}
        // txtColor="text-white"
        text="User Registered"
        num={users.length}
        logoColor="text-black"
      />
      <Square
        icon={faCircle}
        text="Active User"
        num={users.length - users.length / 2}
      />
      <Square
        icon={faCircle}
        text="Inactive User"
        num={users.length - users.length / 2}
        logoColor="text-red-600"
      />
    </div>
  );
};

export default Dashboard;
