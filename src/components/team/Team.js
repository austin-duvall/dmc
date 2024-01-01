import React from 'react';
import Partners from './Partners';
import Employees from './Employees';
import placeholder from '../../assets/photos/placeholder.png';
import placeholder2 from '../../assets/photos/placeholder2.png';
import placeholder3 from '../../assets/photos/placeholder3.png';
import placeholder4 from '../../assets/photos/placeholder4.png';
import placeholder5 from '../../assets/photos/placeholder5.png';
import TeamHeadPhoto from './TeamHeadPhoto';

export default function Team() {
  return (
    <section className='teamContainer'>
      <TeamHeadPhoto />
      <h2>Partners</h2>
      <article className='partners'>
        <Partners src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Partners src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
      </article>
      <h2>Vocational Counselors</h2>
      <article className='counselors'>
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
      </article>
      <h2>Interns</h2>
      <article className='interns'>
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder4} name={'Mark Anderson'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder5} name={'John Lewis'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder} name={'Jane Smith'} location={'Example, WA'} alt={'Jane'} />
        <Employees src={placeholder2} name={'Lisa Jones'} location={'Example, WA'} alt={'Jane'} />
      </article>
      <h2>Office Manager</h2>
      <article className='officeStaff'>
        <Employees src={placeholder3} name={'Karen Jeffries'} location={'Example, WA'} alt={'Jane'} />
      </article>
    </section>
  )
}