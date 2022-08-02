import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useVoteApi } from '../api/VoteApi';
import { useSessionStatusApi } from '../api/SessionStatusApi';

export default function Restaurant(props) {
  const { state } = useLocation();
  const { sessionId } = useParams();
  const { restaurants } = props;
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState(null);
  const [restaurant, setRestaurant] = useState('');
  const [email, setEmail] = useState(state.email);

  var complete = useSessionStatusApi({ sessionId, index }).complete;

  const handleYesButtonClicked = (event) => {
    event.preventDefault();
    setVote(true);
    setRestaurant(restaurants[index].NAME);
    setIndex(index < restaurants.length ? index + 1 : 0);
  };

  const handleNoButtonClicked = (event) => {
    event.preventDefault();
    setVote(false);
    setRestaurant(restaurants[index].NAME);
    setIndex(index < restaurants.length ? index + 1 : 0);
  };

  const handlePreviousButtonClicked = (event) => {
    event.preventDefault();
    setVote(null);
    setIndex(index > 0 ? index - 1 : restaurants.length);
  };

  useVoteApi(sessionId, email, restaurant, vote, complete);

  if (complete) {
    return (
      <div>
        <Card.Title>
          <h1 className="display-4 p-3">Voting Complete!</h1>
        </Card.Title>
        {/* <Card.Body as="p-3">
          <Card>
            <Card.Header as="h3">Your group chose to eat at:</Card.Header>
            <Card.Title as="h4">Name</Card.Title>
            <Card.Text>
              <h5>Address</h5>
              <h5>Rating</h5>
            </Card.Text>
          </Card>
        </Card.Body> */}
      </div>
    )
  } else {
    return (
      <div>
        <Card.Title>
          <h1 className="display-4 p-3" style={index != restaurants.length ? {} : { display: 'none' }}>Vote!</h1>
          <h1 className="display-4 p-3" style={index == restaurants.length ? {} : { display: 'none' }}>No more restaurants!</h1>
        </Card.Title>
        <Card.Body as="p-3">
        {restaurants.map((restaurant, i) => {
          return (
            <span hidden={i !== index}>
              <Card>
                <Card.Header as="h3">Do you want to eat here?</Card.Header>
                <Card.Title as="h4">{restaurant.NAME}</Card.Title>
                <Card.Text>
                  <h5>{restaurant.ADDRESS}</h5>
                  <h5>{restaurant.RATING}</h5>
                </Card.Text>
              </Card>
            </span>
          );
        })}
        <Row>
          <Col className="w-100 p-3" style={{ display: 'inline-block', textAlign: 'center' }}>
            <Button aria-label="yes" disabled={index == restaurants.length} onClick={handleYesButtonClicked.bind(this)}>Yes</Button>
            <Button aria-label="no" disabled={index == restaurants.length} className="ms-2" onClick={handleNoButtonClicked.bind(this)}>No</Button>
          </Col>
        </Row>
        <Row>
          <Col className="w-100" style={{ display: 'inline-block', textAlign: 'left' }}>
            <Button aria-label="back" variant="danger" disabled={index < 1} onClick={handlePreviousButtonClicked.bind(this)}>
              Previous Restaurant
            </Button>
          </Col>
        </Row>
        </Card.Body>
      </div>
    );
  }
}
