import './App.css';
import { useState, useEffect } from 'react';
import Header from './Component/Header';
import Tasks from './Component/Tasks';

//passing data as a props using usesate()
import Data from './Component/Data';
import AddTasks from './Component/AddTasks';

function App() {
  //For the Tasks.jsx
  const [tasks, setTasks] = useState([])

  //For toggling AddTask.jsx
  const [showAddTask, setShowAddTask] = useState(true)

 
  //taking the task from the server and putting it inside our useState()
  useEffect(() => {
   const getTasks = async () =>{
     const taskFromSever = await fetchTasks()
     //putting it inside our useState
     setTasks(taskFromSever)
   }
   getTasks()
  }, [])


   //fetching data from local host 
   //using async await method
   const fetchTasks = async () =>{
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  //fetching data to target each data using the id
  //fetching data from local host 
  //for the reminder
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //delete Task using props
  const DeteleTask = async (id) => {
       //deleting through the server(METHOD USE FOR THE DELETE IN SERVER)
       await fetch(`http://localhost:5000/tasks/${id}`,{
         method: "DELETE",
       })

    //function for deleting using usestate
    setTasks(tasks.filter((e)=> e.id !== id))

  //  const updataDelete = [...tasks].filter((e)=> e.id !== id)
  //  setTasks(updataDelete)
    
  }

  //Toggle Reminder
  const toggleRemider = async (id) => {
    //calling "fetchTask(id)"to the toggleeReminder Func. 
    //tergeting the id and changing it to the opposite... when clicked
    const taskToToggle = await fetchTask(id)
    const upDateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    //THE put or update method
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(upDateTask)
    })

    const data = await res.json()

    //iterating through the task 
    //also saying if id === id display the opposite else disply id
    setTasks(tasks.map((e)=> e.id === id ? {...e, reminder:  data.reminder} : e ))
  }

  //function for Add Tasks
  //also passing it as a props
   const Add_tasks = async (e) =>{
     const res = await fetch("http://localhost:5000/tasks",{
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(e),
     })
     const data = await res.json()
     setTasks([...tasks, data])

    //  //created an id
    //  const id = Math.floor(Math.random() * 10000) + 1
    //  // adding the id to the tasks
    //  const newTask = {id, ...e}
    //  setTasks([...tasks].concat(newTask))
    // //  console.log([...tasks, newTask])
   }
  
  

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddbtn={showAddTask}/>
      {showAddTask && <AddTasks addTask={Add_tasks}/> }
      {tasks.length > 0 ? ( < Tasks tasks={tasks} onDelete={DeteleTask} onToggle={toggleRemider}/>) 
      : ("No tasks To show")}
     
    </div>
  );
}

export default App;
