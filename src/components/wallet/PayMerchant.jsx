import { useState } from "react";

function PayMerchant({ balance, setBalance }) {
  const [amount, setAmount] = useState("");
  const [merchantId, setMerchantId] = useState("");

  const handleMerchantPayment = () => {
    if (!merchantId || !amount) {
      alert("Please enter Merchant ID and amount.");
      return;
    }
    setBalance(balance - parseInt(amount));
    alert(`₹${amount} paid to Merchant ID: ${merchantId}`);
    setAmount("");
    setMerchantId("");
  };

  return (
    <div style={styles.container}>
      <h3>Pay Merchant</h3>
      <input
        type="text"
        placeholder="Merchant ID"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleMerchantPayment} style={styles.button}>Pay</button>
    </div>
  );
}

const styles = {
    container: {
      padding: "30px",
      textAlign: "center",
      backgroundColor: "#f4f4f9",
      borderRadius: "10px",
      boxShadow: "0px 14px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "40px auto",
    },
    input: {
      margin: "10px 0",
      padding: "12px",
      width: "90%",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    button: {
      padding: "12px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };
  

export default PayMerchant;
