import React from 'react';
import backInBiz from '../../assets/photos/atWork.jpg'
import headCap from '../../assets/icons/dmc - head caption white.png'

export default function HeadPhoto() {
  return (
    <div className='hpContainer'>
      <img className='headPhoto' src={backInBiz} alt='Getting Back to Work' />
      <div className='hpCaption'>
        <img src={headCap} alt='Getting Workers Back.' />
      </div>
    </div>
  )
}