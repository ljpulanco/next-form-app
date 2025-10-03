"use client"; // Client Component

import React, { useState } from "react";
import "/styles/MedicalForm.css"; // Adjust path as needed
import db from "../lib/db"; // Ensure this path is correct
import SignaturePad from "../app/components/SignaturePad"; // Import the SignaturePad

const MedicalForm = () => {
  const [signature, setSignature] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Convert age to number and validate
    data.age = parseInt(data.age as string, 10);
    if (isNaN(data.age)) {
      console.error("Invalid age");
      return;
    }

    // Add signature to form data
    if (!signature) {
      alert("Please add your signature before submitting.");
      return;
    }
    data.signature = signature; // Store signature as a data URL

    // Log the form data for debugging
    console.log("Form Data:", data);

    try {
      // Save to IndexedDB
      const id = await db.users.add(data);
      console.log(`Data saved with ID: ${id}`);

      // Fetch and log all users
      const users = await db.users.toArray();
      console.log("All Users:", users);
    } catch (error) {
      console.error("Error saving data:", error);
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
          <label htmlFor="Address">Address</label>
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
