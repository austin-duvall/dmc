import React from 'react';
import { Link } from 'react-router-dom';
import { useMMContext } from '../../../contexts/MMState';

export default function MMLinks({ path, menuItem }) {

  const { mmOpen, setMMOpen } = useMMContext();

  const handleClick = () => {
    setMMOpen(false)
  }

  return (
    <li className='mmLink'>
      <Link onClick={handleClick} to={path}>
        {menuItem}
      </Link>
    </li>
  )
}