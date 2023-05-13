import React, { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function CreateArea(props) {

  const [task, setTask] = useState({
    title: "",
    description: "",
    date: new Date().toDateString()
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value
      }
    })
  }

  function submitTask(event) {
    event.preventDefault();
    if (task.title !== "") {
      props.onAdd(task);
    }
    else {
      alert("Task cannot be blank");
    }
  }

  return (
    <div className='createArea'>
      <form action='/' method="post">
        <input
          type="text"
          name="title"
          maxLength={25}
          autoComplete="off"
          onChange={handleChange}
          value={task.title}
          id="task"
          placeholder='Task...(25 char max)' />

        <textarea
          name="description"
          maxLength={100}
          autoComplete="off"
          onChange={handleChange}
          value={task.description}
          id="desc" rows="4" className="description"
          placeholder='Description...(100 characters max & Task cannot be blank)' />

        <button
          className='addTask'
          onClick={submitTask}>
          <AddTaskIcon />
        </button>
      </form>
    </div>
  )
}
