import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import Restaurant from '../components/Restaurant';

export default function GetSessionApi({ session }) {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const url = 'https://chewsy-session.azurewebsites.net';
  // const url = 'http://localhost:8090';
 
  const getRestaurants = () => {
    axios.get(`${url}/sessions/${session}/restaurants`)
      .then((response) => {
        const myRestaurants = JSON.parse(response.data.restaurantList);
        setRestaurants(myRestaurants);
        setLoading((loading) => !loading);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, [session]);

  if (loading) {
    return (
      <h3>Loading Restaurants... <Spinner animation="border" /></h3>
    )
  } else {
    return (
      <Restaurant restaurants={restaurants} />
    )
  }
}
