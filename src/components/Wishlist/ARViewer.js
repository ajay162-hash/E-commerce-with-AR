// src/components/Wishlist/ARViewer.js
import React, { useState } from "react";
import "./ARViewer.css";

const ARViewer = ({ wishlist, onClose }) => {
  const [selectedModel, setSelectedModel] = useState(null);

  const handleSelect = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="ar-container">
      <div className="ar-header">
        <button onClick={onClose} className="close-btn">Close AR</button>
        <h2>AR Mode</h2>
      </div>
      {selectedModel ? (
        <model-viewer
          src={selectedModel.glb}
          ios-src={selectedModel.usdz}
          ar
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "70vh" }}
        />
      ) : (
        <p className="instruction">Select a model below to view in AR</p>
      )}
      <div className="ar-thumbnails">
        {wishlist.map((item, index) => (
          <img
            key={index}
            src={`/assets/thumbnails/${item.thumbnail}`}
            alt={item.name}
            className="ar-thumb"
            onClick={() => handleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ARViewer;
