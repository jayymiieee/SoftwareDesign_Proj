import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const userQuery = await firebase.firestore().collection('users').where('email', '==', email).get();
            if (userQuery.empty) {
                alert("User not found. Please check the email address.");
                return;
            }
            await firebase.auth().sendPasswordResetEmail(email);
            alert("Password reset email sent. Check your inbox.");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className='main_container_signup'>
                <div className='header'>
                    <h2>Recover Password</h2>
                </div>
                <div className='box'>
                    <input type='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <Link className='link' to="/login">Remember Password?</Link>
                <button onClick={submit}>Recover</button>
            </div>
        </>
    );
};

export default ForgetPassword;
