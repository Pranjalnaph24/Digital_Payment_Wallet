import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AuthForm.css"; // Import CSS

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    console.log(`${type} with`, { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{type === "login" ? "Login" : "Sign Up"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {type === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button>{type === "login" ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {type === "login" ? (
            <Link to="/signup">Don't have an account? Sign up</Link>
          ) : (
            <Link to="/login">Already have an account? Login</Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
