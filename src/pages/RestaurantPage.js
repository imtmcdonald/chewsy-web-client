import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import GetSessionApi from '../api/GetSessionApi';

function RestaurantPage() {
  const { sessionId } = useParams();

  return (
    <div className="app">
      <GetSessionApi session={sessionId} />
    </div>
  );
}

export default RestaurantPage;
