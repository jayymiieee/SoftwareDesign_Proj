import { useState } from "react";
import React from "react";
import jackImage from "./assets/images/jack.jpg";
import blackLabel from "./assets/images/black.jpg";
import chivas from "./assets/images/chivas.jpg";
import double from "./assets/images/double.jpg";
import cuervo from "./assets/images/cuervo.jpg";
import bacardi from "./assets/images/bacardi.jpg";
import bacardi2 from "./assets/images/bacardi2.jpg";
import redLabel from "./assets/images/red label.jpg";
import tanqueray from "./assets/images/tanqueray.jpg";
import ballan from "./assets/images/ballan.jpg";
import baileys from "./assets/images/baileys.jpg";
import jim from "./assets/images/jim.jpg";
import absolut from "./assets/images/absolut.jpg";
import rose from "./assets/images/rose.jpg";
import coke from "./assets/images/jack coke.jpg";
import { Tabs } from "./components/Tab";
import { Link } from "react-router-dom";
import firebase from './firebaseConfig'

const Menu = () => {
    const [activeTab, setActiveTab] = useState("");
    const [cartTotal, setCartTotal] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    const addLiquorToFirestore = (liquor) => {
        if (user) {
            db.collection("users").doc(user.uid).collection("cart").doc(liquor.id).set({
                nameprice: `${liquor.name} (${liquor.price})`,
            });
        }
    };

    const updateTotalPayment = () => {
        if (user) {
            db.collection("users").doc(user.uid).collection("cart").doc("total").set({
                totalpayment: cartTotal.toFixed(2),
            });
        }
    };

    const addToCartHandler = (liquor) => {
        setCartTotal((prevTotal) => prevTotal + parseFloat(liquor.price.replace(/[^0-9.-]+/g, "")));
        addLiquorToFirestore(liquor);
        setIsCartEmpty(false); 
        console.log(`Added ${liquor.name} to the cart`);
    };
    
    const clearCart = async () => {
        if (user) {
            const querySnapshot = await db.collection("users").doc(user.uid).collection("cart").get();
            const deletePromises = querySnapshot.docs.map((doc) => doc.ref.delete());
            await Promise.all(deletePromises);
            setIsCartEmpty(true);
            alert("Cart cleared successfully!");
        }
    };

    const displayTotal = () => {
        updateTotalPayment();
        alert(`Total Price: ₱${cartTotal.toFixed(2)}`);
    };
    const liquors = [
        {
            id: "liquor1",
            name: "𝐉𝐚𝐜𝐤 𝐃𝐚𝐧𝐢𝐞𝐥'𝐬 𝐎𝐥𝐝 𝐍𝐨.𝟕",
            volume: "1 Liter",
            price: "₱1,700.00",
            image: jackImage,
        },
        {
            id: "liquor2",
            name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐁𝐥𝐚𝐜𝐤 𝐋𝐚𝐛𝐞𝐥 ",
            volume: "1 Liter",
            price: "₱1,300.00",
            image: blackLabel,
        },
        {
            id: "liquor3",
            name: "𝐂𝐡𝐢𝐯𝐚𝐬 𝐑𝐞𝐠𝐚𝐥 𝟏𝟐𝐲𝐨 ",
            volume: "1 Liter",
            price: "₱1,350.00",
            image: chivas,
        },
        {
            id: "liquor4",
            name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐃𝐨𝐮𝐛𝐥𝐞 𝐁𝐥𝐚𝐜𝐤 ",
            volume: "1 Liter",
            price: "₱1,950.00",
            image: double,
        },
        {
            id: "liquor5",
            name: "𝐉𝐨𝐬𝐞 𝐂𝐮𝐞𝐫𝐯𝐨 𝐆𝐨𝐥𝐝 ",
            volume: "1 Liter",
            price: "₱1,350.00",
            image: cuervo,
        },
        {
            id: "liquor6",
            name: "𝐁𝐚𝐜𝐚r𝐝𝐢 𝐆𝐨𝐥𝐝 ",
            volume: "750ml",
            price: "₱750.00",
            image: bacardi,
        },
        {
            id: "liquor7",
            name: "𝐁𝐚𝐜𝐚𝐫𝐝𝐢 𝐒𝐮𝐩𝐞𝐫𝐢𝐨𝐫 ",
            volume: "1 Liter",
            price: "₱750.00",
            image: bacardi2,
        },
        {
            id: "liquor8",
            name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐑𝐞𝐝 𝐋𝐚𝐛𝐞𝐥 ",
            volume: "1 Liter",
            price: "₱900.00",
            image: redLabel,
        },
        {
            id: "liquor9",
            name: "𝐓𝐚𝐧𝐪𝐮𝐞𝐫𝐚𝐲 𝐆𝐢𝐧 ",
            volume: "750ml",
            price: "₱1,050.00",
            image: tanqueray,
        },
        {
            id: "liquor10",
            name: "𝐁𝐚𝐢𝐥𝐞𝐲'𝐬 𝐈𝐫𝐢𝐬𝐡 𝐂𝐫𝐞𝐚𝐦 ",
            volume: "700ml",
            price: "₱850.00",
            image: baileys,
        },
        {
            id: "liquor11",
            name: "𝐉𝐢𝐦 𝐁𝐞𝐚𝐦 𝐖𝐡𝐢𝐭𝐞",
            volume: "1 Liter",
            price: "₱900.00",
            image: jim,
        },
        {
            id: "liquor12",
            name: "𝐁𝐚𝐥𝐥𝐚𝐧𝐭𝐢𝐧𝐞'𝐬 𝐅𝐢𝐧𝐞𝐬𝐭",
            volume: "1 Liter",
            price: "₱750.00",
            image: ballan,
        },
        {
            id: "liquor13",
            name: "𝐓𝐞𝐪𝐮𝐢𝐥𝐚 𝐑𝐨𝐬𝐞 𝐋𝐢𝐪𝐮𝐞𝐮𝐫",
            volume: '750ml',
            price: "₱1,050.00",
            image: rose,
        },
        {
            id: "liquor14",
            name: "𝐀𝐛𝐬𝐨𝐥𝐮𝐭 𝐂𝐢𝐭𝐫𝐨𝐧",
            volume: "1 Liter",
            price: "₱750.00",
            image: absolut,
        },
        {
            id: "liquor15",
            name: "𝐉𝐚𝐜𝐤 & 𝐂𝐨𝐤𝐞",
            volume: "320ml (4 Pack)",
            price: "₱385.00",
            image: coke,
        },
    ];

    const containerStyle = {
        background: "black",
        color: "white",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",

    };

    const headerStyle = {
        color: "white",
        fontSize: "45px",
        fontWeight: "bold",
        marginBottom: "30px",
        fontFamily:"FreeMono, monospace",
    };

    const liquorStyle = {
        margin: "30px",
        textAlign: "center",
        color: "white",
        flexBasis:'200px',

    };

    const imageStyle = {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        margin: "0 auto",
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Liquor Menu</h2>

            <div>
                <Link to="/home">
                    <button
                        style={{
                            padding: "10px",
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Home
                    </button>
                </Link>
                <button
                    onClick={clearCart}
                    style={{
                        padding: "10px",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Clear Cart
                </button>
                <Link to="/payment">
                    <button
                        onClick={displayTotal}
                        disabled={isCartEmpty}
                        style={{
                            padding: "10px",
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Payment
                    </button>
                </Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {liquors.map((liquor) => (
                    <div key={liquor.id} style={liquorStyle}>
                        <img src={liquor.image} alt={liquor.name} style={imageStyle} />
                        <h3>{liquor.name}</h3>
                        <p>{liquor.volume}</p>
                        <p>Price: {liquor.price}</p>
                        <br></br>
                        {liquor.products && (
                            <Tabs
                                list={liquor.products.map((product) => product.name)}
                                activeTab={activeTab}
                                onTabSwitch={setActiveTab}
                            />
                        )}
                        <button
                            style={{
                                padding: "10px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={() => addToCartHandler(liquor)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

