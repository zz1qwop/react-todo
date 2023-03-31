import React, { useState } from 'react';
import Add from './Add';
import Header from './Header';
import Todolist from './Todolist';
import styles from './Container.module.css';

export default function Container() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('all');
  function addData({ checked, title }) {
    setData((data) => [...data, { checked, title }]);
  }
  function deleteData() {}
  function handleCategory(newCategory) {
    setCategory(newCategory);
  }

  return (
    <div className={styles.container}>
      <Header category={category} handleCategory={handleCategory}></Header>
      <Todolist data={data} handleData={deleteData}></Todolist>
      <Add data={data} handleData={addData}></Add>
    </div>
  );
}
