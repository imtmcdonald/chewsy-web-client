import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function RestaurantForm() {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');
  const [duration, setDuration] = useState('');

  const handleLocationChanged = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };

  const handleRadiusChanged = (event) => {
    setRadius(event.target.value);
    console.log(radius);
  };

  const handleDurationChanged = (event) => {
    setDuration(event.target.value);
    console.log(duration);
  };

  const navigate = useNavigate();

  const handleButtonClicked = (event) => {
    console.log(location);
    console.log(radius);
    event.preventDefault();
    navigate(
      '/initiator',
      {
        state: {
          location,
          radius,
          duration,
        },
      },
    );
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="location" placeholder="Enter location" value={location} onChange={handleLocationChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Radius</Form.Label>
        <Form.Control type="radius" placeholder="Enter radius" value={radius} onChange={handleRadiusChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Voting Duration in Days</Form.Label>
        <Form.Control type="duration" placeholder="Enter voting duration (days)" value={duration} onChange={handleDurationChanged.bind(this)} />
      </Form.Group>
      <Button variant="primary" onClick={handleButtonClicked.bind(this)}>
        Get Restaurants
      </Button>
    </Form>
  );
}
