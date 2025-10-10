import React from 'react'
import style from './style.module.scss'
import Image, { type StaticImageData } from 'next/image'

type FeaturedCardProps = {
  data: {
    img: StaticImageData | string
    name: string
    info: string
  }
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ data: { img, name, info } }) => {
  return (
    <div className={style.card}>
      <div className={style.imgwrapper}>
        <Image src={img} alt={name} width={200} height={250} />
        </div>
      <p className={style.name}>{name}</p>
      <p className={style.info}>{info}</p>
    </div>
  )
}

export default FeaturedCard