import React from 'react';
import contactHead from '../../assets/photos/contactHead.jpg'
import getInTouch from '../../assets/icons/getInTouch.png'

export default function ContactHeadPhoto() {
  return (
    <div className='hpContainer'>
      <img className='headPhotoAbout' src={contactHead} alt='Person on cell phone' />
      <div className='hpCaption'>
        <img src={getInTouch} id='contactHeader' alt='Get In Touch' />
      </div>
    </div>
  )
}