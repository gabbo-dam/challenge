import React from 'react'

import styles from './news_teaser.module.scss'
import NewsTeaserInterface, { blockInterface } from './news_teaser.interface'
import BlockConstructor from './blockContructor'

export const typename = 'Set_Replicator_BlockNewsTeaser'

const NewsTeaserBlock = ({ block }: { block: NewsTeaserInterface }) => {
  const blocks = block.news_src.structure.tree
  const bloquesitos = () => {
    let blockWithFor = []

    for (let i = 0; i < blocks.length; i++) {
      const bloquesito = [
        <BlockConstructor
          key={blocks[i].page.id}
          imgSrc={`/${blocks[i].page.id}.jpg`}
          cardBlock={blocks[i].page}
        />,
      ]
      blockWithFor = [...blockWithFor, bloquesito]
    }
    console.log(blockWithFor, 'blockWithFor')
    return blockWithFor
  }

  // Probando teclado, el codigo no corre, i need a herooooooooooooooooooooooooooooooooooooooooooooo
  // Al parecer, el metodo .map es el metodo mas eficiente y sencillo para recorrer un arreglo de objetos, si no deseas
  // usarlo podes usar un for, pero es casi imposible que funcione
  // que va a tener adentro? el bloquesito? cuidado brother, necetamos un heroe no vainas raras

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
          {/* {blocks.map((blockElement: blockInterface) => {
            const { page } = blockElement
            return (
              <BlockConstructor
                key={page.id}
                imgSrc={`/${page.id}.jpg`}
                cardBlock={page}
              />
            )
          })} */}
          {bloquesitos()}
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
