import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function AddAttendeesApi({ session, attendees }) {
  const [loading, setLoading] = useState(true);
  const [attendee, setAttendee] = useState([]);

  const url = 'https://chewsy-session.azurewebsites.net';

  console.log(session);
  console.log(attendees);
 
  const addAttendees = () => {
    var i;

    for(i=0; i < attendees.length; i++) {
      console.log(attendees[i]);
      setAttendee(attendees[i]);
      const body = JSON.stringify(attendees[i]);
      const headers = {
        'Content-Type': 'application/json',
      };
    
      console.log(`${url}/sessions/${session}/attendees`);
      axios.post(`${url}/sessions/${session}/attendees`, body, { headers })
        .then((response) => {
          console.log(response);
        });
    };
    setLoading((loading) => !loading);
  };

  useEffect(() => {
    addAttendees();
  }, []);

  if (loading) {
    return (
      <h3>Inviting the attendees <Spinner animation="border" /></h3>
    )
  } else {
    return (
      <Navigate to={`/restaurant/${session}`} />
    )
  }
}
