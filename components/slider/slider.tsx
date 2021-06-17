import React from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core'

import styles from './slider.module.scss'
import SliderInterface from './slider.interface'

// install Swiper modules
SwiperCore.use([Pagination])

export const typename = 'Set_Replicator_BlockSlider'

const SliderBlock = ({ block }: { block: SliderInterface }) => {
  const slideConstructor = (imgSrc, imgAlt) => (
    <SwiperSlide>
      <Image
        className={styles.img}
        src={imgSrc}
        alt={imgAlt}
        layout="responsive"
        width={1267}
        height={543}
      />
      <p className={styles.imgOverlay}>{block.slider[0].overlay_text}</p>
    </SwiperSlide>
  )
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headline}>{block.headline}</h2>
        <p className={styles.description}>{block.description}</p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides
        className="mySwiper"
      >
        {slideConstructor('/Mask.jpg', 'alt')}
        {slideConstructor('/Mask.jpg', 'alt')}
        {slideConstructor('/Mask.jpg', 'alt')}
      </Swiper>
    </section>
  )
}

export default SliderBlock
