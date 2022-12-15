import { useState } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
    //use redux for delete/edit btns, change later, one day

    const [canNotChangeText, setCanNotChangeText] = useState(true);

    const editHandler = () => {
        props.onEdit(props.id);
        setCanNotChangeText(false);
    };

    const onBlurHandler = () => {
        setCanNotChangeText(true);
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
                    value={props.title}
                    readOnly={canNotChangeText}
                    onBlur={onBlurHandler}
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
