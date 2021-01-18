import React, {useState} from "react";
import { Button,InputGroup,FormControl } from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {addTask} from "../Action/action"
 const AddItems = () => {
   const [myinput, setMyinput] = useState("")
   const dispatch = useDispatch()

   const add=(e)=>{
     if(myinput){
       e.preventDefault()

       dispatch(addTask({text:myinput, id:Math.random(),isDone:false}))
       setMyinput("")
     }else{
       alert("Add task")
     }
   }
  return (
    <div>
        <h1>To Do List</h1>
      
        <form onSubmit={add} ><InputGroup  className="mb-3">
        <FormControl 
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={(e)=>setMyinput(e.target.value)}
          value={myinput}
        />
        <InputGroup.Append onSubmit={add}>
          <Button variant="outline-secondary"onClick={add}>ADD</Button>
        </InputGroup.Append>
      </InputGroup>
      </form>
    </div>
  );
};

export default AddItems;
