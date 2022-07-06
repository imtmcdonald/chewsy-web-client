import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function AttendeeForm({ session }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState('');
  const [attendees, setAttendees] = useState([]);

  console.log(session);

  const handleNameChanged = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const navigate = useNavigate();

  const handleButtonClicked = (event) => {
    console.log(attendees);
    event.preventDefault();
    navigate(
      '/invite',
      {
        state: {
          attendees,
          session,
        },
      },
    );
  };

  const handleBackButtonClicked = (event) => {
    event.preventDefault();
    navigate(
      '/creategroup'
    );
  };

  const handleAddAnotherButtonClicked = (event) => {
    event.preventDefault();
    setAttendees(current => [...current, { name: name, email: email}]);
    console.log(attendees);
    setName('');
    setEmail('');
  };

  const handleDeleteButtonClicked = (index) => {
    console.log(index);
    setAttendees([
      ...attendees.slice(0, index),
      ...attendees.slice(index + 1, attendees.length)
    ]);
  };

  const handleEditButtonClicked = (index) => {
    console.log(index);
    setIndex(index);
    setName(attendees[index].name);
    setEmail(attendees[index].email);
    setEdit(true);
  };

  const handleUpdateButtonClicked = (event) => {
    event.preventDefault();
    const updatedAttendees = [...attendees];
    updatedAttendees[index] = { name: name, email: email };
    setAttendees(updatedAttendees);
    setEdit(false);
    setName('');
    setEmail('');
    console.log(attendees);
  };

  return (
    <Form aria-label="Add Attendees" className="container" style={{ textAlign: 'left' }}>
      <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control aria-label="Name" name="name" id="name" type="name" placeholder="Enter name" value={name} onChange={handleNameChanged.bind(this)} />
      </Form.Group>
      <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control aria-label="Email Address" name="email" id="email" type="email" placeholder="Enter email" value={email} onChange={handleEmailChanged.bind(this)} />
      </Form.Group>
      <Row className="mb-3">
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'center' }}>
          <Button aria-label="add" style={edit ? { display: 'none' } : {}} disabled={!name || !email} variant="primary" onClick={handleAddAnotherButtonClicked}>
            Add Attendee
          </Button>
          <Button aria-label="update" style={edit ? {} : { display: 'none' }} disabled={!name || !email} variant="primary" onClick={handleUpdateButtonClicked}>
            Update
          </Button>
        </Col>
      </Row>
      {attendees.map((attendee, index) => {
        console.log(attendee);
        // console.log(index);
        return (
        <ListGroup className="mb-3">
          <ListGroup.Item>
            <Row aria-label="attendees">
            <Col className="text-truncate">
            <b>Name: </b>{attendee.name}, <b>Email: </b>{attendee.email}
            </Col>
            <Col className="w-100" style={{ display: 'inline-block', textAlign: 'right' }}>
            <FontAwesomeIcon aria-label="edit-icon" className="btn btn-warning ms-2" icon={faPenToSquare} onClick={handleEditButtonClicked.bind(this, index)} />
            <FontAwesomeIcon aria-label="delete-icon" className="btn btn-danger ms-2" icon={faTrash} onClick={handleDeleteButtonClicked.bind(this, index)} />
            </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        );
      })}
      <Row>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'left' }}>
        <Button aria-label="back" className="m-1" variant="danger" onClick={handleBackButtonClicked}>
          Go Back
        </Button>
        </Col>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'right' }}>
        <Button aria-label="invite" className="m-1" variant="success" disabled={attendees.length==0} onClick={handleButtonClicked.bind(this)}>
          Invite Attendees
        </Button>
        <Button aria-label="skip" variant="outline-success" onClick={handleButtonClicked.bind(this)}>
          Skip
        </Button>
        </Col>
      </Row>
    </Form>
  );
}
