import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = ({ items, onSaveItem, onDeleteItem }) => {
    return (
        <>
            <section className={classes.todoList}>
                <h5>TODO List</h5>
                <ul>
                    {items.map((item) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            category={item.category}
                            title={item.title}
                            onSave={onSaveItem}
                            onDelete={onDeleteItem}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TodoList;
