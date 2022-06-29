import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="display-4 pb-4">Let&apos;s Eat Together!</h1>
      </Container>
    );
  }
}
