import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import {deleteTask,checkTask,editTask}from "../Action/action"
import EditItems from "./EditItems"

const ListItems = () => {
  const Items = useSelector((state) => state.listItems);
  const dispatch = useDispatch()
  console.log(Items);
  return (
    <div>
      <ListGroup>
        {Items.map((item, key) => (
          <ListGroup.Item
            key={key}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <div>
              <Button variant="secondary" onClick={()=>dispatch(checkTask(item.id))}>{item.isDone?"unDone":"isDone"}</Button>
              {/* <Button variant="primary">Edit</Button> */}
              <EditItems item={item} />
              <Button variant="danger" onClick={()=>dispatch(deleteTask(item.id))}>Delete</Button>
            </div>
            <p style={{ margin: "0px" }} className={item.isDone?"checkTask":""}>{item.text}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListItems;
