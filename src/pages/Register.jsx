import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../components/Fragments/Auth';
import register from '../components/images/register.jpg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleUsername = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post('https://reqres.in/api/register', payload)
      .then((res) => {
        setSuccess('Register Success, You will be redirected to login page in 3 seconds...');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
        setFailed('');
      })
      .catch((err) => {
        console.log(err.response);
        setFailed(err.response.data.error);
        setSuccess('');
      });
  };

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      navigate('/');
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen gap-10 border-4 border-black">
      <div>
        <img
          src={register}
          alt="login"
          className="w-[32rem] h-[37.563rem] object-cover"
        />
      </div>
      <Auth
        text="Register"
        error={failed ? <p className="text-red-500">{failed}</p> : null}
        color="bg-blue-500"
        direct="/login"
        typeUser="email"
        typePass="password"
        placeholder="Email"
        style="w-40 h-8 px-1 "
        classname="w-40 h-8 px-1 "
        textCheck="I agree with the term and condition"
        textDirect="Login here"
        alternate="Or Register With"
        ask="Already have an account?"
        eventInput={handleUsername}
        eventPass={handlePassword}
        eventButton={handleRegister}
      />
      {success ? alert(success) : null}
    </div>
  );
};

export default Register;
