import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Container, ButtonGroup, Card } from 'react-bootstrap';
import Tagline from '../components/Tagline';

function LandingPage() {
  return (
    <div className="app">
      <Card.Title>
        <Tagline />
      </Card.Title>
      <Card.Text>
        <Container>
          <ButtonGroup vertical>
            <Button className="mb-2 w-100" variant="dark" size="lg" href="/creategroup">Create a Group</Button>
            <Button className="mb-2 w-100" variant="dark" size="lg" href="/joingroup">Join a Group</Button>
            <Button className="mb-2 w-100" variant="dark" size="lg" href="/moreinfo">More Info</Button>
          </ButtonGroup>
        </Container>
    </Card.Text>
    </div>
  );
}

export default LandingPage;
