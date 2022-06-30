import Header from "./components/Header/Header.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Webfont from "webfontloader";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Product from "./components/Product/Product.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Loader from "./components/Loader/Loader.js";

function App() {
  useEffect(() => {
    Webfont.load({
      google: {
        families: [
          "Quantico",
          "Yellowtail",
          "Roboto",
          "Droid Sans",
          "Chilanka",
        ],
      },
    });
  }, []);

  return (
    <Router>
      <Header />

      <Routes>                                                        //Switch is replaced By Routes from React-router-dom --v6
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/loader" element={<Loader />} />
        <Route exact path="/product" element={<Loader/>} />
        <Route exact path="/contact"  element={<Contact/>} />
        <Route exact path="/about"  element={<About/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
