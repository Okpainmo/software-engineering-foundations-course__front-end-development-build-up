import React from 'react';
import Header from './components/Header';
import MainTextArea from './components/MainTextArea';
import AppLayout from '../../components/layout/AppLayout';
import { Link } from 'react-router-dom';

function About() {
  return (
    <AppLayout>
      <main style={{ width: '100%' }}>
        <Header />
        <MainTextArea />
        <div style={{ marginTop: '1rem' }}>
          <Link to='/'>Go to Home</Link>
        </div>
      </main>
    </AppLayout>
  );
}

export default About;
