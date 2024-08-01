import { Outlet } from 'react-router-dom';
import Navbar from '../components/Fragments/Navbar';

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
