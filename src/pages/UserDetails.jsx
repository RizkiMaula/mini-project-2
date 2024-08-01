import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import OuterContainer from '../components/Fragments/OuterContainer';

const UserDetails = () => {
  // 1. deklarasi state
  const [user, setUser] = useState({});
  // 2. dapetin semua user berdasarkan id dari api
  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        // console.log(res.data.data); //buat cek data dari api berdasarkan id
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log('user', user); //buat cek users

  // 3. destructuring object yang dari api
  const { id, first_name, last_name, email, avatar } = user;

  const { userId } = useParams();

  // 4. tampilin data user (render*) berdasarkan id
  return (
    <OuterContainer>
      <div className="z-10 flex items-center justify-center gap-3 p-4 bg-white border-black border-3 rounded-xl ">
        <img
          src={avatar}
          alt="avatar"
          className="w-[10rem] h-[10rem] rounded-md"
        />
        <div className="flex flex-col">
          <h1>
            Name: {first_name} {last_name}{' '}
          </h1>
          <hr />
          <h1>Email: {email}</h1>
        </div>
      </div>
      <Link to={'/users'}>Back To Users Menu</Link>
    </OuterContainer>
  );
};

export default UserDetails;
