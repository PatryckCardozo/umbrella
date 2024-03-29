import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const slider1 = [
    {
        src: "whatsapp-symbol-logo-svgrepo-com.svg",
        href: "https://api.whatsapp.com/send?phone=5521986164548&text=Ol%C3%A1,%20visualizei%20o%20an%C3%BAncio%20do%20guarda-chuva%20e%20me%20interessei!"
    },
    {
        src: "facebook-3-logo-svgrepo-com.svg",
        href: "https://www.facebook.com/profile.php?id=61557670686581"
    },
    {
        src: "twitter-3-logo-svgrepo-com.svg"
    },
    {
        src: "instagram-1-svgrepo-com.svg"
    }
]

const slider2 = [
    {
        src: "mercado-livre-87.svg"
    },
    {
        src: "olx-104.svg"
    },
    {
        src: "shopee-logo.svg"
    },
    {
        src: "shein-logo.svg"
    },

]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
    const x2 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (


        <div ref={container} className={styles.slidingImages}>
            <h1 className={styles.title}>Entre em contato</h1>
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
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>

    )
}
