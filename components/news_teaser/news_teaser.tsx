import React from 'react'

import styles from './news_teaser.module.scss'
import NewsTeaserInterface from './news_teaser.interface'
import BlockConstructor from './blockContructor'

export const typename = 'Set_Replicator_BlockNewsTeaser'

const NewsTeaserBlock = ({ block }: { block: NewsTeaserInterface }) => (
  <section className={styles.background}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Other premium large format experiences</h2>
        <p className={styles.description}>{block.description}</p>
      </div>
      <main className={styles.main}>
        {[1, 2, 3].map((i) => (
          <BlockConstructor
            imgSrc={`/mask${i}.jpg`}
            cardBlock={block.news_src.structure.tree[i].page}
          />
        ))}
        {/* {[1, 2, 3].map((i) => blockConstructor(`/${mask.name}`, mask.block))} */}
        <div className={styles.center}>
          <button type="button" className={styles.primary}>
            Load More
          </button>
        </div>
      </main>
    </div>
  </section>
)

export default NewsTeaserBlock
