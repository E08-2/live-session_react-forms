import React from "react";

const ToDo = props => {
    return (
        // Display one of the user's to-do strings as the content of the div
        <div className="todo">{props.content}</div>
    );
}

export default ToDo;