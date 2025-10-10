import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './style.module.scss'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style['footer-container']}`}>

      <div className={style['footer-links']}>
          <span className={style.quickheading}>Quick Links</span>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

      <div className={style['footer-social']}>
          <span className={style.quickheading}>Follow Us</span>
          <div className={style['social-icons']}>
            <a href="https://facebook.com" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined width={20} height={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined width={20} height={20} />
            </a>
            <a href="https://wa.me/1234567890" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsAppOutlined width={20} height={20} />
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