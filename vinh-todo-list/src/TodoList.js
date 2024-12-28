import React from 'react';

// React hook for handle input/input change
import { useState } from 'react';

const TodoList = () => {
    // Variables and functions go here
    // For your own study: https://reactjs.org/docs/hooks-state.html
    const [inputTask, setInputTask] = useState(""); // Starting state is an empty string
    const [list, setList] = useState([]); // Starting state is an empty array

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

    const handleAddTodo = (todo) => {
        // Create a new todo task with random ID
        const newTask = {
            id: Math.random(),
            todo: todo
        };

        // Add the new task to the list
        setList([...list, newTask]);
        // Reset the input field
        setInputTask("");
        alert ("Task added!");
    }

    const handleDeleteTodo = (id) => {
        // Filter out the task with the given ID
        const newList = list.filter((todo) =>
            todo.id !== id
        );

        setList(newList);
    }

    return (
        <div>
            <h1>This is the To-do list</h1>
            <div className = "Top">
                <input className = "TaskInput" type = "text" value = {inputTask}
                    onChange = {handleInputChange} 
                    placeholder = "Enter a task"/>
                <button className = "btn" onClick={() => handleAddTodo(inputTask)}>Add</button>
            </div>
            <div className = "Middle">
                <ul>
                    { list.map((todo) => (
                        <li className = "Task" key = {todo.id}>
                            {todo.todo}
                            <button onClick = {() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;