import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';

export default function index() {
  return (
    <div className={styles.footer}>
        <Magnetic>
        <a href='https://www.instagram.com/patryck.cardozo/'>Instagram</a>
        </Magnetic>
        <Magnetic>
        <a href='https://www.linkedin.com/in/patryck-cardozo-410363195/?originalSubdomain=br'>LinkedIn</a>
        </Magnetic>
    </div>
  )
}
