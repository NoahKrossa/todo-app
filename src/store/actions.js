export const addTodo = (todo) => {
  return {
    type: "todo/create",
    payload: todo,
  };
};

export const checkTodo = (id) => {
  return {
    type: "todo/check",
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "todo/remove",
    payload: id,
  };
};
