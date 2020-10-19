import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import CardList from '../CardList/CardList'


export default function Album() {
  return (

    <React.Fragment>
      <Header/>
      <main>
        <Hero />
        <CardList />
      </main>
      <Footer />
    </React.Fragment>
  );
}
