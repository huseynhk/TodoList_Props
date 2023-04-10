import { createContext } from "react";
import { useState } from "react";
import axios from 'axios';

const TaskContext = createContext();

const FunctionProvider = ({ children }) => {
    const [task, setTask] = useState([]);

    const createTask = async (title, description) => {
     const res = await axios.post('http://localhost:3005/task' , {
        title,
        description,
      });
      console.log(res)
      
      const createdTask = [
        ...task,
        res.data
      ];
      setTask(createdTask);
    };
  
    const fetchTask = async () => {
      const res = await axios.get('http://localhost:3005/task')
      setTask(res.data)
    }

    const deleteItem = async (id) => {
        //  console.log(id);
        await axios.delete(`http://localhost:3005/task/${id}`)
        const afterDeleteTask = task.filter((tsk) => {
          return tsk.id !== id;
        });
        setTask(afterDeleteTask);
      };
    
      const editItem = async (id, editTitle, editDescription) => {
        await axios.put(`http://localhost:3005/task/${id}`,{
          title: editTitle, description: editDescription,
        })
        const afterEditTask = task.map((tsk) => {
          if (tsk.id === id) {
            return { id, title: editTitle, description: editDescription };
          } else {
            return tsk;
          }
        });
        setTask(afterEditTask);
      };

      const sharedFunctions = {
        task,
        createTask,
        fetchTask,
        deleteItem,
        editItem
      }
  return (
    <div>
      <TaskContext.Provider value={sharedFunctions}>
        {children}
      </TaskContext.Provider>
    </div>
  );
};

export { FunctionProvider };

export default TaskContext;
