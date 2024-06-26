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
    <div>
      <p>{task.text}</p>
      <p>{task.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TaskElement;
