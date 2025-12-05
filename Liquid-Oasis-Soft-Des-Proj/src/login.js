import React, { useState } from "react";
import { Link } from 'react-router-dom'
import firebase from './firebaseConfig'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (user) {
                alert("Login Successfully.");
                navigate('/home');
            }
        } catch (error) {
            alert(error);
        }
    };

    const [formData] = useState({
        username: "",
        password: "",
    });


    const create = {
        fontSize: '10px',
        color: '#FF0000',
        fontWeight: 600,
    };
    const forgot = {
        fontSize: '10px',
        color: '#0000FF',
        fontWeight: 600,
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const p = {
        fontSize: '14px',
        color: '#232323',
        fontWeight: 600,
    };

    const labelStyle = {
        color: "black",
        marginTop: "10px",
        textAlign: "left",
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    };

    const buttonStyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "17px",
        padding: "5px 10px",
        boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.2)",
        width: "100%",
    };

    const inputStyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "17px",
        padding: "5px 10px",
        boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.2)",
        width: "100%",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        background: "black", 
    };

    const rectangularBackground = {
        backgroundColor: "#D9D9D9",
        width: "300px",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    };

    const signUpText = {
        color: "black",
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "20px",
        fontFamily:"FreeMono, monospace",
    };

    return (
        <div style={containerStyle}>
            <div style={rectangularBackground}>
                <h2 style={signUpText}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label style={labelStyle}>Username: </label>
                        <input type='email' style={inputStyle} value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label style={labelStyle}>Password: </label>
                        <input type='password' style={inputStyle} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <p style={p}>Don't Have  an Account? <Link style={create} to="/signup">Create Account</Link></p>
                        <Link style={forgot} className='link' to="/forgetpassword">Forgot Password?</Link>
                    </div>
                    <div style={buttonContainerStyle}>
                        <button onClick={submit} style={buttonStyle}>
                            <span style={labelStyle}>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
