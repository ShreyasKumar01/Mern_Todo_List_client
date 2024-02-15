import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './type';

const api_url= 'https://mern-todo-list-52a2.onrender.com';

export const addNewTodo = (data) => async(dispatch) =>{
    try{
        const res = await axios.post(`${api_url}/todos`,  {data} );
        
        dispatch({type: ADDNEW_TODO, payload: res.data });
    }catch(error){
        console.log("Error while calling API addNewTodo");
    }
}


export const getAllTodos = (data) => async(dispatch) =>{
    try{
        const res = await axios.get(`${api_url}/todos` );
        
        dispatch({type:GETALL_TODO, payload: res.data });
    }catch(error){
        console.log("Error while calling API getAllTodos");
    }
}



export const toggleTodo = (id) => async(dispatch) =>{
    try{
        const res = await axios.get(`${api_url}/todos/${id}` );
        
        dispatch({type:TOGGLE_TODO, payload: res.data });
    }catch(error){
        console.log("Error while calling API toggleTodo");
    }
}



export const updateTodo = (id, data) => async(dispatch) =>{
    try{
        const res = await axios.put(`${api_url}/todos/${id}`, {data} );
        
        dispatch({type:UPDATE_TODO, payload: res.data });
    }catch(error){
        console.log("Error while calling API updateTodo");
    }
}


export const deleteTodo = (id) => async(dispatch) =>{
    try{
        const res = await axios.delete(`${api_url}/todos/${id}`);
        
        dispatch({type:DELETE_TODO, payload: res.data });
    }catch(error){
        console.log("Error while calling API deleteTodo");
    }
}