import React from 'react';

import Header from '../components/Header/Header'
import CardList from '../components/CardList/CardList'
import Footer from '../components/Footer/Footer'

export default function OnlinePage(){
  return (
    <div className="onlinePage">
      <Header />
      <CardList />
      <Footer />
    </div>
  )
}
