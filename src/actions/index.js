export const GET_TODOS = "GET_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const MARK_AS_DONE = "MARK_AS_DONE";

const TODOS = [
  { id: 1, task: "code", status: "OPEN" },
  { id: 2, task: "eat", status: "OPEN" },
  { id: 3, task: "sleep", status: "OPEN" }
];

export const getTodos = () => {
  return {
    type: GET_TODOS,
    payload: TODOS
  };
};

export const addTodo = (payload, newTodo) => {
  return {
    type: ADD_TODO,
    payload: [...payload, newTodo]
  };
};

export const markAsDone = (payload, id) => {
  let todoObj = payload.filter(i => {
    if (i.id === id) return i;
  })[0];
  todoObj.status = "DONE";
  let arr = payload.filter(i => {
    return i.id !== id;
  });

  return {
    type: MARK_AS_DONE,
    payload: [...arr, todoObj]
  };
};

export const deleteTodo = (payload, id) => {
  return {
    type: DELETE_TODO,
    payload: payload.filter(i => {
      return i.id !== id;
    })
  };
};
