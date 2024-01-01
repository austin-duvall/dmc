import React from 'react';
import Location from './Location';
import ContactHeadPhoto from './ContactHeadPhoto';

export default function Contact() {
  return (
    <section className='contactContainer'>
      <ContactHeadPhoto />
      <article className='locations'>
        <Location location='Spokane' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Moses Lake' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Kennewick' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Wenatchee' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Yakima' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Tukwila' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Olympia' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Tacoma' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Kelso' street='123 W Main St' town='Example, WA' phone='555-555-5555' fax='555-555-5555' />
        <Location location='Kalispell' street='123 W Main St' town='Example, MT' phone='555-555-5555' fax='555-555-5555' />
      </article>
    </section>
  )
}