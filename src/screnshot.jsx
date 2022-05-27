import React, { createRef, useState } from "react";

import { useScreenshot, createFileName } from "use-react-screenshot";
import QRGenerator from "./QRGenerator";

const Screenshot = () => {
  const ref = createRef(null);

  const [URL, setURL] = useState("");
  const [hoverText, setHoverText] = useState("");

  const handleInputChange = (event) => {
    setURL(event.target.value);
  };

  const handleHoverChange = (event) => {
    setHoverText(event.target.value);
  };

  const [, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <div className="inputs">
        Generador de QR
        <input
          type="text"
          placeholder="URL para el codigo"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Texto encima"
          onChange={handleHoverChange}
        />
        <button onClick={downloadScreenshot}>Descargar QR</button>
      </div>
      <button onClick={downloadScreenshot}>Download screenshot</button>
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "60px",
          marginTop: "10px",
        }}
      >
        <QRGenerator URL={URL} hoverText={hoverText} />
      </div>
    </div>
  );
};

export default Screenshot;
