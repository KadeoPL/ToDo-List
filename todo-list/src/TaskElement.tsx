import React from "react";

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

interface TaskElementProps {
  task: Task;
  deleteTask: () => void;
  toggleTaskCompletion: () => void;
}

const TaskElement: React.FC<TaskElementProps> = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="flex flex-row justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-6 py-4 mt-2 w-full hover:bg-gray-200">
      <div className="flex flex-row">
      <input 
          type="checkbox" 
          name="completed" 
          id={String(task.id)} 
          checked={task.completed} 
          onChange={toggleTaskCompletion} 
          className="mr-2" 
        />
      <h1 className={task.completed ? "line-through font-thin " : "font-bold"}>{task.text}</h1>
      </div>
      <button onClick={deleteTask} className="ml-5 cursor-pointer text-red-400 font-thin">Delete</button>
    </div>
  );
};

export default TaskElement;
