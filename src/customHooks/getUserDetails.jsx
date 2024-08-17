import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const getUSerDetails = () => {
  // 1. deklarasi state
  const [user, setUser] = useState({});
  // 2. dapetin semua user berdasarkan id dari api
  const getUser = () => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        // console.log(res.data.data); //buat cek data dari api berdasarkan id
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const { userId } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};

export default getUSerDetails;
