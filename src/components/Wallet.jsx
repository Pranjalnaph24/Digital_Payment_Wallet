import { useState } from "react";
import "../styles/Wallet.css";

function Wallet() {
  const [balance, setBalance] = useState(5000); // Initial balance

  return (
    <div className="wallet-container">
      <h2>My Wallet</h2>
      <p className="wallet-balance">Balance: ₹{balance}</p>
    </div>
  );
}

export default Wallet;
