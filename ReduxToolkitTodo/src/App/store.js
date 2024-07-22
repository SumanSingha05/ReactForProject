//First of all To make store we have to configure store
import {configureStore} from '@reduxjs/toolkit' //This is core redux not React Redux
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})