import React, { useState } from "react";
import TaskElement from "./TaskElement.tsx"

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addTask = (text: string) => {
    if (text.trim()) {
      const newTask: Task = {
        text,
        id: nextId,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNextId(nextId + 1);
      setText('');
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-start w-1/2">
      <div className="flex flex-row w-full">
        <input 
          type="text" 
          value={text}
          placeholder="Type your task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2">
          
          </input>
        <button onClick={() => addTask(text)}
          className=" text-sm text-white bg-purple-800 rounded-lg px-4 py-2 whitespace-nowrap hover:bg-purple-600">Add task</button>
      </div>
      <div className="flex flex-col items-start mt-5 w-full">
      {tasks.map((task) => {
        return (
          <TaskElement
              key={task.id}
              task={task}
              deleteTask={() => deleteTask(task.id)}
              toggleTaskCompletion={() => toggleTaskCompletion(task.id)} />
        )
      })}
      </div>
      </div>
    </div>
  );
}

export default App;
