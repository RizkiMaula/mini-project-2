import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Fragments/Dashboard';
import Footer from '../components/Fragments/Footer';

const Home = () => {
  // console.log('users', users); //buat cek users

  return (
    <div className="h-screen border-4 border-black">
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-justify">
        <h1 className="text-3xl font-bold text-center underline">Dashboard</h1>
        <Dashboard />
        <Link to={'/users'}>
          See User List <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
