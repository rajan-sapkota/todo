import React from "react";
import './App.css';


function TodosView({task}){
    return (
        <>
        {task!==""?<p className="lists">{task.task}</p>:null}
        
        </>
    )

}

export default TodosView;