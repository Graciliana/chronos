

import { HomeIcon, Settings, SunIcon, TimerReset } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <HomeIcon/>
      </a>
       <a className={styles.menuLink} href='#'>
        <TimerReset/>
      </a>
       <a className={styles.menuLink} href='#'>
        <Settings/>
      </a>
       <a className={styles.menuLink} href='#'>
        <SunIcon/>
      </a>
    </nav>
  );
}