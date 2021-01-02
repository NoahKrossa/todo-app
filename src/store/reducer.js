const initialState = {
  todoList: [
    {
      title: "Todo title #1",
      description: "Todo description...",
      isDone: false,
      id: 1,
    },
    {
      title: "Todo title #2",
      description: "Todo description...",
      isDone: false,
      id: 2,
    },
    {
      title: "Todo title #3",
      description: "Todo description...",
      isDone: false,
      id: 3,
    },
    {
      title: "Todo title #4",
      description: "Todo description...",
      isDone: false,
      id: 4,
    },
    {
      title: "Todo title #5",
      description: "Todo description...",
      isDone: true,
      id: 5,
    },
    {
      title: "Todo title #6",
      description: "Todo description...",
      isDone: false,
      id: 6,
    },
    {
      title: "Todo title #7",
      description: "Todo description...",
      isDone: false,
      id: 7,
    },
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/create":
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    case "todo/check":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id == action.payload) todo.isDone = true;
          return todo;
        }),
      };
    case "todo/remove":
      return {
        ...state,
        todoList: state.splice(action.payload, 1),
      };
    default:
      return state;
  }
}
