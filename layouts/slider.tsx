import React from 'react'
import Image from 'next/image'

// import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import styles from './slider.module.scss'
import SliderInterface from './slider.interface'

export const typename = 'Set_Replicator_BlockSlider'

const SliderBlock = ({ block }: { block: SliderInterface }) => {
  const slideConstructor = (imgSrc, imgAlt) => (
    <Image
      src={imgSrc}
      alt={imgAlt}
      layout="responsive"
      width={320}
      height={200}
    />
  )
  return (
    <section className={styles.root}>
      <h2>{block.headline}</h2>
      <p>{block.description}</p>
      {/* <Carousel
        plugins={[
          'centered',
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      > */}
        {slideConstructor('/Mask.jpg', 'xd')}
        {slideConstructor('/Mask.jpg', 'xd')}
        {slideConstructor('/Mask.jpg', 'xd')}
      {/* </Carousel> */}
    </section>
  )
}

export default SliderBlock
