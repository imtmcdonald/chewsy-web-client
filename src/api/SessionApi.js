import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Restaurant from '../components/Restaurant';

export default function SessionApi({ location, radius, duration }) {
  const [session, setSession] = useState('');
  const [generated, setGenerated] = useState('');
  const [durationStatus, setDurationStatus] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const url = 'https://chewsy-session.azurewebsites.net';

  const body = JSON.stringify({ location, radius });
  console.log(location);
  console.log(radius);

  const durationBody = JSON.stringify({ duration });
  console.log(duration);

  const headers = {
    'Content-Type': 'application/json',
  };

  const createSession = () => {
    console.log(`${url}/sessions/create_session`);
    axios.post(`${url}/sessions/create_session`)
      .then((response) => {
        console.log(response.data.id);
        setSession(response.data.id);
      });
  };

  const setDuration = () => {
    console.log(`${url}/sessions/${session}/set_duration`);
    axios.post(`${url}/sessions/${session}/set_duration`, durationBody, { headers })
      .then((response) => {
        console.log(response);
        setDurationStatus(true);
      });
  };

  const generateList = () => {
    console.log(`${url}/sessions/${session}/restaurants`);
    axios.post(`${url}/sessions/${session}/restaurants`, body, { headers })
      .then((response) => {
        console.log(response);
        setGenerated(true);
      });
  };

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
    createSession();
  }, []);

  useEffect(() => {
    setDuration();
  }, [session]);

  useEffect(() => {
    generateList();
  }, [session, durationStatus]);

  useEffect(() => {
    getRestaurants();
  }, [generated]);

  return (
    <Restaurant restaurants={restaurants} />
  );
}
