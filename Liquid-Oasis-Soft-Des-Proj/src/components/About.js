import React from "react";
import liquidOasis from "../assets/images/liquidOasis.png";
import Button from "./Button";
import firebase from './../firebaseConfig'
import { Link } from 'react-router-dom'

export const About = () => {

  const handleSignout = () => {
    firebase.auth().signOut()
      .then(() => {
        alert("Signout successful");
      })
      .catch((error) => {
        console.error("Error during signout", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div style={aboutContainer}>
        <div style={aboutContent}>
          <h2 style={aboutTitle}>Liquid Oasis</h2>
          <div style={aboutText}>
            <p style={aboutUs}>Location: Anonas, Quezon City</p>
            <p style={aboutUs}>Contact Number: 0928 760 3873</p>
            <p style={aboutUs}>Facebook: Liquid Oasis</p>
            <p style={aboutUs}>Instagram: lq.oasis.liquors</p>
          </div>
          <Link to="/login">
            <Button onClick={handleSignout}>Signout</Button>
          </Link>
        </div>
        <div style={aboutImage}>
          <img
            src={liquidOasis}
            alt=""
            style={aboutImageContent}
          />
        </div>
      </div>
    </div>
  );
};

const aboutContainer = {
  padding: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems:"center",

};

const aboutContent = {
  padding: "24px",
};

const aboutTitle = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#fff",
  fontFamily:"FreeMono, monospace",
  marginBottom:"20px",
};

const aboutText = {
  fontSize: "lg",
  color: "#fff",
};

const aboutUs = {
  fontSize: "lg",
  color: "#fff",
  marginBottom:"5px",
};

const aboutImage = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const aboutImageContent = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
};
