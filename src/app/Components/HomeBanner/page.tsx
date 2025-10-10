import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

const HomeBanner = () => {
  return (
    <div className={style.banner}>
      <div className={style.center}>
      <span className={style.heading}>Discover and Celebrate Nature</span>
      <Link href={'/gallery'}>
      <button className={style.button}>Explore Gallery</button>
      </Link>
      </div>
      </div>
  )
}

export default HomeBanner