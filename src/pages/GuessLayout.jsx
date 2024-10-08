import { Outlet } from 'react-router-dom';
import Navbar from '../components/Fragments/Navbar';
import Footer from '../components/Fragments/Footer';

const GuessLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuessLayout;
