import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const title = "O equilíbrio ideal entre a portabilidade e a praticidade para o seu dia a dia."
    const phrase = "Comprimento: 30 Centimetros."
    const description = UseRef(null);
    const isInView = UseInView(description)
    return (

        <div className={styles.sectionContainer}>
            <div className={styles.title}>
                <h1>Faça seu pedido e retire presencialmente</h1>
            </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545.2259039604596!2d-43.56286216228144!3d-22.906462218811583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3fe517116e3%3A0xd91d4200251e94c0!2sR.%20Augusto%20de%20Vasconcelos%2C%20540%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023050-340!5e0!3m2!1spt-BR!2sbr!4v1711571550709!5m2!1spt-BR!2sbr"
                    width="90%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          
            <div className={styles.legendMap}>
                <p>Av. Augustos Vasconcelos, 540</p>
                <p>Tel.: +55 21 99834 6990</p>
                <p>E-mail: umbrella@hotmail.com</p>
            </div>
        </div>

    )

}
