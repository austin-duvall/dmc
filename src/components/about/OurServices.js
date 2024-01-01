import React from 'react';
import mod from '../../assets/icons/workMod.png'
import analysis from '../../assets/icons/jobAnaly.png'
import evaluations from '../../assets/icons/vocEval.png'
import seeking from '../../assets/icons/jobAssist.png'
import ourServices from '../../assets/icons/ourServices.png'

export default function OurServices() {
  return (
    <article className='ourServicesArticle'>
      <img src={ourServices} id='ourServicesHeader' alt='Our Services' />
      <ul className='ourServicesContainer'>
        <li>
          <img src={mod} alt='gear and hard hat' />
          <h3>Workplace modifications</h3>
        </li>
        <li>
          <img src={analysis} alt='clipboard which checkmarks' />
          <h3>Job analysis</h3>
        </li>
        <li>
          <img src={evaluations} alt='stack of papers with magnifying glass' />
          <h3>Vocational evaluations for alternative work options</h3>
        </li>
        <li>
          <img src={seeking} alt='briefcase with checkmark' />
          <h3>Job seeking assistance</h3>
        </li>
      </ul>
    </article>
  )
}