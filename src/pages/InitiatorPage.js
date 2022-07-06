import React from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import SessionApi from '../api/SessionApi';
import { Card } from 'react-bootstrap';

function InitiatorPage() {
  const { state } = useLocation();
  console.log(state.location);
  console.log(state.radius);
  console.log(state.duration);
  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Initiating Your Group!</h1>
      </Card.Title>
      <Card.Text>
        <SessionApi location={state.location} radius={state.radius} duration={state.duration} />
      </Card.Text>
    </div>
  );
}

export default InitiatorPage;
