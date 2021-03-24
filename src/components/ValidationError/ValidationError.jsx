import React from "react";

function ValidationError(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <div>{props.children}</div>
    </div>
  );
}

export default ValidationError;
