import {useState} from 'react';

import { useDispatch } from 'react-redux';

import { addNewTodo } from '../redux/actions';

const Todoform = ()=> {

  const [text, setText]=useState("");
  const dispatch= useDispatch();

    const onFormSubmit=(e)=>{

      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');

    }
    const onInputChange = (e) =>{
        setText(e.target.value);    //to fetch current value of e..changes as the value in the input changes
    }
  return (
    <div><form onSubmit={onFormSubmit} >
        <input type="text" placeholder='Enter your new ToDo here...' className='inpform' onChange={onInputChange} value={text}/>
        </form></div>
  )
}

export default Todoform;