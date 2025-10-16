'use client'
import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CustomerReviewCarousal = () => {
    const carouselData = [
        {
            imgUrl: '',
            name: 'Priyansh Sharma',
            review: 'Healthy plants and fast delivery.'
        },
        {
            imgUrl: '',
            name: 'Arjun Gupta',
            review: 'Loved the quality of my Monstera.'
        },
        {
            imgUrl: '',
            name: 'Rohit Sahu',
            review: 'Beautiful succulents, well packed.'
        },
        {
            imgUrl: '',
            name: 'Rohan Pandey',
            review: 'product bought are good.'
        }
    ]

  return (
    <Carousel
      responsive={{
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      arrows
      ssr
    >
    {carouselData?.map((e,index)=>
    <div className={style.carousal} key={index}>
        <Image src={'/user.jpg'} width={150} height={150} alt={`Profile photo of ${e?.name}`}/>
        <span className={style.review}>{e?.review}</span>
        <span className={style.name}>- {e?.name}</span>
    </div>)}
    </Carousel>
  )
}

export default CustomerReviewCarousal