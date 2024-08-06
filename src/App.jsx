import { useRoutes } from 'react-router-dom';
import { RouteList } from './routes/RouteList';

// const App = () => {
//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={<Login />}
//       />
//       <Route
//         path="/"
//         element={<SharedLayout />}
//       >
//         <Route
//           index
//           element={<Home />}
//         />
//         <Route
//           path="/about"
//           element={<About />}
//         />
//         <Route
//           path="/users"
//           element={<Users />}
//         />
//         <Route
//           path="users/:userId"
//           element={<UserDetails />}
//         />
//         <Route
//           path="*"
//           element={<NotFound />}
//         />
//       </Route>
//       <Route
//         path="/register"
//         element={<Register />}
//       />
//     </Routes>
//   );
// };
const App = () => {
  const element = useRoutes(RouteList);
  return element;
};

export default App;
