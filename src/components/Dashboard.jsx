import { Link } from "react-router-dom";
import { 
  FaWallet, FaMoneyBillWave, FaQrcode, 
  FaCreditCard, FaFileInvoice, FaChartPie, 
  FaCamera, FaBell, FaUserShield 
} from "react-icons/fa";

function Dashboard() {
  const styles = {
    dashboardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "30px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    },
    dashboardTitle: {
      fontSize: "28px",       // Slightly larger for better emphasis
      fontWeight: "bold",     // Makes it stand out
      marginBottom: "20px",   
      color: "#333",          // Darker color for better contrast
      textTransform: "uppercase", // Gives it a professional look
      letterSpacing: "1px",   // Improves readability
      textAlign: "center",    // Ensures alignment in all screen sizes
    },
    
    dashboardLinks: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "15px",
      maxWidth: "600px",
      marginTop: "20px",
    },
    dashboardItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      color: "#333",
      fontSize: "16px",
    },
    
    dashboardItemHover: {
      transform: "translateY(-8px) scale(1.05)",  // Slight scale-up for emphasis
      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.25)",  // More prominent depth effect
      transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
      backgroundColor: "#f8f9fa",  // Light highlight effect
    },    
    icon: {
      fontSize: "30px",
      marginBottom: "5px",
      color: "#007bff",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.dashboardTitle}>Welcome to Dashboard</h2>

      <div style={styles.dashboardLinks}>
        <Link to="/wallet" style={styles.dashboardItem}>
          <FaWallet style={styles.icon} />
          <p>My Wallet</p>
        </Link>

        <Link to="/wallet/send-money" style={styles.dashboardItem}>
          <FaMoneyBillWave style={styles.icon} />
          <p>Send Money</p>
        </Link>

        <Link to="/wallet/pay-merchant" style={styles.dashboardItem}>
          <FaCreditCard style={styles.icon} />
          <p>Merchant Payment</p>
        </Link>

        <Link to="/wallet/qr-payment" style={styles.dashboardItem}>
          <FaQrcode style={styles.icon} />
          <p>QR Payments</p>
        </Link>

        <Link to="/wallet/bill-payment" style={styles.dashboardItem}>
          <FaFileInvoice style={styles.icon} />
          <p>Bill Payments</p>
        </Link>

        <Link to="/transactions" style={styles.dashboardItem}>
          <FaChartPie style={styles.icon} />
          <p>Transaction History</p>
        </Link>

        <Link to="/Scanqr" style={styles.dashboardItem}>
          <FaCamera style={styles.icon} />
          <p>Scan QR Code</p>
        </Link>

        <Link to="/Notifications" style={styles.dashboardItem}>
          <FaBell style={styles.icon} />
          <p>Notifications</p>
        </Link>

        <Link to="/admin-panel" style={styles.dashboardItem}>
          <FaUserShield style={styles.icon} />
          <p>Admin Panel</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
