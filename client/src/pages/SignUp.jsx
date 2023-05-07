import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import "./css/forms.css";
const baseURL = process.env.REACT_APP_API_URL;

export default function SignUp() {
    const navigate = useNavigate();

    const [info, setInfo] = React.useState({
        username: "",
        password: "",
        finalpassword: ""
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

    const checkUser = async () => { //check if user exists
        try {
            const response = await axios.get(`${baseURL}signin/${info.username}/${info.password}`) //post request to server
            if (response.data !== null) {
                return true; //user exists
            }
            else {
                return false; //user does not exist
            }
        }
        catch (err) {
            alert("Unable to connect, try again! " + err.message);
            return navigate("/signup"); //refresh page
        }
    }

    const createAccount = async () => {
        await axios.post(`${baseURL}signup`, info) //post request to server
            .then(response => {
                if (response.status === 200) {
                    return navigate("/signin"); //redirect to login page
                }
                else {
                    alert("Unable to Create Account, try again");
                    return navigate("/signup"); //refresh page
                }
            })
            .catch(err => {
                return navigate("/signup"); //refresh page
            })
    }

    const checkPassword = () => {
        if (info.password === info.finalpassword)
            return true;
        else
            return false;
    }

    const submitInfo = async (event) => {
        event.preventDefault();
        if (!checkPassword() || info.password === "" || info.username === "" || info.finalpassword === "") {
            alert("Passwords do not match Or Empty Fields!");
            document.getElementById("finalpassword").value = "";
        }
        else {
            const userExists = await checkUser();
            if (userExists) {
                alert("User already exists! Log in Or Create New Account.");
            }
            else {
                createAccount();
            }
        }
    }


    return <React.Fragment>
        <NavBar />
        <form>
            <h1>Sign Up</h1>
            <label htmlFor="username">Username:</label><br />
            <input type="text"
                name="username"
                onChange={handleChange}
                required /> <br />
            <label htmlFor="password">Password:</label><br />
            <input type="password"
                name="password"
                onChange={handleChange}
                required /> <br />
            <label htmlFor="finalpassword">Confirm Password:</label><br />
            <input type="password"
                name="finalpassword"
                onChange={handleChange}
                id="finalpassword"
                required /> <br />
            <button type="submit" onClick={submitInfo}>Sign Up</button>
        </form>
    </React.Fragment>
}