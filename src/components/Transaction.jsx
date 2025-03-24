import { useState } from "react";
import "../styles/Transaction.css";

function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-03-21", amount: 5000, type: "Credit", status: "Success" },
    { id: 2, date: "2025-03-20", amount: 1500, type: "Debit", status: "Pending" },
    { id: 3, date: "2025-03-19", amount: 10000, type: "Credit", status: "Failed" },
  ]);

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(txn => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.date}</td>
              <td>₹{txn.amount}</td>
              <td>{txn.type}</td>
              <td className={txn.status.toLowerCase()}>{txn.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
