import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {

    const title = "O equilíbrio ideal entre a portabilidade e a praticidade para o seu dia a dia."
    const phrase = "Comprimento: 30 Centimetros."
    const description = useRef(null);
    const isInView = useInView(description)
    return (

        <div ref={description} className={styles.description}>
            <div className={styles.imageContainer}>
                <Image
                    alt={"image"}
                    width={180}
                    height={500}
                    src={`/images/umbrella-close.png`} />
            </div>

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
        </div>
    )
}
