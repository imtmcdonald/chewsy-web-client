import React from 'react';
import '../App.css';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

function InitiatorPage() {
  return (
    <div className="app">
      <Header />
      <SearchForm />
    </div>
  );
}

export default InitiatorPage;
