import React from 'react'
import style from './style.module.scss'
import SnakePlant from '../../../public/featuredplants/snakeplant.png'
import Monstera from '../../../public/featuredplants/monsterra.png'
import Fiddle from '../../../public/featuredplants/fiddle.png'
import Alovera from '../../../public/featuredplants/aloevera.png'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

const FeaturedPlants = () => {
    const featuredPlants = [
        {
            img: SnakePlant,
            name: 'Snake Plant',
            info:'A hardy, low-maintenance plant with tall, upright leaves that purify indoor air. Perfect for adding style and greenery to any space.'
        },
        {
            img: Monstera,
            name: 'Monstera',
            info:'A trendy tropical plant known for its large, split leaves and easy care. Adds a lush, exotic vibe to any room.'
        },
        {
            img: Fiddle,
            name: 'Fiddle Leaf Fig',
            info:'A popular indoor tree with large, violin-shaped leaves that make a bold statement. Perfect for bright spaces and modern interiors.'
        },
        {
            img: Alovera,
            name: 'Aloe Vera',
            info:'A succulent plant known for its healing gel and easy care. Ideal for sunny spots and natural home remedies.'
        },
    ]
  return (
    <div className={`${style.featuredPlants} container`}>
        <span className={style.title}>Featured Plants</span>
        <div className={style.plantsList}>
        {featuredPlants?.map((plants,index) =>
        <FeaturedCard key={index} data={plants} />
        )}
        </div>
    </div>
  )
}

export default FeaturedPlants