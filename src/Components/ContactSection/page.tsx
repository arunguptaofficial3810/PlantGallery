import React from 'react'
import style from './style.module.scss'
import ContactForm from '../ContactForm/page'

const ContactSection = () => {
  return (
    <div className={`${style.contactSection} container`}>
        <h1>Get In Touch</h1>
        <p>Have any questions? We'd love to hear from you</p>
        <ContactForm />
    </div>
  )
}

export default ContactSection