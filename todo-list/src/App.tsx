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
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <div className="flex flex-row ">
        <input 
          type="text" 
          value={text}
          placeholder="Type your task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          
          </input>
        <button onClick={() => addTask(text)}>Add task</button>
      </div>
      <div>
      {tasks.map((task) => {
        return (
          <TaskElement key={task.id} task={task}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
