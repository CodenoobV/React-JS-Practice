// "use client";

import { useState } from "react";

const TodoList = () => {
    const [inputTask, setInputTask] = useState("");
    const [list, setList] = useState<{ id: number; todo: string }[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(event.target.value);
    }

    const handleAddTodo = (todo: string) => {
        const newTask = {
            id: Math.random(),
            todo: todo
        };
        setList([...list, newTask]);
        setInputTask("");
    }

    const handleDeleteTodo = (id: number) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }
    return (
        <div className="App">
            <h1 className="text-3xl font-bold mb-1">This is the To-do list</h1>
            <div className="TaskInput">
                <input className="bg-slate-500 text-white placeholder-gray-200 rounded px-2 py-2 mr-1" 
                    type="text" 
                    placeholder="Enter a task" 
                    value={inputTask}
                    onChange={handleInputChange}/>
                <button className="bg-slate-500 text-white px-4 py-2 rounded"
                    onClick={() => handleAddTodo(inputTask)}>Add</button>
            </div>
            <div className="TaskList">
                <ul>
                    {list.map((todo) => (
                        <li className="mt-2 flex flex-row" key={todo.id}>
                            <div className="bg-blue-950 text-white rounded px-1 py-1 mr-1">{todo.todo}</div>
                            <button className="ml-auto bg-slate-500 rounded px-1 py-1" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;