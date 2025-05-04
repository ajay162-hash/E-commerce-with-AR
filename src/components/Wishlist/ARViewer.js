import React from 'react';

import './ARViewer.css';


const ARViewer = ({ selectedModels, onClose }) => {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  return (
    <div className="ar-container">
      <div className="ar-header">
        <h2>AR Viewer</h2>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>

      {!isMobile ? (
        <div className="instruction">
          AR is only supported on mobile devices.<br />
          Please open this page on your smartphone or tablet to view the models in AR.
        </div>
      ) : (
        selectedModels && selectedModels.length > 0 ? (
          selectedModels.map((model, index) => (
            <model-viewer
              key={index}
              src={model.url}
              ios-src={model.usdzUrl}
              ar
              ar-modes="scene-viewer quick-look webxr"
              autoplay
              camera-controls
              shadow-intensity="1"
              environment-image="neutral"
              style={{ width: '100%', height: '100vh', marginBottom: '20px' }}
            ></model-viewer>
          ))
        ) : (
          <div className="instruction">No models selected</div>
        )
      )}
    </div>
  );
};

export default ARViewer;
