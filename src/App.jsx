import React from "react";
import Todos from "./Todos.jsx";
import { useState } from "react";
import TodosView from "./TodosViews.jsx";



function App() {

const [todos, setTodos]= useState([{}]);
    

const addTodo= todo=>{
    setTodos([...todos, { task:todo, completed:false, editing:false}])
    console.log(todos);
    }

    return(
        <>
        <Todos addTodo={addTodo}/>
        {todos.map((todo, index)=>(
            <TodosView task={todo} key={index}/>
        ))}
        
        </>
    )
}



export default App;
