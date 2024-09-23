import NotFound from '../pages/404';
import GuessLayout from '../pages/GuessLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SharedLayout from '../pages/Sharedlayout';
import UserDetails from '../pages/UserDetails';
import User from '../pages/Users';
import Coba from '../pages/Coba';

export const RouteList = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <User />,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: '/guess',
    element: <GuessLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'coba-doang',
        element: <Coba />,
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
  },
];
