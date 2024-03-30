import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const slider1 = [
    {
        src: "mercado-livre-87.svg",
        href: "https://www.facebook.com/profile.php?id=61557670686581"
    },
    {
        src: "olx-104.svg"
    }
]

const slider2 = [
    {
        src: "shopee-logo.svg"
    },
    {
        src: "shein-logo.svg"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50])
    const x2 = useTransform(scrollYProgress, [0, 1], [50, -50])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (


        <div ref={container} className={styles.slidingImages}>
            <h1 className={styles.title}>Faça seu pedido</h1>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div className={styles.imageContainer}>
                            <Link href={`${project.href}`}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`} /></Link>
                                    
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
        </div>

    )
}
