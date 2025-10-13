import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './style.module.scss'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons'
import { email_id, facebook_link, instagram_link, navLinks, whatsApp_link } from '@/app/utils'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style['footer-container']}`}>

      <div className={style['footer-links']}>
          <span className={style.quickheading}>Quick Links</span>
          <ul>
          {navLinks?.map((e, index) => (
            <li key={index}><Link href={e?.link}>{e?.name}</Link></li>
          ))}
          </ul>
        </div>

      <div className={style['footer-social']}>
          <span className={style.quickheading}>Connect Us</span>
          <div className={style['social-icons']}>
            <a href={facebook_link} aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: 20 }} />
            </a>
            <a href={instagram_link} aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: 20 }} />
            </a>
            <a href={whatsApp_link} aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined style={{ fontSize: 20 }} />
            </a>
            <a href={email_id} aria-label="Email" title="Email us">
              <MailOutlined style={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
        
        <div className={style['footer-logo']}>
          <h2>Plant Gallery</h2>
          <p>Your one-stop destination for indoor and outdoor plants.</p>
        </div>
      </div>
      
      <div className={style['footer-bottom']}>
        <p>&copy; 2025 Plant Gallery. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer