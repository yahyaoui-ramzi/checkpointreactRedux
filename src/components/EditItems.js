import React from "react";

import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";
import {useState} from "react"
import { editTask } from "../Action/action";
import{useDispatch} from 'react-redux'


const EditItems = ({item}) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(item.text)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onSubmit={editTask}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:"center" }}>Edit your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     

<InputGroup className="mb-3">
  <FormControl
    placeholder=""
    aria-label=""
    aria-describedby="basic-addon2"
    value={edit}
    onChange={(e)=>setEdit(e.target.value)}
  />
 
</InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose();setEdit(item.text)}}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>{handleClose();dispatch(editTask({id:item.id,text:edit,isDone:item.isDone}))}}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
 
  
export default EditItems;
