import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import JoinForm from '../components/JoinForm';
import { useParams } from 'react-router-dom';

function JoinGroup() {
  const { sessionId, email } = useParams();

  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Join a Group</h1>
      </Card.Title>
      <Card.Text>
        <JoinForm paramSession={sessionId} paramEmail={email} />
      </Card.Text>
    </div>
  );
}

export default JoinGroup;
