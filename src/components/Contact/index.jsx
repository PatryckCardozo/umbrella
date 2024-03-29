import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            width={100}
                            height={100}
                            alt={"image"}
                            src={`/images/umbrella-svgrepo-com-white.svg`}
                            />
                        </div>
                        <h2>Faça já o seu</h2>
                    </span>
                    <h2>pedido</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <a href='https://api.whatsapp.com/send?phone=5521986164548&text=Ol%C3%A1,%20visualizei%20o%20an%C3%BAncio%20do%20guarda-chuva%20e%20me%20interessei!'>Entrar em contato</a>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <a href='mailto:umbrellacomerce@hotmail.com'>umbrellacomerce@hotmail.com</a>
                        </Rounded>
                        <Rounded>
                            <a href='https://api.whatsapp.com/send?phone=5521986164548&text=Ol%C3%A1,%20visualizei%20o%20an%C3%BAncio%20do%20guarda-chuva%20e%20me%20interessei!'>+55 21 98616-4548</a>
                        </Rounded>
                </div>
                <div className={styles.info}>

                    <div>
                        <span>
                        </span>
                        <Magnetic>
                            <a href='https://www.instagram.com/patryck.cardozo/'>@Code by Patryck Cardozo</a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
