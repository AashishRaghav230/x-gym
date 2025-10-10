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
       <div className=" bg-neutral-900 md:h-32 h-[400px] " style={{backgroundImage:`url(${free})`, backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="md:flex gap-2 md:text-6xl text-5xl font-extrabold md:ml-32 ml-36 relative top-5">
            <h1 className="text-white">FREE</h1>
            <h1 className="text-black md:w-[244px] w-[200px] mt-3 md:mt-0 relative right-12 md:right-0" style={{backgroundColor:"yellow"}}>FITNESS</h1>
            <h1 className="text-white mt-2 md:mt-0">TIPS</h1>
        </div>
        <div className="md:flex">
            <h1 className="text-xl md:ml-32 ml-10 text-white relative md:top-5 top-10">Get a weekly dose of fitness directly <span className="md:ml-0 ml-20">into your mailbox.</span></h1>
            <input type="text" placeholder=" Enter your email " className="md:ml-40 ml-36 h-10  relative md:bottom-2 md:w-96 w-56 px-5 mt-20 md:mt-0" />
            <button className=" text-black font-semibold  px-5 py-2 relative  md:bottom-2 bottom-10 ml-4 md:ml-0" style={{backgroundColor:"yellow", borderColor:"yellow"}}>SUBSCRIBE</button>
        </div>
       </div>
       <div className="bg-black md:h-[385px] h-[1420px] ">
        <div className="md:flex relative top-20">
       <div className="md:ml-20">
            <h1 className=" text-4xl font-semibold md:mt-5 md:ml-0 ml-28 text-white"><span className="px-4 py-2 text-black" style={{backgroundColor:"yellow"}}>X</span> G Y M</h1>
             <h1 className="text-white mt-16 md:ml-0 ml-8">Push through the pain, rise with the fire within. <br/>      
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
        <div className="md:ml-16 mt-8 ">
            <h1 className="text-xl  italic font-semibold  md:ml-1 ml-32 md:mt-0 mt-16" style={{color:"yellow"}}>CONTACT US</h1>
            <span class="absolute w-16 h-0.5 bg-white  md:ml-1 ml-32"></span>
            <div className="flex mt-16 md:ml-0 ml-9">
        <FaLocationDot className="mt-1 text-2xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5">House no‑18, ram Colony, Sector 40,<br/> 
            Gurugram, Haryana 122001, India</h1>
            </div>
            <span class="absolute  mt-5 h-0.5  md:ml-1 ml-7 " style={{backgroundColor:"yellow", width:"330px"}}></span>
            <div className="flex mt-9 md:ml-0 ml-9">
            <FaPhoneVolume className="mt-1 text-xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5 ">+1(603)535-4592<br/>+1(603)535-4556 </h1>
            </div>
            <span class="absolute mt-4 h-0.5 md:ml-1 ml-7 " style={{backgroundColor:"yellow", width:"330px"}}></span>
            <div className="flex mt-9 md:ml-0 ml-9">
            <MdEmail className="mt-1 text-2xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5 ">Contact@xgym.com <br/>www.xgym.com </h1>
            </div>
            <span class="absolute  mt-4 h-0.5 md:ml-1 ml-7" style={{backgroundColor:"yellow", width:"330px"}}></span>
        </div>
        <div className="md:ml-32 ml-36">
            <h1 className="text-xl md:mt-10 mt-16 italic font-semibold " style={{color:"yellow"}}>SITEMAP</h1>
            <span class="absolute w-10 h-0.5 bg-white "></span>
            <div className="text-white  text-lg mt-16">
            <ul className="">
            <li className="mt-1">Home</li>
            <li className="mt-1">About Us</li>
            <li className="mt-1">Classes</li>
            <li className="mt-1">Trainers</li>
            <li className="mt-1">Contact</li>
        </ul>
       </div>
        </div>
        
        <div className="md:ml-40 ml-36 ">
            <h1 className="text-xl  italic font-semibold md:mt-10 mt-16" style={{color:"yellow"}}>FOLLOW US</h1>
            <span class="absolute w-16 h-0.5 bg-white"></span>
            <div className="mt-16 ml-3">
        <button className="border p-2 rounded-lg ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaFacebook className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaInstagram className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaTwitter className="text-black text-3xl" /></button><br/>    
        <button className="border p-2 rounded-lg mt-3  ml-1" style={{backgroundColor:"yellow",borderColor:"yellow" }}><FaLinkedin  className="text-black text-3xl" /></button>
       </div>
        </div>   
        </div>
       </div>
       </div>
       <span class="absolute mt-36  md:ml-24 bg-white opacity-15  " style={{ width:"1160px", height:"1px"}}></span>
       <div className="bg-black text-white text-center h-60 ">
        <h1 className="relative top-44">X Gym &copy; 2025 Paradise Fitness & Health Pvt. Ltd. All Rights Reserved.</h1>
       </div>
        </>
     );
}

export default Footer;   
