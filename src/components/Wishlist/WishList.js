// src/components/Wishlist/WishList.js
import React, { useState } from "react";
import "./WishList.css";
import ARViewer from "./ARViewer";

const WishList = ({ wishlist, onRemoveItem }) => {
  const [arMode, setArMode] = useState(false);

  const handleOpenAR = () => {
    if (wishlist.length === 0) {
      alert("Add models to view in AR");
      return;
    }
    setArMode(true);
  };

  const handleCloseAR = () => {
    setArMode(false);
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <button onClick={handleOpenAR} className="ar-open-btn">
        Open All Models in AR
      </button>
      {arMode && <ARViewer wishlist={wishlist} onClose={handleCloseAR} />}
      {wishlist.length === 0 ? (
        <p className="empty-msg">Add models to view in AR</p>
      ) : (
        <ul className="wishlist-items">
          {wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <p>{item.name}</p>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishList;
