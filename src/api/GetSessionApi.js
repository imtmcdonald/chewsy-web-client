import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Restaurant from '../components/Restaurant';

export default function GetSessionApi({ session }) {
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
      });
  };

  useEffect(() => {
    getRestaurants();
  }, [session]);

  return (
    <Restaurant restaurants={restaurants} />
  );
}
