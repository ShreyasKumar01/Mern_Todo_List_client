import { useState } from "react";

import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

import { useDispatch } from 'react-redux';

const Todo2 = ({todo}) =>
{
    const dispatch = useDispatch();
    const [edit,setEdit] = useState(false);
    const [text,setText] = useState(todo.data);

    const onFormSubmit = (e) =>{
        e.preventDefault();
        setEdit(prevState => !prevState);

        dispatch(updateTodo(todo._id, text));
    }
    return (
        <li className="lists" onClick={() => dispatch(toggleTodo(todo._id))}>
           {todo.done && !edit ? (<span className="checkspan"><i className="fas fa-check check" /></span>) : (null)}
            <span className="item" style={{display: edit?'none':''}}>{todo.data}</span>
            <form style={{display: !edit?'none':'inline'}} className="edit-form" onSubmit={onFormSubmit}> 
                <input type="text" value={text} id="textu" className="edit_todo" onChange={(e)=> setText(e.target.value)} onClick={(e)=>{
                    e.stopPropagation();
                }}/>
            </form>
            <span className="icon" onClick={(e)=> 
                {
                    e.stopPropagation();
                    dispatch(deleteTodo(todo._id));
                }}>
                <i className="fas fa-trash binn"/>
            </span>
            <span className="icon" onClick={(e)=>
                {
                    e.stopPropagation();
                    setEdit(prevState => !prevState)
                }} >
                <i className="fas fa-pen penn"/>
            </span>
        </li>
    )
}

export default Todo2;
