import { useState } from "react";

function SendMoney({ balance, setBalance }) {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSendMoney = () => {
    if (!recipient || !amount) {
      alert("Please enter recipient ID and amount.");
      return;
    }
    setBalance(balance - parseInt(amount));
    alert(`₹${amount} sent to ${recipient}`);
    setAmount("");
    setRecipient("");
  };

  return (
    <div style={styles.container}>
      <h3>Send Money</h3>
      <input
        type="text"
        placeholder="Recipient ID"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSendMoney} style={styles.button}>Transfer</button>
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
  
export default SendMoney;
