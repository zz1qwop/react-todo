import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todolist.module.css';

export default function Todolist({ data, handleData }) {
  return (
    <ul className={styles.container}>
      {data.map((todo, index) => (
        <div className={styles.list_item}>
          <div className={styles.list_title}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={todo.checked}
            ></input>
            <li className={styles.title} key={index}>
              {todo.title}
            </li>
          </div>
          <BsFillTrashFill className={styles.delete} size="20" color="white" />
        </div>
      ))}
    </ul>
  );
}
