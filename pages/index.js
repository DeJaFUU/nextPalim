import React from 'react';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import CardList from '../components/CardList/CardList'

export default function Home() {
  return (
    <div className="homePage">
      <Header/>
        <Hero />
        <CardList />
      <Footer />
      </div>
  );
}
