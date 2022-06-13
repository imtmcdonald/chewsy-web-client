import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../components/Restaurant';

export default function SessionApi({ location, radius }) {
    const[session, setSession] = useState('')
    const[generated, setGenerated] = useState('')
    const[restaurants, setRestaurants] = useState([])

    const url = 'http://localhost:8090';

    const body = { location: location, radius: radius };
    console.log(location)
    console.log(radius)

    const headers = {
        'Content-Type': 'appliation/json'
    };

    const createSession = () => {
        console.log(url + '/sessions/create_session')
        axios.post(url + '/sessions/create_session')
        .then(response => {
            console.log(response.data.id);
            const session = response.data.id;
            setSession(session);
        });
    };

    const generateList = () => {
        console.log(url + '/sessions/' + session + '/restaurants')
        axios.post(url + '/sessions/' + session + '/restaurants', { headers }, { body })
        .then(response => {
            console.log(response);
            setGenerated(true)
        });
    };

    const getRestaurants = () => {
        console.log(url + '/sessions/' + session + '/restaurants')
        axios.get(url + '/sessions/' + session + '/restaurants')
        .then(response => {
            console.log(response);
            const myRestaurants = JSON.parse(response.data.restaurantList);
            setRestaurants(myRestaurants);
        });
    };

    useEffect(() => {
        createSession();
    }, []);

    useEffect(() => {
        generateList();
    }, [session]);

    useEffect(() => {
        getRestaurants();
    }, [generated]);

    return (
        <Restaurant restaurants={restaurants}/>
    )
}