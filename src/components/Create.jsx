import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "./Task"

const Create = ({ editProps, taskBoolen ,onUpdate }) => {

  const { createTask } = useContext(TaskContext)

  const [title, setTitle] = useState(editProps ? editProps.title : "");
  const [description, setDescription] = useState(
    editProps ? editProps.description : ""
  );
  console.log(title, description);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskBoolen) {
      onUpdate(editProps.id, title, description)
      //True-dusa bu deyerleri qebul elesin
    } else {
      createTask(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      {" "}
      {taskBoolen ? (
        <div className="task_update">
          <form className="task_form">
            <label>Title</label>
            <input
              value={title}
              onChange={handleChange}
              type="text"
              placeholder="Edit Title"
            />

            <label>Task</label>
            <textarea
              placeholder="Edit Task"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
            <button className="btn updatedBtn" onClick={handleSubmit}>
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task_create">
          <form className="task_form">
            <label>Title</label>
            <input
              value={title}
              onChange={handleChange}
              type="text"
              placeholder="Enter Title"
            />

            <label>Task</label>
            <textarea
              placeholder="Enter Task"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
            <button className="btn" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}{" "}
    </div>
  );
};

export default Create;
