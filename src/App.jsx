import { useState } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const textToType = "Welcome to WhatsApp Connect! Chat instantly.";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim spaces from the phone number
    const trimmedPhoneNumber = phoneNumber.trim();

    // Basic phone number validation (e.g., must contain only digits and be of a reasonable length)
    const phoneNumberPattern = /^[0-9]{10,15}$/;
    if (phoneNumberPattern.test(trimmedPhoneNumber)) {
      // Reset error message if valid
      setErrorMessage("");
      
      // Directly open WhatsApp with the phone number (even if it's not saved in contacts)
      const whatsappLink = `https://wa.me/${trimmedPhoneNumber}`;

      // Open the WhatsApp chat directly
      window.open(whatsappLink);
    } else {
      // Set error message if phone number is invalid
      setErrorMessage("Please enter a valid phone number (10-15 digits).");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="typewriter">{textToType}</h1>
        <form onSubmit={handleSubmit} className="whatsapp-form">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
          <button type="submit">Chat on WhatsApp</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default App;
