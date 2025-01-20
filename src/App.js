import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Rendez vous medecin',
        day: '5 fevrier à 10H30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Boxe',
        day: '7 fevrier à 19H30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Diner pro',
        day: '14 fevrier à 20H30',
        reminder: false,
    },
])

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      /> 
      : 'Aucun évenement en cours'}
    </div>
  );
}

export default App;
