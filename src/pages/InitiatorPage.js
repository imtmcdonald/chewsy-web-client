import React from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import SessionApi from '../api/SessionApi';

function InitiatorPage() {
  const { state } = useLocation();
  console.log(state.location);
  console.log(state.radius);
  console.log(state.duration);
  return (
    <div className="app">
      <SessionApi location={state.location} radius={state.radius} duration={state.duration} />
    </div>
  );
}

export default InitiatorPage;
