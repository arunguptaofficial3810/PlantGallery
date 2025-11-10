'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

const AboutRecognition = () => {
    const [ value, setValue ] = useState({
        customer: 0,
        review: 0,
        delievered: 0 
    })
    const matrix = [
        {
            counts: 100,
            quality: 'Happy Customers'
        },
        {
            counts: 95,
            quality: 'Reviews'
        },
        {
            counts: 700,
            quality: 'Plants Delievered'
        },
    ] 

    // Animate customer count
    useEffect(() => {
        const target = matrix[0].counts
        if (value.customer >= target) return
        const step = Math.max(1, Math.ceil(target / 200))
        const intervalId = setInterval(() => {
            setValue(prev => {
                if (prev.customer >= target) {
                    clearInterval(intervalId)
                    return prev
                }
                const next = Math.min(prev.customer + step, target)
                return { ...prev, customer: next }
            })
        }, 16)
        return () => clearInterval(intervalId)
    }, [value.customer])

    // Animate review count
    useEffect(() => {
        const target = matrix[1].counts
        if (value.review >= target) return
        const step = Math.max(1, Math.ceil(target / 200))
        const intervalId = setInterval(() => {
            setValue(prev => {
                if (prev.review >= target) {
                    clearInterval(intervalId)
                    return prev
                }
                const next = Math.min(prev.review + step, target)
                return { ...prev, review: next }
            })
        }, 16)
        return () => clearInterval(intervalId)
    }, [value.review])

    // Animate delivered count
    useEffect(() => {
        const target = matrix[2].counts
        if (value.delievered >= target) return
        const step = Math.max(1, Math.ceil(target / 200))
        const intervalId = setInterval(() => {
            setValue(prev => {
                if (prev.delievered >= target) {
                    clearInterval(intervalId)
                    return prev
                }
                const next = Math.min(prev.delievered + step, target)
                return { ...prev, delievered: next }
            })
        }, 16)
        return () => clearInterval(intervalId)
    }, [value.delievered])

  return (
    <div className={style.recognition}>
        <div className={style.wrapper}>
            {matrix?.map((e, index)=>
            <div className="matixContainer" key={index}>
                <p>{index === 0 ? value.customer : index === 1 ? value.review : value.delievered}</p>
                <span>{e?.quality}</span>
            </div>)}
        </div>
    </div>
  )
}

export default AboutRecognition