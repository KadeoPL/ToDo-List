import React from "react";

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

interface TaskElementProps {
  task: Task;
}

const TaskElement: React.FC<TaskElementProps> = ({ task }) => {
  return (
    <div className="bg-red-500 flex flex-row">
      <input type="checkbox" name="completed" id='{task.id}' className="mr-2"/>
      <h1>{task.text}</h1>
    </div>
  );
};

export default TaskElement;
