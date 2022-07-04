import React from 'react';
import '../App.css';
import AttendeeForm from '../components/AttendeeForm';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function AddAttendees() {
  const { sessionId } = useParams();

  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Add Attendees</h1>
      </Card.Title>
      <Card.Text>
        <AttendeeForm session={sessionId} />
      </Card.Text>
    </div>
  );
}

export default AddAttendees;
