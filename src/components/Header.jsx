import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header({ category, handleCategory }) {
  return (
    <div className={styles.nav}>
      <BsSunFill className={styles.darkmode} size="25" color="white" />
      <div className={styles.category}>
        <div
          className={category === 'All' ? styles.selected : ''}
          onClick={handleCategory}
        >
          All
        </div>
        <div
          className={category === 'Active' ? styles.selected : ''}
          onClick={handleCategory}
        >
          Active
        </div>
        <div
          className={category === 'Completed' ? styles.selected : ''}
          onClick={handleCategory}
        >
          Completed
        </div>
      </div>
    </div>
  );
}
