import React from "react";
import Base from "./components/base";
import Blog from "./components/blog";
import Cars from "./components/cars";
import Footer from "./components/footer";
import GetStarted from "./components/getStarted";
import Hero from "./components/hero";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="box-border p-0 m-0">
      <NavBar />
      <Hero />
      <Cars />
      <GetStarted />
      <Blog />
      <Base />
      <Footer />
    </div>
  );
}

export default App;
