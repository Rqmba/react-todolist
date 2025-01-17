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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
