import React from "react";
import googleIcon from "../../images/social/google.png";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let loginError;
  if (error) {
    loginError = (
      <div className="text-danger text-center">
        <p>Error: {error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
        <p className="my-0 mx-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
      </div>
      {loginError}
      <div className="social-button-container">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info my-2 w-50 d-block mx-auto"
        >
          <img src={googleIcon} alt="" />
          <span className="px-2">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
