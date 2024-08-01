import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route, useParams } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import Register from './pages/Register';
import NotFound from './pages/404';
import SharedLayout from './pages/Sharedlayout';
import About from './pages/About';

const App = () => {
  let { userId } = useParams();
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/"
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="users/:userId"
          element={<UserDetails />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
};

export default App;
