/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [todoList , setTodoList] = useState([]);
  const [newTask , setNewTask] = useState("");
  const [newTaskDes , setNewTaskDes] = useState("");
  const [updateTask , setUpdateTask] = useState("");

  // taskname handler
  const handleTask = (event) =>{
    setNewTask(event.target.value);
  }

  // taskdescription handler
  const handleTaskDescr = (e) =>{
    setNewTaskDes(e.target.value)

  }

  // adding tasks
  const addTask = () =>{
    const task ={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1,
      taskName : newTask,
      taskdesc : newTaskDes,
    }
    setTodoList([...todoList , task]);
  }

  // deletion of tasks
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task)=>{
      return task.id !== id;
    })

    setTodoList(newTodoList);
  }

  // edit and updation of tasks
  const editTask = () =>{
    setUpdateTask(newTaskDes === updateTask);
  }


  return (
    <div className='App'>
      <h1 className='head-app'>My Todo</h1>
      <div className='add-task'>
        <input onChange={handleTask} placeholder='Todo Name'/>
        <input onChange={handleTaskDescr} placeholder='Todo Description'/>
        <button onClick={addTask}>Add Todo</button>
      </div>

      {/* Task card creation and task implementation */}
      <div className='current-task'>
      <h3> My Todos </h3>
        {todoList.map((task)=>{
          return(
            <>
            <div className='task-card'>
              <h1>Name : {task.taskName}</h1>
              <p>Description : {task.taskdesc}</p>
              <select className="task-process">
                  <option>Not Completed</option>
                  <option>On Going</option>
                  <option>Completed</option>
              </select>
              <button onClick={editTask}>Edit</button>
              <button onClick={() => deleteTask(task.id)} className='delete-task'>Delete</button>
            </div>
            </>
          );
        })}
      </div>
    </div>
    
  )
}

export default App