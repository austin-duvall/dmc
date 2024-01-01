import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/edges/Header';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/edges/Footer';
import './App.css'
import MobileMenu from './components/menu/mobile/MobileMenu';
import MMState from './contexts/MMState';

export default function App() {
  return (
    <>
      <MMState>
        <Header />
        <MobileMenu />
      </MMState>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
};