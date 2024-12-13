import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasEditor = ({ image, onSaveMask }) => {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#FFFFFF"); 
  const canvasRef = useRef(null); 

  // Function to handle saving the mask and sending base64 image to parent
  const handleSaveMask = () => {
    const maskImage = canvasRef.current.getDataURL(); 
    onSaveMask(maskImage); 
  };

    const handleClearCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.clear(); // Clear the canvas using the clear method
      }
    };

  return (
    <div>
      <CanvasDraw
        brushColor={brushColor}
        brushRadius={parseInt(brushSize, 10)} // Ensure brushSize is passed as a number
        lazyRadius={1}
        canvasWidth={800}
        canvasHeight={600}
        imgSrc={image} // Image provided by the parent component
        hideGrid={true}
        ref={canvasRef} // Pass the canvasRef to CanvasDraw
      />
      <div>
        <label>
          Brush Size:
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))} // Convert value to a number
          />
        </label>
        <button onClick={handleSaveMask}>Save Mask</button>
        <button onClick={handleClearCanvas}>Clear Canvas</button>{" "}
        {/* Button to clear canvas */}
      </div>
    </div>
  );
};

export default CanvasEditor;
