import React from 'react';
import styles from './Add.module.css';

export default function Add() {
  return (
    <div className={styles.container}>
      <input className={styles.new} />
      <button className={styles.addBtn}>Add</button>
    </div>
  );
}
