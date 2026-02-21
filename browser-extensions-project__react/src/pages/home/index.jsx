import React from 'react';
// import Navbar from '../../components/layout/Navbar';
import Header from './components/Header';
import CardsWrapper from './components/CardsWrapper';
import AppLayout from '../../components/layout/AppLayout';

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <AppLayout>
        <Header />
        <CardsWrapper />
      </AppLayout>
    </>
  );
}

export default Home;
