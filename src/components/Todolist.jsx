import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todolist.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Todolist({ data, handleData, checkData, category }) {
  const { darkMode } = useContext(DarkModeContext);
  let filterdData;
  if (category === 'Active') {
    filterdData = data.filter((todo) => !todo.checked);
  } else if (category === 'Completed') {
    filterdData = data.filter((todo) => todo.checked);
  } else {
    filterdData = data;
  }
  return (
    <ul className={styles.container}>
      {filterdData.map((todo, index) => {
        return (
          <div className={styles.list_item} key={index}>
            <div className={styles.list_title}>
              <input
                type="checkbox"
                className={`${styles.checkbox} ${darkMode ? styles.dark : ''}`}
                checked={todo.checked}
                onChange={checkData}
                data-title={todo.title}
              ></input>
              <li className={`${styles.title} ${darkMode ? styles.dark : ''}`}>
                {todo.title}
              </li>
            </div>
            <span
              className={`${styles.delete_cover} ${
                darkMode ? styles.dark : ''
              }`}
            >
              <BsFillTrashFill
                className={styles.delete}
                data-title={todo.title}
                size="20"
                color="white"
                onClick={handleData}
              />
            </span>
          </div>
        );
      })}
    </ul>
  );
}
