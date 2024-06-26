import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  numOfTodos: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      state.numOfTodos = state.todos.length;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.numOfTodos = state.todos.length;
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index].text = action.payload.text;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
