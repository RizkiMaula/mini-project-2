import axios from 'axios';
import { useEffect, useState } from 'react';

const UserAPI = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    nextPage: 0,
    previousPage: 0,
    totalPages: 0,
  });
  // all users
  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?per_page=5&page=${pagination.currentPage}`)
      .then((res) => {
        // console.log(res.data.data); //buat cek data dari api
        setUsers(res.data.data);
        setTotal(res.data.total);
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

  const handlePrevious = () => {
    setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
  };

  const handleNext = () => {
    setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
  };

  useEffect(() => {
    getUsers();
  }, [pagination.currentPage]);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // get user by id

  return { users, total, search, sort, pagination, handleNext, handlePrevious, handleSort, setSearch };
};

export default UserAPI;
