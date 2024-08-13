import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
    <div>
      <div className="z-10 flex flex-col items-center justify-center gap-3 p-4 bg-white border-black border-3 rounded-xl w-[30rem] ">
        <img
          src={avatar}
          alt="avatar"
          className="w-[10rem] h-[10rem] rounded-md"
        />
        <div className="flex flex-col text-center">
          <h1>
            Name: {first_name} {last_name}{' '}
          </h1>
          <hr />
          <h1>Email: {email}</h1>
          <hr />
          <h1>
            About: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sit itaque eos veritatis obcaecati quisquam at reprehenderit doloremque fugit id aspernatur, laborum maxime sapiente rerum! Culpa labore magni sed
            hic itaque!
          </h1>
          <hr />
        </div>
        <div className="flex gap-3 text-3xl">
          <Link
            to={`https://twitter.com/`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            {' '}
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link
            to={`https://linkedin.com/`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            {' '}
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link
            to={`https://instagram.com/`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            {' '}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
      <Link
        to={'/users'}
        className="font-bold text-blue-600 hover:text-blue-800"
      >
        {' '}
        <FontAwesomeIcon icon={faArrowLeft} /> Back To Users Menu
      </Link>
    </div>
  );
};

export default UserDetails;
