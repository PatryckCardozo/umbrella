import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

export default function index({children, backgroundColor="#459ce9", ...attributes}) {

  const circle = UseRef(null);
  let timeline = UseRef(null);
  let timeoutId = null;
  UseEffect( () => {
    timeline.current = gsap.timeline({paUsed: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMoUseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMoUseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div className={styles.roundedButton} style={{overflow: "hidden"}} onMoUseEnter={() => {manageMoUseEnter()}} onMoUseLeave={() => {manageMoUseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}
