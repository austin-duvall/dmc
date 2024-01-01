import React from 'react';
import pin from '../../assets/icons/pin.png'
import telephone from '../../assets/icons/phone.png'
import faxMachine from '../../assets/icons/fax.png'



export default function Location({ location, street, town, phone, fax }) {
  return (
    <div className='locationContainer'>
      <h2>{location}</h2>
      <ul>
        <li>
          <img className='locationIcon' src={pin} alt='location pin' />
          <div>
            <p>{street}</p>
            <p>{town}</p>
          </div>
        </li>
        <li>
          <img className='locationIcon' src={telephone} alt='telephone' />
          <p>{phone}</p>
        </li>
        <li>
        <img className='locationIcon' src={faxMachine} alt='fax machine' />
          <p>{fax}</p>
        </li>
      </ul>
    </div>
  )
}