import { useState } from "react";

function BillPayment({ balance, setBalance }) {
  const [amount, setAmount] = useState("");
  const [billType, setBillType] = useState("");
  const [billNumber, setBillNumber] = useState("");

  const handleBillPayment = () => {
    if (!billType || !billNumber || !amount) {
      alert("Please select bill type, enter bill number and amount.");
      return;
    }
    setBalance(balance - parseInt(amount));
    alert(`₹${amount} paid for ${billType} Bill (Bill No: ${billNumber})`);
    setAmount("");
    setBillType("");
    setBillNumber("");
  };

  return (
    <div style={styles.container}>
      <h3>Pay Bills</h3>
      <select value={billType} onChange={(e) => setBillType(e.target.value)} style={styles.input}>
        <option value="">Select Bill Type</option>
        <option value="Electricity">Electricity</option>
        <option value="Water">Water</option>
        <option value="Internet">Internet</option>
      </select>
      <input
        type="text"
        placeholder="Bill Number"
        value={billNumber}
        onChange={(e) => setBillNumber(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleBillPayment} style={styles.button}>Pay Bill</button>
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
  

export default BillPayment;
