import React from 'react'
import Image from 'next/image'

import styles from './news_teaser.module.scss'
import NewsTeaserInterface from './news_teaser.interface'

export const typename = 'Set_Replicator_BlockNewsTeaser'

const NewsTeaserBlock = ({ block }: { block: NewsTeaserInterface }) => {
  const block1 = block.news_src.structure.tree[0].page
  const block2 = block.news_src.structure.tree[1].page
  const block3 = block.news_src.structure.tree[2].page

  const blockConstructor = (imgSrc, cardBlock) => (
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
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Other premium large format experiences</h2>
          <p className={styles.description}>{block.description}</p>
        </div>
        <main className={styles.main}>
          {blockConstructor('/mask1.jpg', block1)}
          {blockConstructor('/mask2.jpg', block2)}
          {blockConstructor('/mask3.jpg', block3)}
          <div className={styles.center}>
            <button type="button" className={styles.primary}>
              Load More
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default NewsTeaserBlock
