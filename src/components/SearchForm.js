import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import RestaurantForm from '../components/RestaurantForm';


export default class SearchForm extends React.Component {
    render() {
        return (
            <Container className="p-3">
                <Card>
                <Card.Header as="h3">Let's Eat Together!</Card.Header>
                <Card.Body>
                    <Card.Title>Enter your location and search radius.</Card.Title>
                    <Card.Text>
                    <RestaurantForm/>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>
        )
    }
}