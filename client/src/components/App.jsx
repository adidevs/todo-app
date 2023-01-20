import React, { useEffect, useState } from "react";
import AppBar from "./NavBar";
import CreateArea from "./CreateArea";
import Tasks from "./Tasks";
import axios from "axios";
const baseURL = "https://todo-nryd.onrender.com";
export default function App() {

    const [tasks, setTask] = useState([]);
    function addNote(newTask) {
        if (tasks.length < 50) {
            axios.post(baseURL, newTask)
                .then(({ data }) => data)
        } else {
            alert("Maximum limit Reached(50), Delete some tasks to continue.");
        }
    }

    useEffect(() => {
        axios.get(baseURL)
            .then((res) => { setTask(res.data) });
    });

    function delTask(id) {
        axios.get(baseURL + id);
    }

    return (
        <div>
            <AppBar />
            <CreateArea onAdd={addNote} />
            {tasks.map((taskItem, index) => {
                return (<Tasks
                    key={index}
                    id={taskItem._id}
                    title={taskItem.title}
                    description={taskItem.description}
                    date={taskItem.date}
                    onDelete={delTask} />
                );
            }
            )}
        </div>
    )
} 
