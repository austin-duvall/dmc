import React from 'react';

export default function Employees({ src, name, location, alt }) {
  return (
    <div className='employeeContainer'>
      <img src={src} alt={alt} />
      <h2>{name}</h2>
      <h3>{location}</h3>
    </div>
  )
}