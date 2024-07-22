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
        addTodo: (state, action) => {},
        removeTodo: () => {},
    }
})