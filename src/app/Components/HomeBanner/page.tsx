import React from 'react'
import style from './style.module.scss'
import { mobile_number } from '@/app/utils'

const HomeBanner = () => {
  return (
    <div className={style.banner}>
      <div className={style.center}>
      <span className={style.heading}>Bring nature closer — one leaf at a time.</span>
      <a href={`tel:${mobile_number}`} className={style.button} aria-label="Call us now">
        Enquire Now
      </a>
      </div>
      </div>
  )
}

export default HomeBanner