"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const TasksPage = () => {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  console.log(Array.isArray(tasks));

  return (
    <div className="container mx-auto text-white">
      <h1 className="text-white">Tasks</h1>
      <ul className="">
        {tasks?.map((task) => (
          <div key={task._id}>
            <li>{task?.text}</li>
            <li>{task?.isCompleted ? "true" : "false"}</li>
            <li>{task?._id}</li>
            <li>{task?._creationTime}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
