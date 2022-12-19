import { useState, useEffect } from "react";

import Header from "./Header/Header";
import Form from "./AddNewTodoItem/Form";
import TodoList from "./TodoList/TodoList";

import "./App.css";

const App = (props) => {
    const [itemList, setItemList] = useState(
        JSON.parse(localStorage.getItem("todoList")) || []
    );

    const onAddNewItemHandler = (name, category) => {
        const id = Math.random().toString();
        setItemList([{ title: name, category: category, id: id }, ...itemList]);
    };

    const editItemHandler = ({ idItem, newTitle }) => {
        setItemList((prevList) => {
            prevList.map((item, index) => {
                if (idItem === item.id) {
                    prevList[index]["title"] = newTitle;
                    console.log(newTitle);
                }
                //return prevList;
            });
            console.log(prevList);
            return [...prevList];
        });
        // Small change
    };

    const deleteItemHandler = (id) => {
        setItemList((prevList) => {
            return prevList.filter((item) => item.id !== id);
        });
    };

    //save the new todo List
    useEffect(() => {
        console.log("yolo updatin the listjhgvouvg");
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
                onDeleteItem={deleteItemHandler}
                onSaveItem={editItemHandler}
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
