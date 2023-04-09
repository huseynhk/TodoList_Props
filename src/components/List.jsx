import React from "react";
import TaskShow from "./TaskShow";

const List = ({ tasks , onDelete , onUpdate}) => {
// onDelete-i birbasa app-dan alib List-e oturur
    
  return (
    <div className="taskList">
      {tasks.map((task , index) => {
        return(
            <TaskShow key={index} taskProps={task} onDelete={onDelete} onUpdate={onUpdate} />
        )
      })}
    </div>
  );
};

export default List;
