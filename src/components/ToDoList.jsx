import React, { useState } from 'react';

const ToDoList = ({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) => {
  
  const [task, setTask] = useState('');  //task: Stores the text of the new task being entered.

  const handleAdd = () => {
    if (task.trim()) {                   // Ensures the task isn't empty or just whitespace.
      addTodo(task);
      setTask('');                       // '' Clears the input field after adding.
    } 
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}      //Updates `task` with input value.
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={todo.task}
                  onChange={(e) => editTodo(todo.id, e.target.value)}
                />
                <button
                  className="save-btn"
                  onClick={() => editTodo(todo.id, null, false)}
                >
                  Save
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => editTodo(todo.id, todo.originalTask, false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}       // Toggles completed status.
                />
                <span className={todo.completed ? 'completed' : ''}>
                  {todo.task}
                </span>
                <button
                  className="edit-btn"
                  onClick={() => editTodo(todo.id, null, true)}    // Enables edit mode.
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}        // Deletes the task.
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
