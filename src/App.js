import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import List from "./components/List";

function App() {
  const [task, setTask] = useState([]);

  const createTask = (title, description) => {
    // console.log(forTitle , forDescription)
    const createdTask = [
      ...task,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
        description: description,
      },
    ];
    setTask(createdTask);
  };

  const deleteItem = (id) => {
    //  console.log(id);
    const afterDeleteTask = task.filter((tsk) => {
      return tsk.id !== id;
    });
    setTask(afterDeleteTask);
  };

  const editItem = (id, editTitle, editDescription) => {
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
