"use client"; 
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clearSignature = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
      <div style={{ 
        width: "100%", 
        height: "200px", 
        border: "1px solid #ccc", 
        borderRadius: "5px",
        overflow: "hidden"
      }}>
        <SignatureCanvas 
          ref={sigCanvas} 
          penColor="black"
          canvasProps={{ 
            className: "signature-canvas", 
            style: { width: "100%", height: "100%" }
          }} 
        />
      </div>
      <button type="button" onClick={clearSignature} style={{ marginTop: "10px" }}>Clear</button>     
    </div>
  );
};

export default SignaturePad;
