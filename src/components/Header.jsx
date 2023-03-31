import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.nav}>
      <BsSunFill className={styles.darkmode} size="25" color="white" />
      <div className={styles.category}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
