import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./css/forms.css";
export default function Account() {

    const navigate = useNavigate();

    React.useEffect(() => {
        localStorage.setItem("user", "");
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name } = event.target;
        return navigate("/" + name);
    }

    return (
        <React.Fragment>
            <NavBar />
            <div className="account">
                <h3>Log in to access your tasks</h3>
                <button name="signin" onClick={handleSubmit}>Log In</button>
                <button name="signup" onClick={handleSubmit}>Sign Up</button>
            </div>
        </React.Fragment>
    )
}