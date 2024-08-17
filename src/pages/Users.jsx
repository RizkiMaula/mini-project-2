import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import InputText from '../components/Fragments/InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBorderAll, faLeftLong, faList, faMagnifyingGlass, faRightLong } from '@fortawesome/free-solid-svg-icons';
import Table from '../components/Elements/Table';
const User = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    nextPage: 0,
    previousPage: 0,
    totalPages: 0,
  });

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?per_page=5&page=${pagination.currentPage}`)
      .then((res) => {
        // console.log(res.data.page - 1); //buat cek data dari api
        setUsers(res.data.data);
        setPagination({
          currentPage: res.data.page,
          nextPage: res.data.page + 1,
          previousPage: res.data.page - 1,
          totalPages: res.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleNext = () => {
    console.log(pagination.currentPage);

    setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
  };

  useEffect(() => {
    getUsers();
  }, [pagination.currentPage]);

  const handlePrevious = () => {
    console.log(pagination.currentPage);

    setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
  };

  const option = [
    { label: 'A-Z', value: 1 },
    { label: 'Z-A', value: 2 },
  ];

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // console.log('users', users); //buat cek users

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex flex-col gap-3 items-center justify-center w-full h-[43rem] px-3">
        <div className="flex items-center justify-between w-full p-3 bg-[#2F80ED] bg-opacity-[5%] rounded-full">
          <div className="flex items-center gap-1 px-3">
            <InputText
              label="Search"
              textType="text"
              textPlaceholder="Search"
              textSize="text-lg"
              style="border-2 border-black w-[20rem] p-1 rounded-full"
              event={(e) => setSearch(e.target.value)}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="flex items-center lg:w-[23rem] md:w-[18rem] sm:w-[15rem] justify-between px-3">
            <div className="flex items-center">
              <button className="p-[0.32rem] ring-2 ring-gray-300 rounded-l-full active:bg-[#2F80ED] active:bg-opacity-[20%]">
                <FontAwesomeIcon icon={faList} />
              </button>
              <button className="p-[0.32rem]  ring-2 ring-gray-300 rounded-r-full active:bg-[#2F80ED] active:bg-opacity-[20%]">
                <FontAwesomeIcon icon={faBorderAll} />
              </button>
            </div>
            <span className="flex items-center gap-3">
              <label
                htmlFor="sort"
                className="lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem] text-[0.6rem]"
              >
                Sorted by:
              </label>
              <select
                name="sort"
                id="sort"
                className="border-2 text-center border-black lg:w-[7rem] md:w-[6rem] sm:w-[5rem] p-1 rounded-full"
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
            </span>
          </div>
        </div>
        <Table
          logic={users
            .filter((user) => {
              return search.toLowerCase() === '' ? user : user.first_name.toLowerCase().includes(search.toLowerCase()); // filter berdasarkan search, jika search kosong, tampilkan semua. jika user bernilai true, maka tampilkan nama yang diketik dan di dalamnya (includes) search
            })
            .sort((a, b) => {
              if (sort === '1') {
                return a.first_name > b.first_name ? 1 : -1;
              } else if (sort === '2') {
                return a.first_name < b.first_name ? 1 : -1;
              }
            })
            .map((user) => (
              <tr key={user.id}>
                <td className="py-2 border-b-2">
                  <div className="flex items-center justify-center">
                    <img
                      className="lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-xl"
                      src={user.avatar}
                      alt={user.first_name}
                    />
                  </div>
                </td>
                <td className="border-y-2">
                  {user.first_name} {user.last_name}
                </td>
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
        />
        <div className="flex items-center justify-between w-full">
          <button
            disabled={pagination.currentPage === 1}
            className="text-blue-600 hover:text-blue-800"
            onClick={handlePrevious}
          >
            <FontAwesomeIcon icon={faLeftLong} /> Previous
          </button>
          <button
            className="text-blue-600 hover:text-blue-800"
            disabled={pagination.currentPage === pagination.totalPages}
            onClick={handleNext}
          >
            Next <FontAwesomeIcon icon={faRightLong} />
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default User;

// eve.holt@reqres.in
