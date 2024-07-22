import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid -> generates unique id's

const initialState = {
    todos: [{
        id: 1 ,
        text: "Hello world"
    }]
}

//Slice is a bigger version of Reducer
// Reducer -> is a functionality

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
            id: nanoid() ,
            text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer