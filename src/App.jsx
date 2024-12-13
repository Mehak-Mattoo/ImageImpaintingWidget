import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader"; // Assuming you have an ImageUploader component
import CanvasEditor from "./components/CanvasEditor"; // Assuming CanvasEditor is in the components folder

const App = () => {
  const [image, setImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null); // Store the generated mask image here

  const handleSaveMask = (maskImage) => {
    setMaskImage(maskImage);
    // Trigger the download
    const link = document.createElement("a");
    link.href = maskImage;
    link.download = "mask.png"; // Download the image as a PNG file
    link.click();
  };

  return (
    <div>
      <h1>Image Inpainting Widget</h1>
      <ImageUploader onImageUpload={setImage} /> {/* Upload the image */}
      {image && (
        <CanvasEditor
          image={image} // Provide the image URL
          onSaveMask={handleSaveMask} // Pass the handleSaveMask function to the canvas editor
        />
      )}
      {maskImage && (
        <div>
          <h3>Generated Mask</h3>
          <img
            src={maskImage}
            alt="Generated Mask"
            style={{ width: "800px", height: "600px" }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
