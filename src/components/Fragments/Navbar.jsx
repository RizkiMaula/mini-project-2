import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  flex justify-center border-4">
      <Link
        to={'/'}
        className="flex items-center p-4"
      >
        Home
      </Link>
      <Link
        to={'/about'}
        className="flex items-center p-4"
      >
        About
      </Link>
      <Link
        to={'/users'}
        className="flex items-center p-4"
      >
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
