import React from 'react';
import { useMMContext } from '../../../contexts/MMState';
import MMLinks from './MMLinks';

export default function MobileMenu() {

  const { mmOpen } = useMMContext();

  return (
    <div className={mmOpen ? 'mobileMenuOn' : 'mobileMenuOff'}>
      <ul>
        <MMLinks menuItem='Home' path='/' />
        <MMLinks menuItem='About' path='/about' />
        <MMLinks menuItem='Team' path='/team' />
        <MMLinks menuItem='Contact' path='/contact' />
      </ul>
    </div>
  )
}