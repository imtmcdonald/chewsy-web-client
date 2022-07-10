import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function AddAttendeesApi() {
  const [loading, setLoading] = useState(0);
  const { state } = useLocation();
  const session = state.session;
  const attendees = state.attendees;
  const initiator = state.initiator;

  const url = 'https://chewsy-session.azurewebsites.net';
  // const url = 'http://localhost:8090';

  const addAttendees = () => {
    var i;

    for(i=0; i < attendees.length; i++) {
      const body = JSON.stringify(attendees[i]);
      const headers = {
        'Content-Type': 'application/json',
      };
    
      axios.post(`${url}/sessions/${session}/attendees`, body, { headers })
        .then((response) => {
          setLoading(i);
        });
    };
  };

  useEffect(() => {
    addAttendees();
  }, []);

  if (loading < attendees.length) {
    return (
      <h3>Inviting the attendees <Spinner animation="border" /></h3>
    )
  } else {
    return (
      <Navigate to={`/restaurant/${session}`} state={{email: initiator}} />
    )
  }
}
