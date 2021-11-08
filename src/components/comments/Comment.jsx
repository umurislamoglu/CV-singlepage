import React from "react";

const Comment = (props) => {
  


  return (
    <div className=" container d-flex flex-column card" >
      <div className=" col-12 mb-3 d-flex flex-row justify-content-between p-3 ">
        <span className="fw-normal ">{props.title}</span>
        <span className="deleteButton" onClick={()=>props.handleDelete(props.commentText)}><i className="bi bi-trash text-danger"></i></span>
      </div>

      <div className="fw-light p-3">
       {props.commentText}
      </div>
    </div>
  );
  
};

export default Comment;
