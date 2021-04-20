import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import PageCover from "./pages/pageCover/pageCover";
import { useSelector } from "react-redux";
import Signup from "./auth/signup";
import signin from "./auth/signin";

// console.log(getUserDetails);

function App() {
  const userCredentails = useSelector((state) => state.userCredentails);
  const getUserDetails = userCredentails.userCredentials;
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <PageCover />{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;
