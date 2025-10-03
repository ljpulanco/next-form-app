"use client";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";


interface Props {
  onSave: (signature: string) => void;
}

const SignaturePad: React.FC<Props> = ({ onSave }) => {
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const clear = () => {
    sigCanvas.current?.clear();
    onSave(""); // clear signature in parent
  };

  const save = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const dataURL = sigCanvas.current.toDataURL("image/png");
      onSave(dataURL); // send signature back to parent form
    } else {
      onSave("");
    }
  };

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: "sigCanvas",
        }}
      />
      <button type="button" onClick={clear}>
        Clear
      </button>
      <button type="button" onClick={save}>
        Save
      </button>
    </div>
  );
};

export default SignaturePad;
