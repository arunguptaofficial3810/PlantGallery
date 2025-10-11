import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.webp'
import style from './style.module.scss'
import { MenuOutlined } from '@ant-design/icons'

const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Gallery',
      link: '/gallery'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
  ]
  return (
    <nav className={style.navbar}>
      <Link href={'/'}>
      <div className={style.logoSection}>
      <Image src={logo} alt='logo' width={25} height={25} />
      <span className={style.logoName}>Plant Gallery</span>
      </div>
      </Link>
      <ul className={style.links}>
        {navLinks?.map((e,index)=>
        <li key={index}>
          <Link href={e.link}>{e?.name}</Link>
        </li>
        )}
      </ul>
      <MenuOutlined className={style.menu} />
    </nav>
  )
}

export default Header