import React from "react";

import "./NewTodoItemInput.module.css";

const NewTodoItemInput = ({ value, onChange }) => {
    return (
        <>
            <h3>What's on your ToDo List?</h3>
            <input
                type='text'
                name='todoInput'
                placeholder='e.g. Make pizza dough'
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default NewTodoItemInput;
