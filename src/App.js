import React from "react";
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Aboute from "./pages/aboute";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/home";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/aboute" exact element={<Aboute />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
