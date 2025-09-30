import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
    return ( 
        <>
   <header className="absolute  w-full z-20 flex ">
    <div className=" flex pb-7">
        <div className="flex ml-10 ">
            <h1 className="text-4xl font-semibold mt-5 p-3 pl-4 pr-4" style={{backgroundColor:"yellow"}}>X</h1>
            <h1 className="ml-2 text-4xl font-semibold mt-8 text-white">G Y M</h1>
        </div>
             
    <div className="ml-64 ">
        <ul className="flex ml-40 font-semibold mt-10 text-xl ">
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className=" ml-12   "><NavLink to="/aboutus" className="nav-link">About Us</NavLink></li>
            <li className=" ml-12  "><NavLink to="/classes" className="nav-link">Classes</NavLink></li>
            <li className="trainer ml-12  "><NavLink to="/trainers" className="nav-link">Trainers</NavLink></li>
            <li className="contact ml-12  "><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
    </div> 
    </div>
    </header>
 </>
     );
}

export default Header;