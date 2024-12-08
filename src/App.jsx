import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]); // todos  holds all tasks in the to-do list.

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false, isEditing: false, originalTask: task };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask, isEditing) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: newTask !== null ? newTask : todo.task,
              isEditing: isEditing,
            }
          : todo
      )
    );
  };

  return (
    <ToDoList
      todos={todos}
      addTodo={addTodo}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  );
};

export default App;
