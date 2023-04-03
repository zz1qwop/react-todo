import React, { useContext, useState } from 'react';
import styles from './Add.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Add({ data, handleData }) {
  const { darkMode } = useContext(DarkModeContext);

  const [newItem, setNewItem] = useState('');
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const handleAdd = () => {
    handleData({ checked: false, title: newItem });
    setNewItem('');
  };
  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <input
        type="text"
        className={`${styles.new} ${darkMode ? styles.dark : ''}`}
        placeholder="Add Todo"
        value={newItem}
        onChange={handleChange}
      />
      <button
        className={`${styles.addBtn} ${darkMode ? styles.dark : ''}`}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
