import { useNavigate } from 'react-router-dom';
import Auth from '../components/Fragments/Auth';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState('');

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

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      navigate('/');
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen gap-10 border-4 border-black bg-gradient-to-br from-[#77E4C8] to-[#478CCF]">
      <Auth
        text="Login"
        error={failed ? failed : ''}
        color="bg-blue-500"
        direct="/register"
        typeUser="email"
        typePass="password"
        placeholder="Email"
        style="w-40 h-8 px-1 "
        classname="w-40 h-8 px-1 "
        textCheck="Remember me"
        textDirect="Register here"
        alternate="Or Login With"
        ask="haven't an account?"
        eventInput={handleUsername}
        eventPass={handlePassword}
        eventButton={handleLogin}
      />
    </div>
  );
};

export default Login;
