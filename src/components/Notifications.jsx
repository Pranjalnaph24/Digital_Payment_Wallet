import { Link } from "react-router-dom";
import {
  FaWallet, FaMoneyBillWave, FaQrcode, 
  FaCreditCard, FaFileInvoice, FaChartPie, 
  FaBell, FaUserShield 
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>

      <div className="dashboard-links">
        <Link to="/wallet" className="dashboard-item">
          <FaWallet className="icon" />
          <p>My Wallet</p>
        </Link>

        <Link to="/wallet#send-money" className="dashboard-item">
          <FaMoneyBillWave className="icon" />
          <p>Send Money</p>
        </Link>

        <Link to="/wallet#merchant-payment" className="dashboard-item">
          <FaCreditCard className="icon" />
          <p>Merchant Payment</p>
        </Link>

        <Link to="/wallet#qr-payment" className="dashboard-item">
          <FaQrcode className="icon" />
          <p>QR Payments</p>
        </Link>

        <Link to="/wallet#bill-payment" className="dashboard-item">
          <FaFileInvoice className="icon" />
          <p>Bill Payments</p>
        </Link>

        <Link to="/transactions" className="dashboard-item">
          <FaChartPie className="icon" />
          <p>Transaction History</p>
        </Link>

        <Link to="/notifications" className="dashboard-item">
          <FaBell className="icon" />
          <p>Notifications</p>
        </Link>

        <Link to="/admin-panel" className="dashboard-item">
          <FaUserShield className="icon" />
          <p>Admin Panel</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
