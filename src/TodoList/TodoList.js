import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
    return (
        <>
            <section className={classes.todoList}>
                <h5>TODO List</h5>
                <ul>
                    {props.items.map((item) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            category={item.category}
                            title={item.title}
                            onSave={props.onSaveItem}
                            onDelete={props.onDeleteItem}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TodoList;
