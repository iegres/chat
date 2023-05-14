import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  const handleGuestOnClick = async (e) => {
    e.preventDefault();
    const email = "guest@gmail.com";
    const password = "guestpass";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          <button onClick={handleGuestOnClick}>Sign in as a guest</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register"><span style={{color: "#b65151"}}>Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
