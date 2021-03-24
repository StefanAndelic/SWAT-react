import React from "react";

function ResourcesTextItem(props) {
  return (
    <div className="row">
      <div className="col text-center">
        <div className="mt-5">
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default ResourcesTextItem;
