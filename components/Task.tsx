import React from 'react'

type TaskProps={
  task:string
}

const Task = ({task}:TaskProps) => {
  return (
    <div className=" shadow-lg shadow-gray-100/50 rounded mb-4">
      <div className="flex items-center h-[3rem] p-[1rem] border-black mb-2">
        <input type="checkbox" className="accent-green-500 mr-2 rounded-full" />
        <p className="text-[12px]">{task}</p>
        <button className="ml-auto text-blue-500">Edit</button>
      </div>
    </div>
  );
}

export default Task