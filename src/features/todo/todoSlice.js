import { createSlice , nanoid } from "@reduxjs/toolkit";

// store ke andar initialState sabse pehle hota h starting mei kaise dikhega

const initialState={
      todos : [{ id : 1 , text : "Hello world"}]
}

// slice bnaynge reducer ka bada version

export const todoSlice = createSlice({
    name : 'todo' , 
    initialState,
    reducers : {
        //declaration with definition
        addTodo : (state,action) => {
            const todo = {
                id : nanoid,
                // text : "Aman Mittal"
                text : action.payload
            }
            state.todos.push(todo)
        } ,
        // present change to updated state
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer