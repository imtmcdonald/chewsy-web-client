import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';

export default function JoinForm() {
  const [email, setEmail] = useState('');
  const [session, setSession] = useState('');

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const handleSessionChanged = (event) => {
    setSession(event.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClicked = (event) => {
    event.preventDefault();
    navigate(
      `/restaurant/${session}`,
      {
        state: {
          email,
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
    <Form aria-label="Join a Group" className="container" style={{ textAlign: 'left' }}>
      <Form.Group className="mb-3 text-left" controlId="email">
        <Form.Label>Email address:</Form.Label>
        <Form.Control aria-label="Email Address" name="email" type="email" placeholder="Enter email" value={email} onChange={handleEmailChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="session">
        <Form.Label>Session ID:</Form.Label>
        <Form.Control aria-label="Session" name="session" type="session" placeholder="Enter session ID" value={session} onChange={handleSessionChanged.bind(this)} />
      </Form.Group>
      <Row>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'left' }}>
        <Button aria-label="back" variant="danger" onClick={handleBackButtonClicked}>
          Go Back
        </Button>
        </Col>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'right' }}>
        <Button aria-label="join" style={{ display: 'inline-block', textAlign: 'right' }} variant="success" onClick={handleButtonClicked.bind(this)}>
          Join Group
        </Button>
        </Col>
      </Row>
    </Form>
  );
}
