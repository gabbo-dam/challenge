import React from 'react'
import Image from 'next/image'
import styles from './news_teaser.module.scss'

interface Props {
  imgSrc: string
  cardBlock: any
}

const BlockConstructor = ({ imgSrc, cardBlock } : Props) => (
  <div className={styles.card}>
    <Image
      className={styles.img}
      src={imgSrc}
      alt={cardBlock.title}
      layout="responsive"
      width={320}
      height={200}
    />
    <h3 className={styles.cardTitle}>{cardBlock.title}</h3>
    <p className={styles.cardText}>{cardBlock.teaser}</p>
  </div>
)

export default BlockConstructor
