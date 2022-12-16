import { useState } from "react";

import Header from "./Header/Header";
import Form from "./AddNewTodoItem/Form";
import TodoList from "./TodoList/TodoList";

import "./App.css";

const dummy_data = [
    {
        title: "eat",
        category: "personal",
        id: "32mdvk",
    },
    {
        title: "pray",
        category: "business",
        id: "32mder",
    },
    {
        title: "love",
        category: "personal",
        id: "32md",
    },
];

const App = (props) => {
    //const [itemList, setItemList] = useState([]);
    const [itemList, setItemList] = useState(dummy_data);

    const onAddNewItemHandler = (name, category) => {
        const id = Math.random().toString();
        setItemList([{ title: name, category: category, id: id }, ...itemList]);

        localStorage.setItem(id, JSON.stringify(name));
    };

    const editItemHandler = (idItem, title) => {
        itemList.map((item) => {
            console.log(idItem, item.id);
            if (idItem === item.id) {
                setItemList([
                    {
                        id: idItem,
                        title: title,
                        category: item.category,
                    },
                    ...itemList,
                ]);
                localStorage.setItem(itemList.id, JSON.stringify(title));

                console.log(itemList);
            }
        });
    };

    const deleteItemHandler = (id) => {
        setItemList((prevList) => {
            return prevList.filter((item) => item.id !== id);
        });
    };

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
