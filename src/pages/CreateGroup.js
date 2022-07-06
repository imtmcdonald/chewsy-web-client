import React from 'react';
import '../App.css';
import RestaurantForm from '../components/RestaurantForm';
import { Card } from 'react-bootstrap';

function CreateGroup() {
  return (
    <div className="app">
      <Card.Title>
        <h1 className="display-4 pb-4">Create a Group</h1>
      </Card.Title>
      <Card.Text>
        <RestaurantForm />
      </Card.Text>
    </div>
  );
}

export default CreateGroup;
