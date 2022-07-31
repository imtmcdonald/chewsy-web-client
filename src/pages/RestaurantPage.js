import React from 'react';
import '../App.css';
import { useParams, useLocation } from 'react-router-dom';
import GetSessionApi from '../api/GetSessionApi';
import { Card } from 'react-bootstrap';

function RestaurantPage() {
  const { sessionId } = useParams();

  return (
    <div className="app">
      <Card.Text>
        <GetSessionApi session={sessionId} />
      </Card.Text>
    </div>
  );
}

export default RestaurantPage;
