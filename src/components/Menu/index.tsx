import { HouseIcon, SettingsIcon, HistoryIcon, SunIcon  } from 'lucide-react';
import styles from './styles.module.css';

export default function Menu(){
    return <div className={styles.menu}>
        <a className={styles.menuLink} href="">
            <HouseIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="">
            <HistoryIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="">
            <SettingsIcon size={24} />
  
        </a>
          <a className={styles.menuLink} href="">
            <SunIcon size={24} />
  
        </a>
    </div>

}  

