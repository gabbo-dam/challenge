import React from 'react'
import Image from 'next/image'
import TextImageInterface from './text_image.interface'
import styles from './text_image.module.scss'

export const typename = 'Set_Replicator_BlockTextImage'

const TextImageBlock = ({ block }: { block: TextImageInterface }) => {
  const { headline, subline, description, image, buttons } = block
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div>
          <Image
            className={styles.img}
            src="/text-img.jpg"
            alt={image.id}
            layout="responsive"
            width={520}
            height={520}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{headline}</h1>
          <p className={styles.subline}>{subline}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.primary}>
              {buttons[0].label}
            </button>
            <button type="button" className={styles.secondary}>
              {buttons[1].label}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImageBlock
