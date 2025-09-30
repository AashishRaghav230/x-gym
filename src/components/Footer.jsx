import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import free from "./images/free.jpeg"


function Footer() {
    return ( 
        <>
        <div>
       <div className=" bg-neutral-900 h-32 " style={{backgroundImage:`url(${free})`, backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="flex gap-2 text-6xl font-extrabold ml-32 relative top-5">
            <h1 className="text-white">FREE</h1>
            <h1 className="text-black" style={{backgroundColor:"yellow"}}>FITNESS</h1>
            <h1 className="text-white">TIPS</h1>
        </div>
        <div className="flex">
            <h1 className="text-xl ml-32 text-white relative top-5">Get a weekly dose of fitness directly into your mailbox.</h1>
            <input type="text" placeholder=" Enter your email " className="ml-40 h-10  relative bottom-2 w-96 px-5" />
            <button className=" text-black font-semibold  px-5 relative  bottom-2" style={{backgroundColor:"yellow", borderColor:"yellow"}}>SUBSCRIBE</button>
        </div>
       </div>
       <div className="bg-black h-96">
        <div className="flex gap-40 relative top-16">
       <div className="flex ml-20">
            <h1 className=" first text-4xl font-semibold mt-5 p-3 pl-4 pr-4 text-black" style={{backgroundColor:"yellow"}}>X</h1>
            <h1 className="ml-2 text-4xl font-semibold mt-8 text-white">G Y M</h1>
        </div>
        <div>
            <h1 className="text-xl mt-10 italic font-semibold ml-20" style={{color:"yellow"}}>CONTACT US</h1>
            <span class="absolute w-16 h-0.5 bg-white ml-20"></span>
        </div>
        <div>
            <h1 className="text-xl mt-10 italic font-semibold ml-32" style={{color:"yellow"}}>SITEMAP</h1>
            <span class="absolute w-10 h-0.5 bg-white ml-32"></span>
        </div>
        <div>
            <h1 className="text-xl mt-10 italic font-semibold mr-10" style={{color:"yellow"}}>FOLLOW US</h1>
            <span class="absolute w-16 h-0.5 bg-white"></span>
        </div>   
       </div>
       <div className="flex gap-16 mt-28">
        <div>
            <h1 className="text-white ml-20">Push through the pain, rise with the fire within. <br/>      
                Train like a beast, grow stronger from within.   <br/>     
                Every drop of sweat is a step toward the goal.  <br/>      
                Your mind is the muscle that drives your soul. <br/>       
                No excuses, no breaks, only progress remains. <br/>        
                Discipline fuels growth, not temporary gains. <br/>        
                Wake up with hunger, sleep with no regret.   <br/>         
                The battle is daily, the end is not set.   <br/>           
                Break the limits, rewrite your fate each day.  <br/>       
                You are the storm—train hard, don't fade away.       
                 </h1>
        </div>
        <div>
            <div className="flex">
        <FaLocationDot className="mt-1 text-2xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5">House no‑18, ram Colony, Sector 40,<br/> 
            Gurugram, Haryana 122001, India</h1>
            </div>
            <span class="absolute  mt-5 h-0.5 ml-1 " style={{backgroundColor:"yellow", width:"330px"}}></span>
            <div className="flex mt-9">
            <FaPhoneVolume className="mt-1 text-xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5 ">+1(603)535-4592<br/>+1(603)535-4556 </h1>
            </div>
            <span class="absolute mt-4 h-0.5 ml-1 " style={{backgroundColor:"yellow", width:"330px"}}></span>
            <div className="flex mt-9">
            <MdEmail className="mt-1 text-2xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5 ">Contact@xgym.com <br/>www.xgym.com </h1>
            </div>
            <span class="absolute  mt-4 h-0.5 ml-1" style={{backgroundColor:"yellow", width:"330px"}}></span>
        </div>
        <div className="text-white ml-12 text-lg">
        <ul className="ml-1">
            <li className="mt-1">Home</li>
            <li className="mt-1">About Us</li>
            <li className="mt-1">Classes</li>
            <li className="mt-1">Trainers</li>
            <li className="mt-1">Contact</li>
        </ul>
       </div>
       <div className="ml-28">
        <button className="border p-2 rounded-lg ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaFacebook className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaInstagram className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaTwitter className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaLinkedin  className="text-black text-3xl" /></button>
       </div>
       </div>
       </div>
       </div>
       <span class="absolute mt-36  ml-24 bg-white opacity-15  " style={{ width:"1160px", height:"1px"}}></span>
       <div className="bg-black text-white text-center h-60 ">
        <h1 className="relative top-44">X Gym &copy; 2025 Paradise Fitness & Health Pvt. Ltd. All Rights Reserved.</h1>
       </div>
        </>
     );
}

export default Footer;   
