import { useState } from "react";
import "../styles/AdminPanel.css";

function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", status: "Blocked" },
  ]);
  
  const [transactions, setTransactions] = useState([
    { id: 101, user: "John Doe", amount: 5000, type: "Credit", status: "Success" },
    { id: 102, user: "Alice Smith", amount: 75000, type: "Debit", status: "Flagged" },
  ]);

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" } : user
    ));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>

      {/* User Management Section */}
      <div className="admin-section">
        <h3>Manage Users</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className={user.status.toLowerCase()}>{user.status}</td>
                <td>
                  <button 
                    className={user.status === "Active" ? "block-btn" : "unblock-btn"} 
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction Management Section */}
      <div className="admin-section">
        <h3>Transaction History</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.user}</td>
                <td>₹{txn.amount}</td>
                <td>{txn.type}</td>
                <td className={txn.status.toLowerCase()}>{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
