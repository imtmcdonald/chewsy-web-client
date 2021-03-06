import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import GetSessionApi from '../api/GetSessionApi';
import { Card } from 'react-bootstrap';

function RestaurantPage() {
  const { sessionId } = useParams();

  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Vote!</h1>
      </Card.Title>
      <Card.Text>
        <GetSessionApi session={sessionId} />
      </Card.Text>
    </div>
  );
}

export default RestaurantPage;
