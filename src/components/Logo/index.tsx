import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export default function Logo(){
    return <div className={styles.logo}>
        <a className={styles.logoLink} href="">
            <TimerIcon size={64} />
        <span>Chronos</span>
        </a>
    </div>

}  

