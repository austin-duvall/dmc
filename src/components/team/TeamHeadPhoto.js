import React from 'react';
import meetTeam from '../../assets/icons/Meet Our Team 2.png';
import ourTeam from '../../assets/photos/ourTeam.jpg'

export default function TeamHeadPhoto() {
  return (
    <div className='hpContainer'>
      <img src={ourTeam} className='headPhotoAbout' id='ourTeam' alt='Diverse group of hands' />
      <div className='hpCaption'>
        <img src={meetTeam} id='teamHeader' alt='Meet Our Team' />
      </div>
  </div>
  )
}