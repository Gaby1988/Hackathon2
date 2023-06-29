import React, { useState } from "react";

const Drop = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedImage = event.dataTransfer.files[0];
    setImage(URL.createObjectURL(droppedImage));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="dragAndDrop"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {image ? (
        <img src={image} alt="Dropped" style={{ width: "100%", height: "100%" }} />
      ) : (
        <p>Glissez et déposez une image ici</p>
      )}
    </div>
  );
};

export default Drop;


