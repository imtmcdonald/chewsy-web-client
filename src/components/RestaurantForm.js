import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';

export default function RestaurantForm() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');
  const [duration, setDuration] = useState('');

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

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

  const handleBackButtonClicked = (event) => {
    event.preventDefault();
    navigate(
      '/'
    );
  };
  return (
    <Form aria-label="Create a Group" className="container" style={{ textAlign: 'left' }}>
      <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control aria-label="Email Address" name="email" id="email" type="email" placeholder="Enter email" value={email} onChange={handleEmailChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location:</Form.Label>
        <Form.Control aria-label="Location" name="location" id="location" type="location" placeholder="Enter location" value={location} onChange={handleLocationChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Radius (miles):</Form.Label>
        <Form.Select aria-label="Radius" name="radius" id="radius" onChange={handleRadiusChanged.bind(this)}>
          <option>Select radius (miles)</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="10">20</option>
          <option value="15">25</option>
          <option value="10">30</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Duration (days):</Form.Label>
        <Form.Select aria-label="Duration" name="duration" id="duration" onChange={handleDurationChanged.bind(this)}>
          <option>Select voting duration (days)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </Form.Select>
      </Form.Group>
      <Row>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'left' }}>
        <Button variant="danger" onClick={handleBackButtonClicked}>
          Go Back
        </Button>
        </Col>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'right' }}>
        <Button style={{ display: 'inline-block', textAlign: 'right' }} variant="success" onClick={handleButtonClicked.bind(this)}>
          Create Group
        </Button>
        </Col>
      </Row>
    </Form>
  );
}
