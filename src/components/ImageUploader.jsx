import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const ImageUploader = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      onImageUpload(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return <input type="file" accept="image/*" onChange={handleImageChange} />;
};

export default ImageUploader;
