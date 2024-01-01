import React from 'react';
import aboutHead from '../../assets/photos/about.jpg';
import comeBack from '../../assets/icons/comeBack.png';

export default function AboutHeadPhoto() {
  return (
    <div className='aboutHpContainer'>
      <img src={aboutHead} className='headPhotoAbout' alt='Who We Are' />
      <div className='hpCaption'>
        <img src={comeBack} alt='Come Back Strong' />
      </div>
    </div>
  )
}