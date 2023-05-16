import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/forms.css';
const baseURL = process.env.REACT_APP_API_URL;
export default function SignIn() {

    const navigate = useNavigate();
    const [info, setInfo] = React.useState({
        username: "",
        password: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })
    }

    const checkLogin = async () => {
        axios.get(`${baseURL}signin/${info.username}/${info.password}`) //post request to server
            .then(response => {
                if (response.data !== null) {
                    localStorage.setItem("user", info.username);
                    return navigate("/tasks"); //redirect to tasks page
                }
                else {
                    alert("Check your login details, try again!");
                    return navigate("/signin"); //refresh page
                }
            })
            .catch(err => {
                alert("Unable to login, try again! " + err.message);
                return navigate("/signin"); //refresh page
            })


    }

    const submitInfo = (event) => {
        console.log(baseURL);
        event.preventDefault();
        if (info.password !== "" && info.username !== "")
            checkLogin();
        else
            alert("Please fill all the fields");
    }

    return (
        <React.Fragment>
            <NavBar />
            <div>
                <form>
                    <h1>Sign In</h1>
                    <label htmlFor="email">Email</label><br />
                    <input type="text"
                        name="username"
                        id="email"
                        onChange={handleChange}
                        required /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        required /> <br />
                    <button type="submit" onClick={submitInfo}>Sign In</button>
                </form>
            </div>
        </React.Fragment>
    )
}