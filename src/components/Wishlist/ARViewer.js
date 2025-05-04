import React, { useState, useEffect } from "react";
import "./ARViewer.css";

const ARViewer = ({ wishlist, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
      setIsMobile(true);
    }
  }, []);

  const toggleModelSelection = (model) => {
    const exists = selectedModels.find((m) => m.id === model.id);
    if (exists) {
      setSelectedModels((prev) => prev.filter((m) => m.id !== model.id));
    } else {
      setSelectedModels((prev) => [...prev, model]);
    }
  };

  return (
    <div className="ar-container">
      <div className="ar-header">
        <button onClick={onClose} className="close-btn">
          Close AR
        </button>
        <h2>AR Mode</h2>
      </div>

      {!isMobile ? (
        <p className="instruction">AR view is only available on mobile phones.</p>
      ) : (
        <>
          <model-viewer
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            disable-zoom
            style={{ width: "100%", height: "75vh" }}
          >
            {selectedModels.map((model) => (
              <div key={model.id}>
                <model-viewer
                  key={model.id}
                  src={model.modelSrc}
                  ios-src={model.iOSSrc}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  auto-rotate
                  exposure="1"
                  shadow-intensity="1"
                  environment-image="neutral"
                  style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
              </div>
            ))}
          </model-viewer>

          <p className="instruction">Tap thumbnails to place models in AR</p>
          <div className="ar-thumbnails">
            {wishlist.map((item) => (
              <img
                key={item.id}
                src={`/assets/thumbnails/${item.thumbnail}`}
                alt={item.name}
                className={`ar-thumb ${selectedModels.some((m) => m.id === item.id) ? "selected" : ""}`}
                onClick={() => toggleModelSelection(item)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ARViewer;
