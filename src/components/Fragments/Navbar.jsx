import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <Link
        to={'/'}
        className="flex items-center"
      >
        Home
      </Link>
      <Link
        to={'/about'}
        className="flex items-center"
      >
        About
      </Link>
      <Link
        to={'/users'}
        className="flex items-center"
      >
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
