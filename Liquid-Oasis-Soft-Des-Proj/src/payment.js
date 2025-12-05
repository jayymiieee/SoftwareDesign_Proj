import React, { useState, useEffect } from 'react';
import firebase from './firebaseConfig';
import { Link } from "react-router-dom";

const Payment = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0);
    const [paymentInput, setPaymentInput] = useState('');
    const [change, setChange] = useState(0);
    const [isCartEmpty,setIsCartEmpty] = useState(true);
    const [paymentMade, setPaymentMade] = useState(false);
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    useEffect(() => {
        const user = firebase.auth().currentUser;
        const db = firebase.firestore();

        if (user) {
            const cartRef = db.collection('users').doc(user.uid).collection('cart');
            const totalRef = cartRef.doc('total');

            cartRef
                .get()
                .then((querySnapshot) => {
                    const items = querySnapshot.docs.map((doc) => doc.data().nameprice);
                    setCartItems(items);
                })
                .catch((error) => {
                    console.error('Error fetching cart items:', error);
                });

            totalRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const total = parseFloat(doc.data().totalpayment);
                        setTotalPayment(total);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching total payment:', error);
                });
        }
    }, []);

    const clearCart = async () => {
        if (user) {
            const querySnapshot = await db.collection("users").doc(user.uid).collection("cart").get();
            const deletePromises = querySnapshot.docs.map((doc) => doc.ref.delete());
            await Promise.all(deletePromises);
            setIsCartEmpty(true);
        }
    };



    const handlePayment = () => {
        if (paymentMade) {
            alert('Payment has already been made.');
            return;
        }

        const paymentAmount = parseFloat(paymentInput);

        if (paymentAmount < totalPayment) {
            alert("Sorry, it's not enough. Please enter a valid payment amount.");
        } else {
            const remainingPayment = totalPayment - paymentAmount;
            const calculatedChange = remainingPayment >= 0 ? 0 : Math.abs(remainingPayment);
            const actualChange = calculatedChange >= 0 ? calculatedChange : 0;
            setChange(actualChange);
            setPaymentMade(true);

            if (user) {
                const cartRef = db.collection('users').doc(user.uid).collection('cart');
                const deletePromises = cartItems.map((item) => cartRef.doc(item).delete());
                Promise.all(deletePromises).then(async () => {
                    setCartItems([]);
                    const totalRef = cartRef.doc('total');
                    await totalRef.update({ totalpayment: remainingPayment.toFixed(2) });
                });
            }
        }
    };


    const handleGoBack = () => {
        clearCart();
    };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        background: 'black',
        color: 'white',
      };
    
      const rectangularBackground = {
        backgroundColor: '#D9D9D9',
        width: '25%',
        padding: '2em',
        borderRadius: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color:'black',
      };
    
      const paymentText = {
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '1em',
        color:'black',
        fontFamily:"FreeMono, monospace",
      };
    
      const inputStyle = {
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: '1em',
        alignItems: 'center',
        boxShadow: 'inset 2px 1px 3px rgba(0, 0, 0, 0.2)',
        padding: '0.5em 1em',
        marginBottom: '1em',
      };
    
    
      const buttonStyle = {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '5px 10px',
        boxShadow: '3px 5px 5px rgba(0, 0, 0, 0.2)',
        width: '90px',
        marginBottom: '1em',
      };
    
      return (
        <div style={containerStyle}>
            <div style={rectangularBackground}>
                <h2 style={paymentText}>Cart</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Total Payment: ₱{totalPayment.toFixed(2)}</p>
                <input
                    type="number"
                    placeholder="Enter payment amount"
                    value={paymentInput}
                    onChange={(e) => setPaymentInput(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={handlePayment} disabled={paymentMade} style={buttonStyle}>
                    Pay
                </button>
                <p>
                    {change === 0
                        ? "Thanks for buying!"
                        : `Thanks for buying! Your Change is: ₱${change.toFixed(2)}`}
                </p>
                <Link to="/Menu">
                    <button onClick={handleGoBack} style={buttonStyle}>
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Payment;
