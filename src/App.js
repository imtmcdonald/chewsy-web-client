import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import LandingPage from './pages/LandingPage';
import InitiatorPage from './pages/InitiatorPage';
import RestaurantPage from './pages/RestaurantPage';
import Header from './components/Header';
import Tagline from './components/Tagline';
import CreateGroup from './pages/CreateGroup';
import JoinGroup from './pages/JoinGroup';
import MoreInfo from './pages/MoreInfo';

export default function App() {
  return (
    <Container className="p-5 w-auto">
      <Card className="text-center" style={{ background: 'rgba(255,255,255,0.8)' }}>
        <Card.Body>
          <Header />
          <Card.Title>
            <Tagline />
          </Card.Title>
          <Card.Text>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/creategroup" element={<CreateGroup />} />
              <Route exact path="/joingroup" element={<JoinGroup />} />
              <Route exact path="/moreinfo" element={<MoreInfo />} />
              <Route exact path="/initiator" element={<InitiatorPage />} />
              <Route exact path="/restaurant" element={<RestaurantPage />} />
            </Routes>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
