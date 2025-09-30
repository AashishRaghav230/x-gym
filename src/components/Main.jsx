import React from "react";
import { HashRouter as Router , Route , Routes } from "react-router-dom";
import Header from "./Header"; 
import Home from "./Home";
import Aboutus from "./Aboutus";
import Classes from "./Classes";
import Trainers from "./Trainers";
import Contact from "./Contact";
import Footer from "./Footer";




function Main() {
    return (
        <>
       
        <Router>
         <Header/> 
     <Routes>
    
         <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} /> 
     </Routes>
     
     </Router>
    <Footer/>
        </>
      );
}

export default Main;