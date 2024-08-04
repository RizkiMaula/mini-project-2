import InnerContainer from '../components/Fragments/InnerContainer';
import OuterContainer from '../components/Fragments/OuterContainer';
import InputText from '../components/Fragments/InputText';
import Button from '../components/Elements/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState('');

  useEffect(() => {}, []);

  const handleUsername = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // console.log(`username: ${username}, password: ${password}`);

    const payload = {
      username: username,
      password: password,
    };

    axios
      .post('https://reqres.in/api/register', payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        // setFailed(err.response.data.error);
      });
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <h1 className="text-3xl font-bold text-center text-white">Register</h1>
        <hr className="w-full" />
        <form
          action=""
          method="get"
          className="flex flex-col gap-3"
        >
          <InputText
            event={handleUsername}
            label="Username"
            textType="email"
            textPlaceholder="example@mail.com"
          />
          <InputText
            event={handlePassword}
            label="Password"
            textType="Password"
            textPlaceholder="Password"
          />
        </form>
        <Button
          event={handleRegister}
          bgColor="bg-blue-500"
          text="Register"
        />
      </InnerContainer>
      <p>
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-800"
        >
          Login
        </Link>
      </p>
    </OuterContainer>
  );
};

export default Register;
