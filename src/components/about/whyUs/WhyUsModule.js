import React, { useState } from 'react';
import WhyButton from './WhyButton';
import WhyAnswer from './WhyAnswer';
import whyDMC from '../../../assets/icons/Why DMC.png'

export default function WhyUsModule() {

  const [why, setWhy] = useState('Transparency')



  return (
    <section className='why'>
      <img id='whyUsHeader' src={whyDMC} alt='Why DMC?' />
      <div className='scrollContainer'>
        <WhyButton why={why} setWhy={setWhy} reason='Transparency' />
        <WhyButton why={why} setWhy={setWhy} reason='Efficiency' />
        <WhyButton why={why} setWhy={setWhy} reason='Experience' />
        <WhyButton why={why} setWhy={setWhy} reason='Integrity' />
      </div>
      <div className='answerContainer'>
        <WhyAnswer why={why} />
      </div>
    </section>
  )
}