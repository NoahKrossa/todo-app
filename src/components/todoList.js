import React from "react";
import TodoItem from "./todoItem";
import PropType from "prop-types";

const TodoList = ({ todos, controllers }) => {
  const listItems = todos.map((data, index) => {
    return (
      <TodoItem checkTodo={controllers.checkTodo} data={data} key={index} />
    );
  });
  return <div className="todo_list">{listItems}</div>;
};

TodoList.propTypes = {
  todos: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      title: PropType.string,
      description: PropType.string,
      isDone: PropType.bool,
    })
  ),
  controllers: PropType.shape({
    deleteTodo: PropType.func,
    checkTodo: PropType.func,
  }),
};

export default TodoList;
