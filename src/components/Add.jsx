import React, { useState } from 'react';
import styles from './Add.module.css';

export default function Add({ data, handleData }) {
  const [newItem, setNewItem] = useState('');
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const handleAdd = () => {
    handleData({ checked: false, title: newItem });
    setNewItem('');
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.new}
        placeholder="Add Todo"
        value={newItem}
        onChange={handleChange}
      />
      <button className={styles.addBtn} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
