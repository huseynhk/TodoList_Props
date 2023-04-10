import React from "react";
import TaskShow from "./TaskShow";
import { useContext } from "react";
import TaskContext from "./Task"

const List = () => {

  const {task} = useContext(TaskContext)
    
  return (
    <div className="taskList">
      {task.map((tsk , index) => {
        return(
            <TaskShow key={index} taskProps={tsk}/>
        )
      })}
    </div>
  );
};

export default List;
