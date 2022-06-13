import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component {
    render() {
        return(
            <Container className="p-3">
                <h1 className="header">Chewsy</h1>
            </Container>
        )
    }
}