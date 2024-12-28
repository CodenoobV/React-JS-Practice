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

    return (
        <div>
            <h1>This is the To-do list</h1>
            <div className = "Top">
                <input className = "TaskInput" type = "text" value = {inputTask}
                    onChange = {handleInputChange} 
                    placeholder = "Enter a task"/>
                <button className = "btn" onClick={() => handleAddTodo(inputTask)}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;