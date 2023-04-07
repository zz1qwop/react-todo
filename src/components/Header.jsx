import React, { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header({ category, handleCategory }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${styles.nav} ${darkMode ? styles.dark : ''}`}>
      {!darkMode && (
        <BsMoonFill
          className={`${styles.darkmode} ${styles.icon}`}
          size="25"
          color="white"
          onClick={() => toggleDarkMode()}
        />
      )}
      {darkMode && (
        <BsSunFill
          className={`${styles.darkmode} ${styles.icon}`}
          size="25"
          color="white"
          onClick={() => toggleDarkMode()}
        />
      )}

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
