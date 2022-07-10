import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import JoinForm from '../components/JoinForm';

function JoinGroup() {
  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Join a Group</h1>
      </Card.Title>
      <Card.Text>
        <JoinForm />
      </Card.Text>
    </div>
  );
}

export default JoinGroup;
