import React, { useContext, useState } from 'react';
import styles from './Add.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Add({ data, handleData }) {
  const { darkMode } = useContext(DarkModeContext);

  const [newItem, setNewItem] = useState('');
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === '') {
      return;
    }
    handleData({ checked: false, title: newItem.trim() });
    setNewItem('');
  };
  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <form action="submit" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${styles.new} ${darkMode ? styles.dark : ''}`}
          placeholder="Add Todo"
          value={newItem}
          onChange={handleChange}
        />
        <button className={`${styles.addBtn} ${darkMode ? styles.dark : ''}`}>
          Add
        </button>
      </form>
    </div>
  );
}
