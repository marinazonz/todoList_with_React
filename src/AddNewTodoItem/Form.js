import React, { useState } from "react";

import NewTodoItemInput from "./NewTodoItemInput";
import NewItemCategory from "./NewItemCategory";

import classes from "./Form.module.css";

const Form = ({ onAddNewItem }) => {
    const [newItemName, setNewItemName] = useState("");
    const [newItemCategory, setNewItemCategory] = useState();

    //taking the name of new item
    const newItemNameHandler = (name) => {
        setNewItemName(name.target.value);
    };

    //taking the category of new item todo
    const selectingCategoryHandler = (category) => {
        setNewItemCategory(category.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        //check if the input is smth (not just empty)
        if (newItemName.trim().length === 0) {
            return alert("The item is empty");
        }

        onAddNewItem(newItemName, newItemCategory);

        setNewItemName("");
        setNewItemCategory(event.target.reset());
    };

    return (
        <>
            <section className={classes.createTodoItem}>
                <h2>Create a ToDo List</h2>
                <form onSubmit={submitHandler}>
                    <NewTodoItemInput
                        value={newItemName}
                        onChange={newItemNameHandler}
                    />
                    <NewItemCategory onChange={selectingCategoryHandler} />
                    <input type='submit' value='Add ToDo' />
                </form>
            </section>
        </>
    );
};

export default Form;
