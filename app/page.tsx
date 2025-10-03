"use client";

import React, { useState } from "react";
import "/styles/MedicalForm.css"; 
import db from "../lib/db";   // ✅ fixed for root lib
import SignaturePad from "./components/SignaturePad"; 

// ✅ Strongly typed form data interface
interface MedicalFormData {
  patientName: string;
  age: number;
  serviceDate: string;
  dob: string;
  address?: string;
  signature: string;
}

const MedicalForm = () => {
  const [signature, setSignature] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: MedicalFormData = {
      patientName: formData.get("patientName") as string,
      age: parseInt(formData.get("age") as string, 10),
      serviceDate: formData.get("serviceDate") as string,
      dob: formData.get("dob") as string,
      address: formData.get("address") as string,
      signature: signature,
    };

    if (isNaN(data.age)) {
      alert("Please enter a valid age.");
      return;
    }

    if (!signature) {
      alert("Please add your signature before submitting.");
      return;
    }

    console.log("Form Data:", data);

    try {
      const id = await db.users.add(data);
      console.log(`Data saved with ID: ${id}`);

      const users = await db.users.toArray();
      console.log("All Users:", users);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("There was an error saving your data.");
    }
  };

  return (
    <div className="container">
      <h2>Medical Form</h2>
      <h3>Follow-up Visit</h3>
      <form className="form" onSubmit={handleSubmit}>
        {/* Patient Details */}
        <div className="g-flex">
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input type="text" id="patientName" name="patientName" required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" name="age" required />
          </div>
        </div>

        {/* Date Fields */}
        <div className="g-flex">
          <div className="form-group">
            <label>Date of Service:</label>
            <input type="text" name="serviceDate" required />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="text" name="dob" required />
          </div>
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" />
        </div>

        {/* Signature Field */}
        <div className="form-group">
          <h3>Signature</h3>
          <SignaturePad onSave={setSignature} />
          {signature && (
            <div>
              <h4>Preview:</h4>
              <img src={signature} alt="Signature Preview" width="200" />
            </div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MedicalForm;
