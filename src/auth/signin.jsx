import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./auth.css";
export default withRouter(function Signin({ history }) {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const userCredentials = useSelector((state) => state.userCredentails);
  const getUserCredentails = userCredentials.userCredentials;
  console.log(getUserCredentails);
  const handleUserDetails = (value, attr) => {
    setuserDetails({
      ...userDetails,
      [attr]: value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmitButton = () => {
    if (
      getUserCredentails.email === userDetails.email &&
      getUserCredentails.password === userDetails.password
    ) {
      dispatch({
        type: "login_checked",
        data: true,
      });
      history.push("/profile");
    } else {
      alert("Invalid credentials.");
      history.push("/signin");
    }
  };
  return (
    <div className="sign-up-div">
      <div className="sign-up-page-cover">
        <div className="sign-up-header">Sign in</div>

        <input
          className="sign-up-input-form"
          placeholder="Enter Email"
          onChange={(evt) => handleUserDetails(evt.target.value, "email")}
        />

        <input
          className="sign-up-input-form"
          placeholder="Enter Password"
          onChange={(evt) => handleUserDetails(evt.target.value, "password")}
          type="password"
        />
        <div className="if-login">
          Not registered?<Link to="/signup">Signup</Link>
        </div>
        <button className="signup-subit-button" onClick={handleSubmitButton}>
          Submit
        </button>
      </div>
    </div>
  );
});
