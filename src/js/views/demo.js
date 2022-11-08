import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue ] = useState('');

  let ar = Object.values(store.demo);

  const addTask =  (e) => {
    e.preventDefault();
    
    actions.pushTask(inputValue);
    setInputValue('')
  }

  return (
    <div className="container">
		  <div className="todoList">
              <h1 className="title">Todo List</h1>
              <form onSubmit={addTask}>
              <label className="theLabel">
                  Tasks:
              </label>
          <input type="text" className="actualInput" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
              </form>
           
            </div>
      <ul className="list-group">
	
		
        {
		store.demo.map((item, index) => {
			console.log(item)
          return (
          <li key={index}>{item.title}
          <button className="delete-button" onClick={() => actions.deleteLi(index)}>X</button>
		  </li>
          );
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
