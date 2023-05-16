import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreateArea from "../components/CreateArea";
import Tasks from "../components/Tasks";
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export default function Home() {

    const user = localStorage.getItem("user");

    useEffect(() => {
        axios.get(baseURL + user) 
            .then((res) => {
                setTask(res.data[0].tasks)
            })
            .catch((err) => alert(err.message));
    }, [user]);

    const [tasks, setTask] = useState([{}]);
    const addNote = async (newTask) => {
        if (tasks.length < 50) {
            axios.post(`${baseURL}create/${user}`, newTask) //post request to server
            .then(getTasks())
            .catch((err) => alert(err.message))
            .finally(getTasks());
        } else {
            alert("Maximum limit Reached(50), Delete some tasks to continue.");
        }
    }

    const getTasks = async () => {

        await axios.get(baseURL + user) 
            .then((res) => {
               setTask(res.data[0].tasks)
            })
            .catch((err) => alert(err.message));
    }

    const delTask = async (_id) => {
        const deleteTask = { 
            username: user,
            id: _id
        };
        await axios.post(baseURL + "delete", deleteTask) //post request to server   
        .then(getTasks())
        .catch((err) => alert(err.message))
        .finally(getTasks());
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


//Create an async function called test below

