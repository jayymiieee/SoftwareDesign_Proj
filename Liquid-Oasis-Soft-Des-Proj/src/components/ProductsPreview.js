import React, { useRef } from "react";
import jackImage from "../assets/images/jack.jpg";
import blackLabel from "../assets/images/black.jpg";
import chivas from "../assets/images/chivas.jpg";
import double from "../assets/images/double.jpg";
import cuervo from "../assets/images/cuervo.jpg";
import bacardi from "../assets/images/bacardi.jpg";
import bacardi2 from "../assets/images/bacardi2.jpg";
import redLabel from "../assets/images/red label.jpg";
import tanqueray from "../assets/images/tanqueray.jpg";
import ballan from "../assets/images/ballan.jpg";
import baileys from "../assets/images/baileys.jpg";
import jim from "../assets/images/jim.jpg";
import absolut from "../assets/images/absolut.jpg";
import rose from "../assets/images/rose.jpg";
import coke from "../assets/images/jack coke.jpg";



const containerStyle = {
  background: "black",
  color: "white",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Adjusted alignment
};

const scrollContainerStyle = {
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "hidden",
};

const liquorStyle = {
  margin: "20px",
  textAlign: "center",
  color: "white",
};

const imageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
  margin: "0 auto",
};

const ProductsPreview = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 200; // Adjust the scroll amount as needed
    const container = scrollContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const liquors = [
     {
    id: 1,
    name: "𝐉𝐚𝐜𝐤 𝐃𝐚𝐧𝐢𝐞𝐥'𝐬 𝐎𝐥𝐝 𝐍𝐨.𝟕",
    price: "1 Liter - ₱1,700.00",
    image: jackImage,
  },
  {
      id: 2,
      name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐁𝐥𝐚𝐜𝐤 𝐋𝐚𝐛𝐞𝐥",
      price: "1 Liter - ₱1,300.00",
      image: blackLabel,
    },
    {
      id: 3,
      name: "𝐂𝐡𝐢𝐯𝐚𝐬 𝐑𝐞𝐠𝐚𝐥 𝟏𝟐𝐲𝐨",
      price: "1 Liter - ₱1,350.00",
      image: chivas,
    },
    {
      id: 4,
      name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐃𝐨𝐮𝐛𝐥𝐞 𝐁𝐥𝐚𝐜𝐤",
      price: "1 Liter - ₱1,950.00",
      image: double,
    },
    {
      id: 5,
      name: "𝐉𝐨𝐬𝐞 𝐂𝐮𝐞𝐫𝐯𝐨 𝐆𝐨𝐥𝐝 ",
      price: "1 Liter - ₱1,350.00",
      image: cuervo,
    },
    {
      id: 6,
      name: "𝐁𝐚𝐜𝐚r𝐝𝐢 𝐆𝐨𝐥𝐝 ",
      price: "750ml - ₱750.00",
      image: bacardi,
    },
    {
      id: 7,
      name: "𝐁𝐚𝐜𝐚𝐫𝐝𝐢 𝐒𝐮𝐩𝐞𝐫𝐢𝐨𝐫 ",
      price: "1 Liter - ₱750.00",
      image: bacardi2,
    },
    {
      id: 8,
      name: "𝐉𝐨𝐡𝐧𝐧𝐢𝐞 𝐖𝐚𝐥𝐤𝐞𝐫 𝐑𝐞𝐝 𝐋𝐚𝐛𝐞𝐥 ",
      price: "1 Liter - ₱900.00",
      image: redLabel,
    },
    {
      id: 9,
      name: "𝐓𝐚𝐧𝐪𝐮𝐞𝐫𝐚𝐲 𝐆𝐢𝐧",
      price: "750ml - ₱1,050.00",
      image: tanqueray,
    },
    {
      id: 10,
      name: "𝐁𝐚𝐢𝐥𝐞𝐲'𝐬 𝐈𝐫𝐢𝐬𝐡 𝐂𝐫𝐞𝐚𝐦",
      price: "700ml - ₱850.00",
      image: baileys,
    },
    {
      id: 11,
      name: "𝐉𝐢𝐦 𝐁𝐞𝐚𝐦 𝐖𝐡𝐢𝐭𝐞",
      price: "1 Liter - ₱900.00",
      image: jim,
    },
    {
      id: 12,
      name: "𝐁𝐚𝐥𝐥𝐚𝐧𝐭𝐢𝐧𝐞'𝐬 𝐅𝐢𝐧𝐞𝐬𝐭",
      price: "1 Liter - ₱750.00",
      image: ballan,
    },
    {
      id: 13,
      name: "𝐓𝐞𝐪𝐮𝐢𝐥𝐚 𝐑𝐨𝐬𝐞 𝐋𝐢𝐪𝐮𝐞𝐮𝐫",
      price: "750ml - ₱1,050.00",
      image: rose,
    },
    {
      id: 14,
      name: "𝐀𝐛𝐬𝐨𝐥𝐮𝐭 𝐂𝐢𝐭𝐫𝐨𝐧",
      price: "1 Liter - ₱750.00",
      image: absolut,
    },
    {
      id: 15,
      name: "𝐉𝐚𝐜𝐤 & 𝐂𝐨𝐤𝐞",
      price: "320ml (4 Pack) - ₱385.00",
      image: coke,
    },
  ];

  return (
    <div>
      <div style={containerStyle}>
        <button onClick={() => handleScroll("left")}>{"<"}</button>
        <div ref={scrollContainerRef} style={scrollContainerStyle}>
          {liquors.map((liquor) => (
            <div key={liquor.id} style={liquorStyle}>
              <img src={liquor.image} alt={liquor.name} style={imageStyle} />
              <h3>{liquor.name}</h3>
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll("right")}>{">"}</button>
      </div>
    </div>
  );
};

export default ProductsPreview;