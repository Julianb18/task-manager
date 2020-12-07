import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import { Task } from "./Task";

export const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </>
  );
};
