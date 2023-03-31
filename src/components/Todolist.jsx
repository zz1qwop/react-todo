import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todolist.module.css';

export default function Todolist() {
  return (
    <ul className={styles.container}>
      <div className={styles.list_item}>
        <div className={styles.list_title}>
          <input type="checkbox" className={styles.checkbox}></input>
          <li className={styles.title}>first list</li>
        </div>
        <BsFillTrashFill className={styles.delete} size="20" color="white" />
      </div>
      <div className={styles.list_item}>
        <div className={styles.list_title}>
          <input type="checkbox" className={styles.checkbox}></input>
          <li className={styles.title}>first list</li>
        </div>
        <BsFillTrashFill className={styles.delete} size="20" color="white" />
      </div>
    </ul>
  );
}
