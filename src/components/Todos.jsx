
import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

// import todo from "../../../server/model/Todo";
import Todo2 from "./Todo2";

const Todos = () =>{

    const dispatch = useDispatch();
    const todos= useSelector(state => state.todos);
    useEffect(()=>{
        dispatch(getAllTodos());
    },[])
    return (
        <div className="tododo">
                <ul>
                    {todos.map(todo=> 
                        <Todo2 key={todo._id} todo = {todo} />
                    )}
                </ul>
        </div>
    )
}

export default Todos;


