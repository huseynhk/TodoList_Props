import { useEffect, useState } from "react";
import "./App.css";
import Create from "./components/Create";
import List from "./components/List";
import axios from 'axios';

function App() {
  const [task, setTask] = useState([]);

  const createTask = async (title, description) => {
  
   const res = await axios.post('http://localhost:3004/task' , {
      title,
      description,
    });
    console.log(res)


    const createdTask = [
      ...task,
      // {
      //   id: Math.round(Math.random() * 9999),
      //   title,
      //   description,
      // },
      res.data
    ];
    setTask(createdTask);
  };

  const fetchTask = async () => {
    const res = await axios.get('http://localhost:3004/task')
    setTask(res.data)
  }

  useEffect(() => {
    fetchTask();
  },[])

  
  const deleteItem = async (id) => {
    //  console.log(id);
    await axios.delete(`http://localhost:3004/task/${id}`)
    const afterDeleteTask = task.filter((tsk) => {
      return tsk.id !== id;
    });
    setTask(afterDeleteTask);
  };

  const editItem = async (id, editTitle, editDescription) => {
    await axios.put(`http://localhost:3004/task/${id}`,{
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

  return (
    <div className="App">
      <Create onCreate={createTask} />
      <List tasks={task} onDelete={deleteItem} onUpdate={editItem} />
    </div>
  );
}

export default App;
