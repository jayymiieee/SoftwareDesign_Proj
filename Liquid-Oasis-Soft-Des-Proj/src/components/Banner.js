// Banner.js
import React from "react";
import liquorImage from "../assets/images/liquor.png";

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerDescription}>
        <h2 style={styles.title}>Order Your Drink with Ease</h2>
        <p style={styles.subtitle}>Grab Yours Today!</p>
        <div style={styles.btnContainer}>

          <a href="/Menu" style={styles.orderLink}>
            Order Now!
          </a>
          <a href="/Menu" style={styles.menuLink}>
            See Menu
          </a>
        </div>
      </div>

      <div style={styles.bannerImage}>
        <img src={liquorImage} alt="banner" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    backgroundColor: "#000",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  bannerDescription: {
    padding: "10px",
    marginRight:"10px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#fff",
    marginLeft:"275px",
    fontFamily:"FreeMono, monospace",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ff0000",
    padding: "10px 0",
    marginLeft:"450px",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
  },
  menuLink: {
    textDecoration: "none",
    color: "#ffcc00",
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "40px",
  },
  orderLink: {
    textDecoration: "none",
    color: "#ffcc00",
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "420px",
  },
  bannerImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  image: {
    width: "400px",
    height: "400px",
  },
};

export default Banner;
