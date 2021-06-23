import React from 'react'

import styles from './news_teaser.module.scss'
import NewsTeaserInterface, { blockInterface } from './news_teaser.interface'
import BlockConstructor from './blockContructor'

export const typename = 'Set_Replicator_BlockNewsTeaser'

const NewsTeaserBlock = ({ block }: { block: NewsTeaserInterface }) => {
  const blocks = block.news_src.structure.tree

  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Other premium large format experiences
          </h2>
          <p className={styles.description}>{block.description}</p>
        </div>
        <main className={styles.main}>
          {blocks.map((blockElement: blockInterface) => {
            const { page } = blockElement
            return (
              <BlockConstructor
                key={page.id}
                imgSrc={`/${page.id}.jpg`}
                cardBlock={page}
              />
            )
          })}
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
