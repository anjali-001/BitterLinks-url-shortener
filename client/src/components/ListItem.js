import React from "react";
import { backendBaseUrl } from "../utils/common";

function ListItem(props) {
  return (
    <li className="list-group-item">
      <div className="row p-2">
        
      <p className="text-light pl-2">Link : {props.url}</p>
      <button className="ml-auto btn btn-outline-light  trash" onClick={()=>props.onDelete(props._id)}><i className="can text-light fa fa-trash-o" style={{fontSize:"18px"}} aria-hidden="true"></i></button>
      </div>
      
      <a href={`${backendBaseUrl}/${props.hash}`} target="_blank">
        <p className="text-light">Shortened Link : {`${backendBaseUrl}/${props.hash}`}</p>
      </a>
    </li>
  );
}

export default ListItem;
