import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
    return ( 
    <>
    <div className="w-screen overflow-x-hidden m-0 p-0">
        <div className="contactimg ">   
        <div className="relative top-52 ml-96">
         <h1 className="cont2 text-white text-8xl ml-32">CONTACT US</h1>
         </div>
         <div className="mt-52 ml-56 flex gap-1">
         <IoHomeSharp className="text-white relative left-96 text-lg mt-1 ml-2" /><h1 style={{}} className=" text-white font-semibold ml-96 text-lg " >Home ></h1>
         <h1 className=" text-white text-lg" style={{color:"yellow"}}>Contact</h1> 
         </div>
         </div> 
        
         <div className="bg-neutral-900 h-screen">
            <div className="flex gap-52 text-4xl font-bold relative top-12 ml-20">
                <div>
                <h1 className="text-white">CONTACT INFO</h1>
                <span class="absolute w-64 h-1 mt-2" style={{backgroundColor:"yellow"}}></span>
                </div>
                <div>
                <h1 className="text-white ml-1">GET IN TOUCH</h1>
                <span class="absolute  h-1 ml-2 mt-2" style={{backgroundColor:"yellow",width:"245px"}}></span>
                </div>
            </div>
            <div className="flex">
            <div className="mt-20 ml-20">
                  <h1 className="text-2xl text-white font-semibold">Location</h1>
                  <div className="flex mt-8 relative right-1 ">
                  <FaLocationDot className=" mt-1 text-4xl " style={{color:"yellow"}}/>
                  <h1 className="text-white ml-6">House no‑18, ram Colony, Sector 40,<br/> 
                  Gurugram, Haryana 122001, India</h1></div>
                  <h1 className="text-2xl text-white font-semibold mt-7" >Subscriptions</h1>
                  <div className="flex mt-9">
                  <FaPhoneVolume className="mt-2 text-4xl " style={{color:"yellow"}}/>
                  <h1 className="text-white ml-5 ">+1(603)535-4592<br/>+1(603)535-4556 </h1>
                  </div>
                  <h1 className="text-2xl text-white font-semibold mt-7">E-mail</h1>
                  <div className="flex mt-9">
            <MdEmail className="mt-1 text-4xl " style={{color:"yellow"}}/>
        <h1 className="text-white ml-5 ">Contact@xgym.com <br/>www.xgym.com </h1></div>
                </div>
                <div className="form">
                    <div className="mt-20 ml-40">
                    <input type="text" placeholder=" Enter your name " className="py-4 w-80 pl-5" />
                    <input type="text" placeholder=" Enter your email " className="py-4 w-80 ml-7 pl-5" />
                    </div>
                    <div>
                    <input type="text" placeholder=" Subject " className="py-4 ml-40 pl-5 mt-7" style={{width:"668px"}}/>
                    </div>
                    <div>
                    <input type="text" placeholder=" Message " className="py-4 ml-40 pl-5 mt-7 h-40 pb-32" style={{width:"668px"}}/>
                    </div>
                    <div className="mt-6 ml-40"><button style={{fontFamily:'Bebas Neue', backgroundColor:"yellow", borderColor:"yellow"}} className="border px-5 py-2 text-2xl">SEND MESSAGE</button></div>
                </div>
                </div>
        
         </div> 
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14048.54679423468!2d77.04905563518797!3d28.32446455214481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d247d9a18f3d7%3A0x90a43e02a09a81b0!2sGhamroj%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1758716746795!5m2!1sen!2sin" width="1350" height="600"  style={{ border: "0" }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
         </div>        
    
    </>
    
    );
}

export default Contact;