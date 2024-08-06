import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Fragments/Navbar';

const SharedLayout = () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
