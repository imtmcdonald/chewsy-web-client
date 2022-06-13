import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React, { useState, setState } from "react";

export default function Restaurant(props) {
    const [index, setIndex] = useState(0);

    const { restaurants } = props;

    return (
        <div>
            {restaurants.map((restaurant, i) => {
                console.log(restaurant);
                return (
                    <span hidden={i != index}>
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
            <Button onClick={() => setIndex(index < restaurants.length ? index + 1 : 0)}>Yes</Button>
            <Button onClick={() => setIndex(index < restaurants.length ? index + 1 : 0)}>No</Button>
        </div>
    )
}