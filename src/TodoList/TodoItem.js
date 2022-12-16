import { useState } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
    const [name, setName] = useState(props.title);
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = () => {
        props.onSave(props.id, props.title);
        setIsEditing(true);
    };

    const onBlurHandler = (event) => {
        setName(event.target.value);
        setIsEditing(false);
    };

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <li className={classes.todoItem}>
            <label>
                <input type='checkbox' />
                <span
                    className={`${classes.bubble} ${classes.business}`}
                ></span>
            </label>
            <div className={classes.todoContent}>
                <input
                    type='text'
                    defaultValue={name}
                    onBlur={onBlurHandler}
                    readOnly={!isEditing}
                />
            </div>
            <div className={classes.actions}>
                <button className={classes.edit} onClick={editHandler}>
                    Edit
                </button>
                <button className={classes.delete} onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
