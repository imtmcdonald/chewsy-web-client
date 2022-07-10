import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useVoteApi } from '../api/VoteApi';

export default function Restaurant(props) {
  const { state } = useLocation();
  const { sessionId } = useParams();
  const { restaurants } = props;
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState(false);
  const [restaurant, setRestaurant] = useState('');
  const [email, setEmail] = useState(state.email);
  
  const handleYesButtonClicked = (event) => {
    event.preventDefault();
    setVote(true);
    setRestaurant(restaurants[index].NAME);
    setIndex(index < restaurants.length ? index + 1 : 0);
  };

  const handleNoButtonClicked = (event) => {
    event.preventDefault();
    setVote(false);
    setIndex(index < restaurants.length ? index + 1 : 0);
  };

  useVoteApi(sessionId, email, restaurant, vote);

  return (
    <div>
      {restaurants.map((restaurant, i) => {
        return (
          <span hidden={i !== index}>
            <Container className="p-3">
              <Card.Body>
                <Card>
                  <Card.Header as="h3">Do you want to eat here?</Card.Header>
                  <Card.Title>{restaurant.NAME}</Card.Title>
                  <Card.Text>
                    <h4>{restaurant.ADDRESS}</h4>
                    <h4>{restaurant.RATING}</h4>
                  </Card.Text>
                </Card>
              </Card.Body>
            </Container>
          </span>
        );
      })}
      <Row>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'center' }}>
          <h3 style={index == restaurants.length ? {} : { display: 'none' }}>No more restaurants!</h3>
          <Button aria-label="yes" disabled={index == restaurants.length} onClick={handleYesButtonClicked.bind(this)}>Yes</Button>
          <Button aria-label="no" disabled={index == restaurants.length} className="ms-2" onClick={handleNoButtonClicked.bind(this)}>No</Button>
        </Col>
      </Row>
      <Row>
        <Col className="w-100" style={{ display: 'inline-block', textAlign: 'left' }}>
          <Button aria-label="back" className="m-1" variant="danger" disabled={index < 1} onClick={() => setIndex(index > 0 ? index - 1 : restaurants.length)}>
            Previous Restaurant
          </Button>
        </Col>
      </Row>  
    </div>
  );
}
