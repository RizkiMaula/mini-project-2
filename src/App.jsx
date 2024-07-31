import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/user-details"
        element={<UserDetails />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
};

export default App;
