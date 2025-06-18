import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setToken("");
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN5Odz2EokBzEiDgtmPuWn_tz4toWipIQ`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      console.log("im here", res.data.idToken);

      if (res.data.idToken) {
        localStorage.setItem("token", res.data.idToken);
        setToken(res.data.idToken);
        console.log("User Email:", res.data.email);
        console.log("Token:", res.data.idToken);
        navigate('/home');
      } else {
        setError("Login failed.");
      }
    } catch (err) {
      setError(err.response?.data?.error?.message || "Login error");
    }
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={submitHandler}>
        email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        password{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {token && (
          <p style={{ color: "green" }}>
            ✅ Logged in successfully. Token stored in localStorage.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
