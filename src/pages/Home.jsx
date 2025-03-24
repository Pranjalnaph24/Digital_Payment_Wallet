import { Link } from "react-router-dom";
import '../styles/Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 id="heading">Welcome to EzPay</h1>
        <p>Your secure digital wallet for easy transactions.</p>
      </header>
      <div className="home-links">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/signup" className="home-button">Signup</Link>
      </div>
    </div>
  );
}

export default Home;