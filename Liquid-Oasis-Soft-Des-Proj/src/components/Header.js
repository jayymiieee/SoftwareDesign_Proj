// Header.js
import React from "react";
import { Link } from "react-router-dom";
import liquid from "../assets/images/oasis.png";

const Header = () => {
  return (
    <nav id="header" style={styles.nav}>
      <div style={styles.container}>

          <Link to="/" style={styles.logoLink}>
            <img src={liquid} alt="logo" style={styles.logo} />
          </Link>
        </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 0",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center", // Center align the content horizontally
    alignItems: "center",
    padding: "0 20px",
    marginBottom: "10px",
  },
  logoLink: {
    textDecoration: "none",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "250px",
    height: "250px",
    marginRight: "10px",
  },
};

export default Header;
