import { useState, useEffect } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, onSave, onDelete }) => {
    const [newTitle, setnewTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const onBlurHandler = (event) => {
        setnewTitle(event.target.value);
        setIsEditing(false);
    };

    useEffect(() => {
        onSave({ idItem: id, newTitle: newTitle });
    }, [id, newTitle, onSave]);

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
                    defaultValue={newTitle}
                    onBlur={onBlurHandler}
                    readOnly={!isEditing}
                />
            </div>
            <div className={classes.actions}>
                <button
                    className={classes.edit}
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
                <button className={classes.delete} onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
