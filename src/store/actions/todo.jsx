export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function toggleTodo(id) {
  console.log(id);
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function deleteTodo(id) {
  console.log(id);
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
