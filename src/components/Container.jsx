import React, { useContext, useState } from 'react';
import Add from './Add';
import Header from './Header';
import Todolist from './Todolist';
import styles from './Container.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Container() {
  const { darkMode } = useContext(DarkModeContext);

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('All');
  function addData({ checked, title }) {
    setData((data) => [...data, { checked, title }]);
  }
  function deleteData(e) {
    if (e.target.nodeName === 'path') {
      setData((data) =>
        data.filter((todo) => todo.title !== e.target.parentNode.dataset.title)
      );
    } else {
      setData((data) =>
        data.filter((todo) => todo.title !== e.target.dataset.title)
      );
    }
  }
  function checkData(e) {
    setData((data) =>
      data.map((todo) => {
        if (todo.title === e.target.dataset.title) {
          return { checked: !todo.checked, title: todo.title };
        }
        return todo;
      })
    );
  }
  function handleCategory(e) {
    setCategory(e.target.innerHTML);
  }

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <Header category={category} handleCategory={handleCategory}></Header>
      <Todolist
        data={data}
        handleData={deleteData}
        checkData={checkData}
        category={category}
      ></Todolist>
      <Add data={data} handleData={addData}></Add>
    </div>
  );
}
