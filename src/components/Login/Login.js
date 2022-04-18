import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorSending] =
    useSendPasswordResetEmail(auth);
  const [sendEmailVerification, sending1, error1] =
    useSendEmailVerification(auth);
  const emailRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    sendEmailVerification();
    event.target.email.value = "";
    event.target.password.value = "";
    if (user) navigate(from, { replace: true });
  };

  let errorElement;
  if (error || errorSending || error1) {
    errorElement = (
      <div className="text-danger text-center">
        <p>
          Error: {error?.message || errorSending?.message || error1?.message}
        </p>
      </div>
    );
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Password Reseting!");
    } else {
      toast("Please enter password");
    }
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
            ref={emailRef}
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
      <p>
        Forgot Password?
        <span className="ms-2 btn btn-danger" onClick={resetPassword}>
          Reset Password
        </span>
      </p>
      {errorElement}
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
