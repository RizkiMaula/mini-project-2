import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import InputText from '../components/Fragments/InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const User = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        console.log(res); //buat cek data dari api
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const option = [
    { label: 'Ascending', value: 1 },
    { label: 'Descending', value: 2 },
  ];

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // console.log('users', users); //buat cek users

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col gap-3 items-center justify-center w-full h-[43rem] px-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl">User List</h1>
          <div className="flex items-center w-[30rem] justify-between ">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <InputText
                label="Search"
                textType="text"
                textPlaceholder="Search"
                textSize="text-lg"
                style="border-2 border-black w-[20rem] p-1 rounded"
                event={(e) => setSearch(e.target.value)}
              />
            </div>
            <label
              htmlFor="sort"
              className="text-[0.9rem]"
            >
              Sorted by:
            </label>
            <select
              name="sort"
              id="sort"
              className="border-2 border-black w-[10rem] p-1 rounded"
              onChange={handleSort}
            >
              {option.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="w-full h-[3rem] text-center  border-collapse border-slate-500 ">
          <thead>
            <tr className="border-black border-y-2">
              <th className="border-y-2 bg-slate-600">Pic</th>
              <th className="border-y-2 bg-slate-600">Name</th>
              <th className="border-y-2 bg-slate-600">Email</th>
              <th className="border-y-2 bg-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                return search.toLowerCase() === '' ? user : user.first_name.toLowerCase().includes(search.toLowerCase()); // filter berdasarkan search, jika search kosong, tampilkan semua. jika user bernilai true, maka tampilkan nama yang diketik dan di dalamnya (includes) search
              })
              // .sort((a, b) => (a.first_name > b.first_name ? 1 : -1)) // udah sort berdasarkan asc dari first_name tapi maunya lewat select option
              .sort((a, b) => {
                if (sort === '1') {
                  return a.first_name > b.first_name ? 1 : -1;
                } else if (sort === '2') {
                  return a.first_name < b.first_name ? 1 : -1;
                }
              })
              .map((user) => (
                <tr key={user.id}>
                  <td className="border-y-2">
                    <div className="flex items-center justify-center">
                      <img
                        className="lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-xl"
                        src={user.avatar}
                        alt={user.first_name}
                      />
                    </div>
                  </td>
                  <td className="border-y-2">{user.first_name}</td>
                  <td className="border-y-2">{user.email}</td>
                  <td className="border-y-2">
                    <Link
                      to={`/users/${user.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Outlet />
      </div>
    </div>
  );
};

export default User;

// eve.holt@reqres.in
