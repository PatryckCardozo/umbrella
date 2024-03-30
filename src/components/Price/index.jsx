import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {

  const custo = "Custo"
  const xis = "X"
  const benef = "Benefício"
  const phrase = "O melhor dos dois mundos por apenas"
  const price = "R$ 30"
  const description = useRef(null);
  const isInView = useInView(description)
  return (

    <div ref={description} className={styles.description}>
      <div className={styles.title}>
        <div className={styles.word}>
          <h2>
            {
              custo.split(" ").map((word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }
          </h2>
        </div>
        <div className={styles.word}>
          <h2>
            {
              xis.split(" ").map((word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }
          </h2>
        </div>
        <div className={styles.word}>
          <h2>
            {
              benef.split(" ").map((word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }
          </h2>
        </div>
      </div>
      <div className={styles.title}>
        <p>
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
            })
          }
        </p>
      </div>
      <div className={styles.price}>
      <h2>
            {
              price.split(" ").map((word, index) => {
                return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })
            }
          </h2>
      </div>
    </div>
  )
}
