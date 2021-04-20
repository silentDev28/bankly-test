import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./auth.css";
export default withRouter(function Signup({ history }) {
  const [userDetails, setuserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    rpassword: "",
  });
  const handleUserDetails = (value, attr) => {
    setuserDetails({
      ...userDetails,
      [attr]: value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmitButton = () => {
    if (userDetails.password !== userDetails.rpassword) {
      alert("password yo enter does not match");
      setuserDetails({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        rpassword: "",
      });
    } else {
      alert("Registration successful.");
      dispatch({ type: "user_data", data: userDetails });
      dispatch({
        type: "login_checked",
        data: true,
      });
      history.push("/profile");
      setuserDetails({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        rpassword: "",
      });
    }
  };
  return (
    <div className="sign-up-div">
      <div className="sign-up-page-cover">
        <div className="sign-up-header">Sign up</div>
        <input
          className="sign-up-input-form"
          placeholder="Enter Firstname"
          onChange={(evt) => handleUserDetails(evt.target.value, "firstname")}
        />
        <input
          className="sign-up-input-form"
          placeholder="Enter Lastname"
          onChange={(evt) => handleUserDetails(evt.target.value, "lastname")}
        />
        <input
          className="sign-up-input-form"
          placeholder="Enter Email"
          onChange={(evt) => handleUserDetails(evt.target.value, "email")}
        />
        <input
          className="sign-up-input-form"
          placeholder="Enter Phone number"
          onChange={(evt) => handleUserDetails(evt.target.value, "phoneNumber")}
        />
        <input
          className="sign-up-input-form"
          placeholder="Enter Password"
          onChange={(evt) => handleUserDetails(evt.target.value, "password")}
          type="password"
        />
        <input
          className="sign-up-input-form"
          placeholder="Repeat Password"
          onChange={(evt) => handleUserDetails(evt.target.value, "rpassword")}
          type="password"
        />
        <div className="if-login">
          Already registered?<Link to="/signin">Sign in</Link>
        </div>
        <button className="signup-subit-button" onClick={handleSubmitButton}>
          Submit
        </button>
      </div>
    </div>
  );
});
