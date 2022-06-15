import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default class EmailForm extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Card>
          <Card.Header as="h3">Let&quot;s Eat Together!</Card.Header>
          <Card.Body>
            <Card.Title>Enter your email below to get started.</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit" href="/initiator">
                  Get Started
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
