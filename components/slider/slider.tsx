import React from 'react'
import styles from './slider.module.scss'
import SliderInterface from './slider.interface'

export const typename = 'Set_Replicator_BlockSlider'

const SliderBlock = ({ block }: { block: SliderInterface }) => (
  <div
    className={styles.root}
  >
    Slider Block:
    {block.headline}
  </div>
)

export default SliderBlock
