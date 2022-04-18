import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form">
      <h2 className="text-center fs-1 mt-5 mb-3">Sign up</h2>
      <form onSubmit={handleSignUp}>
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
          <input className="btn btn-primary" type="submit" value="Sign up" />
        </div>
      </form>
      <p className="mt-5 fs-5">
        If you are already a user, login here
        <Link to="/login">
          <Button variant="info" className="text-white ms-2">
            Login
          </Button>
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Signup;
