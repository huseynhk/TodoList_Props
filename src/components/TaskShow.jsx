import React, { useState } from "react";
import Create from "./Create";
import { useContext } from "react";
import TaskContext from "./Task"

const TaskShow = ({taskProps}) => {

  const { deleteItem , editItem } = useContext(TaskContext)

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = () => {
    deleteItem(taskProps.id);
  };

  const handleSubmit = (id , editTitle , editDescription) => {
    setShowEdit(false);
    editItem(id , editTitle , editDescription)
  };

  return (
    <div>
      {showEdit ? (
        // <> </>
        <Create editProps={taskProps} taskBoolen={true} onUpdate={handleSubmit}/>
                        // taskBoolen - edite click eden vaxti true-dusa  <Create>-in Edit hissesi - acilacaq
      ) : (
        <div className="show">
          <h3>Task</h3>
          <p>{taskProps.title}</p>
          <h3>List</h3>
          <p>{taskProps.description}</p>
          <div>
            <button className="btnShow" onClick={handleEdit}>
              Edit
            </button>
            <button className="btnShow btnDlt" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
