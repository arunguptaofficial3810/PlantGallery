import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const GalleryAlbum = () => {
  const pic = [
    "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg",
    "https://images.pexels.com/photos/2718447/pexels-photo-2718447.jpeg",
    "https://images.pexels.com/photos/64221/flower-sunflower-karnataka-india-64221.jpeg",
    "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg",
    "https://t4.ftcdn.net/jpg/09/01/66/49/360_F_901664916_4aDMt51PpSI1LyvTdd8mAcbr73kWivsm.jpg",
  ];
  
  return (
    <section className={style.gallery}>
      <h1>Gallery</h1>
      <div className={style.wrapper}>
        {!!pic?.length ? (
          pic?.map((e, index) => (
              <img src={e} key={index} alt="picture" />
          ))
        ) : (
          <div className={style.empty}>
            <p>No Image found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryAlbum;
