import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function SessionApi({ location, radius, duration }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState('');

  const url = 'https://chewsy-session.azurewebsites.net';  

  const body = JSON.stringify({ location, radius, duration });
  console.log(location);
  console.log(radius);
  console.log(duration);

  const headers = {
    'Content-Type': 'application/json',
  };

  const createSession = () => {
    console.log(`${url}/sessions/create_session`);
    axios.post(`${url}/sessions/create_session`, body, { headers })
      .then((response) => {
        console.log(response.data.id);
        setSession(response.data.id);
        setLoading((loading) => !loading);
      });
  };

  useEffect(() => {
    createSession();
  }, []);

  if (loading) {
    return (
      <h3>Getting the list from the Concierge <Spinner animation="border" /></h3>
    )
  } else {
    return (
      <Navigate to={`/addattendees/${session}`} />
    )
  }
}
