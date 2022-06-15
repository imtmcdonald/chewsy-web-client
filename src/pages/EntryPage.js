import React from 'react';
import '../App.css';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';

function EntryPage() {
  return (
    <div className="app">
      <Header />
      <EmailForm />
    </div>
  );
}

export default EntryPage;
