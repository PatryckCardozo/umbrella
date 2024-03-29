'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { Roboto } from 'next/font/google'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import { RefreshTitle } from '../../common/Refresh'
import Spline from './SplineLanding'


export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className={styles.landing}>
      <RefreshTitle>
        <div className={styles.descLading}>
          <h1>Proteção instantânea contra os imprevistos do clima</h1>
          <h2>Garanta seu guarda-chuva agora e esteja sempre preparado</h2>
        </div>
      </RefreshTitle>
      <div className={styles.iconLanding}>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.85/build/spline-viewer.js" async></script>
      <spline-viewer url="https://prod.spline.design/WtUD0mMbf2s0KuBd/scene.splinecode"></spline-viewer>
      </div>
    </div>
  )
}
