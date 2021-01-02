import React, { useRef } from "react";

const Form = ({ addTodo }) => {
  const todoTitle = useRef(null);
  const onClick = () => {
    if (todoTitle.current.value) {
      addTodo({
        title: todoTitle.current.value,
        description: "",
        id: Math.random() * 1000,
        isDone: false,
      });
    }
  };
  return (
    <div className="form">
      <label htmlFor="todo_name">Todo title:</label>
      <input type="text" id="todo_name" ref={todoTitle} />
      <button onClick={onClick}> Add todo</button>
    </div>
  );
};
export default Form;
