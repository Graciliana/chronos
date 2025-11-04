

import { Hourglass } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <Hourglass />
        <span>Chronos</span>
      </a>
    </div>
  );
}