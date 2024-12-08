import React, { useState } from 'react';


const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {  // all three are props
  
  const [isEditing, setIsEditing] = useState(false);

  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(false);
    todo.task = newTask; 
  };

  return (
    //if the task is completed ot will strike a line on that task
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>  

      {isEditing ? (  // if isEditing is true then Show an input field to edit the task
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
      )} 
      {/*  delete: removing the to-do item based on its id. */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>   

      {/* If false, switches to "editing mode".
          If true, exits "editing mode".*/}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </li>
  );
};

export default ToDoItem;
