import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Container, ButtonGroup } from 'react-bootstrap';

function LandingPage() {
  return (
    <div className="app">
      <Container>
        <ButtonGroup vertical>
          <Button className="mb-2 w-100" variant="dark" size="lg" href="/creategroup">Create a Group</Button>
          <Button className="mb-2 w-100" variant="dark" size="lg" href="/joingroup">Join a Group</Button>
          <Button className="mb-2 w-100" variant="dark" size="lg" href="/moreinfo">More Info</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default LandingPage;
