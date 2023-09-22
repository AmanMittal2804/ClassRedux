import {configureStore} from '@reduxjs/toolkit';
//knowlege about our reducers
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer : todoReducer
})