import { useState, useEffect } from "react";

import Header from "./Header/Header";
import Form from "./AddNewTodoItem/Form";
import TodoList from "./TodoList/TodoList";

import "./App.css";

const App = () => {
    const [itemList, setItemList] = useState(
        JSON.parse(localStorage.getItem("todoList")) || []
    );

    //creating item to save in the localStorage
    const onAddNewItemHandler = (name, category) => {
        const id = Math.random().toString();
        setItemList([{ title: name, category: category, id: id }, ...itemList]);
    };

    const onUpdateItemHandler = ({ itemId, newTitle }) => {
        setItemList((prevList) =>
            prevList.map((item) => {
                if (itemId === item.id) {
                    item.title = newTitle;
                }
                return item;
            })
        );
    };

    const onDeleteItemHandler = (id) => {
        setItemList((prevList) => prevList.filter((item) => item.id !== id));
    };

    //save the new todo List
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(itemList));
    }, [itemList]);

    //render todo List
    let contentList = (
        <p
            style={{
                textAlign: "center",
                marginBottom: "3rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
            }}
        >
            No goal found. Add smth, don't be goalless humanbeing!
        </p>
    );

    if (itemList.length > 0) {
        contentList = (
            <TodoList
                items={itemList}
                onDeleteItem={onDeleteItemHandler}
                onSaveItem={onUpdateItemHandler}
            />
        );
    }

    return (
        <>
            <Header />
            <main>
                <Form onAddNewItem={onAddNewItemHandler} />
                {contentList}
            </main>
        </>
    );
};

export default App;
