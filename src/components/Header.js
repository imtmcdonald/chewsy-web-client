import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component {
  render() {
    return (
      <Container className="p-3" style={{ display: 'inline-block', textAlign: 'left' }}>
        <h1 className="display-4 fw-bold">Chewsy</h1>
      </Container>
    );
  }
}
