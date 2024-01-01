import React from 'react';

export default function Partners({ src, name, location, alt }) {
  return (
    <div className='partnerContainer'>
      <img src={src} alt={alt} />
      <h2>{name}</h2>
      <h3>{location}</h3>
    </div>
  )
}