import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const Register = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        if (parseInt(age) < 18) {
            alert("Age must be 18 or above.");
            return;
        }

        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const userId = userCredential.user.uid;

            await firebase.firestore().collection('users').doc(userId).set({
                firstName: firstname,
                lastName: lastname,
                age: parseInt(age),
                email: email,
            });

            alert("Account Created Successfully.");
        } catch (error) {
            alert(error.message);
        }
    };

    const [formData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const labelStyle = {
        color: "black",
        marginTop: "1em",
        marginBottom: "0.5em",
        display: "block",
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
        textAlign: "center",
        justifyContent: "center",
        borderRadius: "1em",
        alignItems: "center",
        boxShadow: "inset 2px 1px 3px rgba(0, 0, 0, 0.2)",
        padding: "0.5em 1em",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        background: "black",
        flex: "flex-start",
    };

    const p = {
        fontSize: '14px',
        color: '#232323',
        fontWeight: 600,
    };

    const rectangularBackground = {
        backgroundColor: "#D9D9D9",
        width: "20%",
        padding: "2em",
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    };

    const signUpText = {
        color: "black",
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "0.5em",
        fontFamily:"FreeMono, monospace",
    };

    const loginLinkContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
    };

    const loginLinkStyle = {
        fontSize: '10px',
        color: '#FF0000',
        fontWeight: 600,
    };

    return (
        <div className="text-black" style={containerStyle}>
            <div style={rectangularBackground}>
                <h2 style={signUpText}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1em" }}>
                        <label style={labelStyle}>First Name: </label>
                        <input type='text' style={inputStyle} value={firstname} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>

                    <div style={{ marginBottom: "1em" }}>
                        <label style={labelStyle}>Last Name: </label>
                        <input type='text' style={inputStyle} value={lastname} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                    </div>

                    <div style={{ marginBottom: "1em" }}>
                        <label style={labelStyle}>Age: </label>
                        <input type='number' style={inputStyle} value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} min="1"></input>
                    </div>

                    <div style={{ marginBottom: "1em" }}>
                        <label style={labelStyle}>Email: </label>
                        <input type='email' style={inputStyle} value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div style={{ marginBottom: "1em" }}>
                        <label style={labelStyle}>Password: </label>
                        <input type='password' style={inputStyle} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <p style={p}>Already Have an Account? </p>
                    <div style={loginLinkContainerStyle}>
                        <Link style={loginLinkStyle} to="/">Login Now</Link>
                    </div>
                    <div style={buttonContainerStyle}>
                        <Link to="/">
                            <button onClick={submit} style={buttonStyle}>
                                <span style={labelStyle}>Register</span>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
