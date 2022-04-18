import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    event.target.email.value = "";
    event.target.password.value = "";
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className="form">
      <h2 className="text-center fs-1 mt-5 mb-3">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className="mt-5 fs-5">
        If you are a new user, signup here
        <Link to="/signup">
          <Button variant="info" className="text-white ms-2">
            Sign up
          </Button>
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
