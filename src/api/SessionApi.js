import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function SessionApi() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState('');
  const location = state.location;
  const radius = state.radius;
  const duration = state.duration;
  const initiator = state.email;

  const url = 'https://chewsy-session.azurewebsites.net';
  // const url = 'http://localhost:8090';

  const body = JSON.stringify({ location, radius, duration });

  const headers = {
    'Content-Type': 'application/json',
  };

  const createSession = () => {
    axios.post(`${url}/sessions/create_session`, body, { headers })
      .then((response) => {
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
      <Navigate to={`/addattendees/${session}`} state={{initiator: initiator}} />
    )
  }
}
