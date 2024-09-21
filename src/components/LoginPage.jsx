// src/components/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ userId: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.userId === "admin" && credentials.password === "password") {
      navigate("/menu");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={credentials.userId}
        onChange={(e) => setCredentials({ ...credentials, userId: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
