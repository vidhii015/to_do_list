"use client";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { task, desc }]);

    settask("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-7">
          <div className="flex justify-baseline items-center w-2/3">
            <h5 className="text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-400 text-white px-4 py-2 rounded-md font-semibold "
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          className="border-2 border-zinc-800 text-2xl font-semibold m-8 px-4 py-2"
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <input
          className="border-2 border-zinc-800 text-2xl font-semibold m-8 px-4 py-2"
          type="text"
          placeholder="Enter Desc Here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="bg-black text-white text-2xl font-semibold rounded-md px-4 py-2 m-5">
          Add Task
        </button>
      </form>

      <br />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
