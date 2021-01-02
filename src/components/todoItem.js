import React from "react";
import TodoList from "./todoList";
import PropTypes from "prop-types";

function TodoItem({ data, checkTodo }) {
  return (
    <div
      className="todo_item noselect"
      onClick={() => {
        checkTodo(data.id);
      }}
    >
      <input
        type="checkbox"
        onClick={() => {
          checkTodo(data.id);
        }}
        checked={data.isDone}
        onChange={() => {}}
      ></input>
      <div className={data.isDone ? "check" : ""}>
        <h2>{data.title}</h2>
      </div>
    </div>
  );
}

export default TodoItem;
