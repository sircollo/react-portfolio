import React from 'react'
import '../styles/Contact.css'
import ContactImage from '../assets/contact1.png'
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
      style={{backgroundImage:`url(${ContactImage})`}}></div>
      <div className='rightSide'>
        <h1 className='pt-3'>Contact Me</h1> 
        <form id="contact-form">
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='' type="text"/>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='' type="email"/>
          <label htmlFor='message'>Message</label>
          <textarea
          rows="6"
          placeholder=""
          name="message"
          required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact