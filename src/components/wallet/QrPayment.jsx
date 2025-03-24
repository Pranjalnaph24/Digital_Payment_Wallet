import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRPayment() {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    if (text.trim() !== "") {
      setQrValue(text);
    } else {
      alert("Please enter a valid payment ID or amount.");
    }
  };

  return (
    <div style={styles.qrContainer}>
      <h2 style={styles.heading}>Scan & Pay</h2>
      <input
        type="text"
        placeholder="Enter Payment ID or Amount"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleGenerate} style={styles.button}>
        Generate QR Code
      </button>

      {qrValue && (
        <div style={styles.qrCodeContainer}>
          <QRCodeCanvas value={qrValue} size={200} />
        </div>
      )}
    </div>
  );
}

const styles = {
  qrContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "15px",
  },
  input: {
    padding: "12px",
    width: "260px",
    fontSize: "16px",
    border: "2px solid #007bff",
    borderRadius: "8px",
    outline: "none",
    textAlign: "center",
    marginBottom: "10px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  qrCodeContainer: {
    marginTop: "20px",
    padding: "15px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default QRPayment;
