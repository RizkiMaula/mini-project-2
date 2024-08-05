import { Link, useNavigate } from 'react-router-dom';
import InputText from '../components/Fragments/InputText';
import Title from '../components/Elements/Title';
import Button from '../components/Elements/Button';
import InnerContainer from '../components/Fragments/InnerContainer';
import OuterContainer from '../components/Fragments/OuterContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState('');

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const handleUsername = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // console.log(`username: ${username}, password: ${password}`);

    const payload = {
      username: username,
      password: password,
    };

    axios
      .post('https://reqres.in/api/login', payload) // dapetin semua user untuk login dari api
      .then((res) => {
        // console.log(res); // liat isi dari response untuk liat alamat token
        localStorage.setItem('access_token', res.data.token); // simpan token ke local storage dan ambil akses token di alamat res.data.token
        navigate('/'); // arahkan ke halaman utama
      })
      .catch((err) => {
        // console.log(err.response); // kalo gagal liat respons error dan liat alamat pemberitahuan errornya dari api
        setFailed(err.response.data.error); // simpan pesan error ke state
      });
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Title
          text="Login"
          classname="text-xl font-bold text-center text-white"
        />
        <hr className="w-full" />
        <form
          action=""
          method="get"
          className="flex flex-col gap-3"
        >
          <InputText
            event={handleUsername}
            label="Username"
            textType="text"
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
          event={handleLogin}
          text="Login"
          bgColor="bg-blue-500"
        />
        {failed ? <p className="text-red-500">{failed}</p> : null} {/* kalo ada pesan error, tampilkan pesan error */}
      </InnerContainer>
      <p>
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-800"
        >
          Register
        </Link>
      </p>
    </OuterContainer>
  );
};

export default Login;
