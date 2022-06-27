import Header from "./components/Header/Header.js"
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import React,{useEffect} from "react";
import Webfont from "webfontloader"
import Footer from "./components/Footer/Footer.js"
import Home from "./components/Home/Home.js"
import Product from "./components/Product/Product.js"
import Contact from "./components/Contact/Contact.js"
import About from "./components/About/About.js"


function App() {


  useEffect(()=>{
    Webfont.load({
       google:{
        families:["Quantico","Yellowtail","Roboto","Droid Sans","Chilanka"]
       }
    })
  },[]);


  return (
    <Router>
      <Header/>
      <Home/>
      {/* <Route exact path="/" element={<Home/>} /> */}
      {/* <Route exact path="/product" component={Product}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/> */}

      <Footer/>
    </Router>
  );
}

export default App;
