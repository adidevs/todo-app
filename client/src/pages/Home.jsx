import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreateArea from "../components/CreateArea";
import Tasks from "../components/Tasks";
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export default function Home() {
    const user = localStorage.getItem("user");

    const [tasks, setTask] = useState([{}]);
    function addNote(newTask) {
        newTask.username = user;
        if (tasks.length < 50) {
            axios.post(baseURL, newTask) //post request to server
        } else {
            alert("Maximum limit Reached(50), Delete some tasks to continue.");
        }
    }

    useEffect(() => {
        const username = { username: user }
        axios.post(baseURL + "get", username)
            .then((res) => {
                setTask(res.data.tasks)
            })
            .catch((err) => alert(err.message));
    });

    function delTask(_id) {
        const deleteTask = { username: user, id: _id };
        axios.post(baseURL + "delete", deleteTask) //post request to server
            .catch((err) => alert(err.message));
    }

    if (user !== "") {
        return (
            <React.Fragment>
                <NavBar user={user} />
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
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <NavBar user={user} />
                <h1>Please Sign In to continue</h1>
            </React.Fragment>
        )
    }
}
