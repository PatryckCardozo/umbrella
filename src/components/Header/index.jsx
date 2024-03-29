'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';




export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);



    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, [])

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                <Link href={"/"}>
                <Magnetic>
                <div className={styles.imageContainer}>
                <Image
                        fill={true}
                        alt={"image"}
                        src={`/images/umbrella-svgrepo-com.svg`}
                    />
                </div>
                </Magnetic>
                </Link>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='Projects'>UMBRELLA COMERCE</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
        </>
    )
}
