import React from 'react';
import Add from './Add';
import Header from './Header';
import Todolist from './Todolist';
import styles from './Container.module.css';

export default function Container() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Todolist></Todolist>
      <Add></Add>
    </div>
  );
}
