import "./App.css";
import Create from "./components/Create";
import List from "./components/List";
import { useEffect , useContext } from "react";
import TaskContext from "./components/Task";

function App() {

 const {fetchTask} = useContext(TaskContext)

  useEffect(() => {
    fetchTask();
  },[])
 
  return (
    <div className="App">
      <Create/>
      <List/>
    </div>
  );
}

export default App;
