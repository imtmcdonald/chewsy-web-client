import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Restaurant from '../components/Restaurant';

export default function GetSessionApi({ session }) {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const url = 'https://chewsy-session.azurewebsites.net';

  console.log(session);
 
  const getRestaurants = () => {
    console.log(`${url}/sessions/${session}/restaurants`);
    axios.get(`${url}/sessions/${session}/restaurants`)
      .then((response) => {
        console.log(response);
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
