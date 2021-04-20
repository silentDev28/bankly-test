import React from "react";
import { Route, Switch } from "react-router";
import Signin from "../../auth/signin";
import Signup from "../../auth/signup";
import Profile from "../profile/profile";

export default function PageCover() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}
