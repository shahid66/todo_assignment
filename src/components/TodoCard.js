import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDTODO } from "../redux/state-slice/todoSlice";
import { EditToDo } from "./Edit";
import { TodoDelete } from "./TodoDelete";
import "./style.css";

const TodoCard = () => {
    const data=useSelector((state)=>state.todo.value)
    console.log(data)

    const todoInput=useRef()
    const dispatch=useDispatch()
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log("H")
            dispatch(ADDTODO(todoInput.current.value))
        }
      };
  return (
    <div className="d-flex justify-content-center align-items-center customHe">
      <div className="card customCard">
        <div className="card-body">
          <h5 className="card-title">ToDo Add & Lists</h5>
          <br />
          <div class="input-group mb-3">
            <input ref={todoInput}
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onKeyDown={handleKeyDown}
            />
            <span onClick={()=>dispatch(ADDTODO(todoInput.current.value))}  class="btn btn-danger" id="basic-addon1 ">
              ADD
            </span>
          </div>

          <table class="table table-dark">
          <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">To DO</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((item,i)=>(
       <tr key={i.toString()}>
       <th scope="row">{i+1}</th>
       <td  class="table-active">{item}</td>
       <td><button onClick={()=>EditToDo(i,item)}  className="btn btn-warning">Edit</button></td>
       <td><button onClick={()=>TodoDelete(i)} className="btn btn-danger">Delete</button></td>
     </tr> 
    ))}
  </tbody>
</table>



        </div>
      </div>
    </div>
  );
};

export default TodoCard;
