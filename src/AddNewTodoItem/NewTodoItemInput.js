import React from "react";

import "./NewTodoItemInput.module.css";

const NewTodoItemInput = (props) => {
    return (
        <>
            <h3>What's on your ToDo List?</h3>
            <input
                type='text'
                name='todoInput'
                placeholder='e.g. Make pizza dough'
                value={props.value}
                onChange={props.onChange}
            />
        </>
    );
};

export default NewTodoItemInput;
