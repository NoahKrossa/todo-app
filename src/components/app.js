import React from "react";
import TodoList from "./todoList";
import { addTodo, deleteTodo, checkTodo } from "../store/actions";
import { connect } from "react-redux";
import Form from "./form";

class App extends React.Component {
  render() {
    const { todoList, addTodo, checkTodo, deleteTodo } = this.props;
    const controllers = { deleteTodo, checkTodo };
    return (
      <div className="app_layout">
        <TodoList todos={todoList} controllers={controllers} />
        <Form addTodo={addTodo}></Form>
      </div>
    );
  }
}

const mapStateToDispatch = { addTodo, deleteTodo, checkTodo };
const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(App);
