import { GET_TODOS, DELETE_TODO, ADD_TODO, MARK_AS_DONE } from "../actions";

const INITIAL_STATE = { todos: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case MARK_AS_DONE:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}
