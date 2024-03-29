import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {

  const title = "A medida perfeita para atender às suas necessidades e as da sua família também."
  const phrase = "Tamanho redondo: 1,30m de diâmetro."
  const description = useRef(null);
  const isInView = useInView(description)
  return (

    <div ref={description} className={styles.description}>
      <div className={styles.title}>
        <h2>
          {
            title.split(" ").map((word, index) => {
              return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
            })
          }
        </h2>

        <p>
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
            })
          }
        </p>
      </div>
      <div className={styles.imageContainer}>
                <Image
                    alt={"image"}
                    width={400}
                    height={400}
                    src={`/images/umbrella_open.jpeg`} />
            </div>
    </div>
  )
}
