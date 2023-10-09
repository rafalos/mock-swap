import React from 'react'
import styles from './Gallery.module.scss'
import Events from './Events'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <section className={styles.gallery}>
      <h2>Event Gallery</h2>
      <Events/>
    </section>
  )
}

export default Gallery
