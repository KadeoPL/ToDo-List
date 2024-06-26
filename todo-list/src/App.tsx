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
    <>
      <input 
        type="text" 
        value={text} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
      />
      <button onClick={() => addTask(text)}>Ok</button>
      <ul>
      {tasks.map((task) => {
        return (
          <TaskElement key={task.id} task={task}/>
        )
      })}
      </ul>
    </>
  );
}

export default App;
