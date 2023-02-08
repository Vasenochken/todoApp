import Task from './task.js';
import "./todoList.css";

const TodoList = ({ todos }) => {
    const elements = todos.map( (item) => {

    const { id, ...itemProps  } = item;
    
    return (
        <li key={id}>
            <Task { ...itemProps } />
        </li>
    );});

    return (
        <ul className="todoList">
            { elements }
        </ul>
    );
}

export default TodoList;