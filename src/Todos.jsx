import React from 'react';
import  './App.css';
import { useState } from 'react';



function Todos({addTodo}){

const [inputData, setInputData] = useState('');


const handleTodo= e=>{
  e.preventDefault();
  console.log(inputData);
  addTodo(inputData);
  setInputData('');
}

  return(
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={handleTodo}>
    <input type="text" id='inputData'placeholder='enter a task' value={inputData} onChange={
      (val)=>{setInputData(val.target.value);
      
      }
      
    }/>
    
    <button type='submit'>Add</button>
    </form>
    </>
  )

}


export default Todos;
