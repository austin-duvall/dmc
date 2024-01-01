import React from 'react';
import { useMMContext } from '../../contexts/MMState';
import dmcWhite from '../../assets/icons/dmc - white.png'
import burger from '../../assets/icons/dmc - burger.png'
import exit from '../../assets/icons/dmc - exit.png'
import { Link } from 'react-router-dom';


// button will need to be conditional

export default function Header() {

  const { mmOpen, setMMOpen } = useMMContext();

  const handleClick = () => {
    setMMOpen(!mmOpen)
  };

  return (
    <header>
      <Link to='/'>
        <img id='logo' src={dmcWhite} alt='DMC Logo' />
      </Link>
      <button onClick={handleClick} type='button'>
        {mmOpen ?
          <img className='menuIcon' src={exit} alt='exit out' />
          :
          <img className='menuIcon' src={burger} alt='open menu' />
        }
      </button>
    </header>
  )
}