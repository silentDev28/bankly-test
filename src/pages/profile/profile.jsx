import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Signup from "../../auth/signup";

import "./profile.css";
export default withRouter(function Profile({ history }) {
  const userCredentails = useSelector((state) => state.userCredentails);
  const getUserDetails = userCredentails.userCredentials;
  // console.log(getUserDetails);
  const isLogedIn = useSelector((state) => state.isLogedIn);
  const loginCheck = isLogedIn.isLogedIn;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: "login_checked",
      data: false,
    });
  };

  useEffect(() => {
    if (loginCheck) {
      history.push("/profile");
    } else {
      history.push("/signin");
    }
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="profile-details">
        <div>User details</div>
        <p className="profile-details-p">
          First Name:{getUserDetails.firstname}
        </p>
        <p className="profile-details-p">Last Name:{getUserDetails.lastname}</p>
        <p className="profile-details-p">Email:{getUserDetails.email}</p>
        <p className="profile-details-p">
          Phone Number:{getUserDetails.phoneNumber}
        </p>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
});
