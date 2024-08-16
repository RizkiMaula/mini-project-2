import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Fragments/Dashboard';
import RecentActivity from '../components/Fragments/RecentActivity';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4 text-justify justify-center w-full items-stretch">
      <h1 className="text-3xl font-bold text-center underline">Dashboard</h1>
      <Dashboard />
      <RecentActivity />
      <Link
        to={'/users'}
        className="text-center"
      >
        See User List <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </Link>
    </div>
  );
};

export default Home;
