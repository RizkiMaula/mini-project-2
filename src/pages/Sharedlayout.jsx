import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Fragments/Navbar';
import Footer from '../components/Fragments/Footer';

const SharedLayout = () => {
  const token = localStorage.getItem('accessToken');
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
      <Footer />
    </div>
  );
};

export default SharedLayout;
