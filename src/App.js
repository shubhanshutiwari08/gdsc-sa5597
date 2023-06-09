import { useEffect, useState } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Task from './components/Task';
import TaskList from './components/TaskList';
import {Toaster} from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [tasks,setTasks] = useState([])

  console.log("tasks",tasks);

  useEffect(() =>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[]);

  return (
    <DndProvider backend={HTML5Backend}>
    <Preloader/>
    <Toaster />
    <div className='bg-state-100 w-screen h-screen flex flex-col items-center gap-16 pt-32'>
      <Task tasks={tasks} setTasks= {setTasks}/>
      <TaskList tasks={tasks} setTasks= {setTasks}/>
    </div>
    </DndProvider>
  );
}

export default App;
