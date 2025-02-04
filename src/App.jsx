import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayText, setDisplayText] = useState("");  // Initialize displayText as empty
  const textToType = "Welcome to WhatsApp Connect! Chat instantly.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + textToType[i]);
      i++;
      if (i === textToType.length) clearInterval(interval); // Stop after typing all characters
    }, 100); // Adjust typing speed here

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim spaces from the phone number
    const trimmedPhoneNumber = phoneNumber.trim();
    
    if (trimmedPhoneNumber) {
      // Open WhatsApp link if phone number is valid (after trimming)
      window.open(`https://wa.me/${trimmedPhoneNumber}`, "_blank");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="typewriter">{textToType}</h1> {/* This is the text that will be typed */}
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
      </div>
    </div>
  );
}

export default App;
