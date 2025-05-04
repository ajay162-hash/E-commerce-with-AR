import React, { useState } from "react";
import "./WishList.css";
import ARViewer from "./ARViewer";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const [openAR, setOpenAR] = useState(false);

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <>
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div className="wishlist-item" key={item.id}>
                <img
                  src={`/assets/thumbnails/${item.thumbnail}`}
                  alt={item.name}
                  className="wishlist-thumbnail"
                />
                <div className="wishlist-details">
                  <h3>{item.name}</h3>
                  <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <button className="open-ar-btn" onClick={() => setOpenAR(true)}>
            Open All in AR
          </button>
        </>
      )}

      {openAR && <ARViewer wishlist={wishlist} onClose={() => setOpenAR(false)} />}
    </div>
  );
};

export default Wishlist;
