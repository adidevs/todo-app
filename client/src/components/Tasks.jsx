import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Tasks(props) {

    function deleteTask() {

        props.onDelete(props.id);
    }

    return (
        <div className="task">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <button
                className="delTask"
                onClick={deleteTask}>
                    <DeleteIcon />
            </button>
        </div>
    )
}