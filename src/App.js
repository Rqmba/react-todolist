import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
      <Header />
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
