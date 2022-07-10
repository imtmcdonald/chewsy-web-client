import React from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import AddAttendeesApi from '../api/AddAttendeesApi';
import { Card } from 'react-bootstrap';

function InvitePage() {
  const { state } = useLocation();

  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Inviting your attendees!</h1>
      </Card.Title>
      <Card.Text>
        <AddAttendeesApi />
      </Card.Text>
    </div>
  );
}

export default InvitePage;
