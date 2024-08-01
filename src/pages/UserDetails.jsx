import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
  console.log(useParams());
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
      <Link to={'/users'}>Back To Users Menu</Link>
    </div>
  );
};

export default UserDetails;
