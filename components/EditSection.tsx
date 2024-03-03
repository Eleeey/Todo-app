"use client";

import { SetStateAction, useState } from "react";
import Button from "./Button"
const EditSection = ({ onAddTask }: any) => {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[6rem] flex items-center justify-center bg-[#3556AB]">
        <p className="text-white">Edit Task</p>
      </div>
      <div className="flex flex-col p-3">
        <p className="text-[15px]">Task Name</p>
        <input
          type="text"
          max={25}
          value={taskText}
          onChange={handleInputChange}
          placeholder="Enter task"
          className="ml-4 h-[3rem] border-gray-500 "
        />
      </div>
      <div className="flex flex-row w-full absolute px-2 bottom-0">
        
        <Button width="20%" color="#AB3535" title="Delete" />
        <Button width="60%" color="#123EB1" title="Save" />
      </div>
    </div>
  );
};

export default EditSection;
