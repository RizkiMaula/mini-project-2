import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const isLogedin = localStorage.getItem('access_token');
  const handleLogout = () => {
    // api logout
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto">
      <img
        src={logo}
        alt="logo"
        className="w-12 h-12 rounded-full"
      />
      <nav className="bg-white px-2 sm:px-4 py-2.5 rounded  flex justify-center ">
        <Link
          to={'/'}
          className="flex items-center p-4"
        >
          Home
        </Link>
        <Link
          to={'/users'}
          className="flex items-center p-4"
        >
          Users
        </Link>
      </nav>
      {isLogedin === null && <Link to={'/login'}>Login</Link>}
      {isLogedin !== null && <button onClick={handleLogout}>logout</button>}
    </div>
  );
};

export default Navbar;
