import React from "react";
import bodycomp from "./images/bodycomp.jpg"
import sevenday from "./images/sevenday.jpg"
import parking from "./images/parking.jpg"
import clean from "./images/clean.jpg"
import { MdArrowOutward } from "react-icons/md";
import women from "./images/women.jpeg"
import men from "./images/mard.jpg"
import { hover } from "@testing-library/user-event/dist/hover";
import FormModal from "./FormModal";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // एनिमेशन 1 सेकंड का
      }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState("free"); // "free" या "join"
  
    const openModal = (type) => {
      setModalType(type);
      setModalOpen(true);
    };
  
    const closeModal = () => setModalOpen(false);
    return ( 
        <>
        <div className="">
           <div className="back ">
            <div className="relative md:top-52 top-56">
            <div className="flex md:ml-96 md:text-7xl ml-11 text-3xl ">
           <h1 className="text-white md:ml-12  ">TRAIN </h1>
           <h1 className="insane md:ml-10 ml-4" >INSANE</h1>
           </div>
           <div className="flex items-center md:max-w-3xl gap-3 md:ml-72 ml-6">
           <div className="line1 md:flex-1 md:h-10  md:mt-4 h-4 w-24 mt-2 "></div>
           <span className=" text-white md:mt-4 md:text-4xl text-xl mt-2">OR</span>
           <div className="line2 md:flex-1 md:h-10 md:mt-4 h-4 w-24 mt-2"></div>
           </div>
           <div className="flex md:ml-80 md:text-7xl md:mt-4 text-3xl ml-5 mt-2">
           <h1 className="text-white md:ml-12">REMAIN THE </h1>
           <h1 className="same md:ml-7 ml-2">SAME</h1>
           </div>
           
           <div className="md:ml-28 md:mt-16 mt-20">
           <button className="btn1 border md:px-4 md:py-2 px-3 py-1 md:ml-96 font-semibold relative left-20 ml-2 md:left-0 " onClick={() => openModal("free")}>TRY US FREE</button>
           <button className="btn2 md:ml-28 border  md:px-5 md:py-2 px-4 py-1 font-semibold relative top-20 md:top-0 md:right-0 right-9 " onClick={() => openModal("join")}>JOIN NOW</button>
           </div>
           <FormModal isOpen={modalOpen} onClose={closeModal} type={modalType} />
           </div>
        </div>
        <div className=" h-screen bg-neutral-900 text-white text-center ">
            <div data-aos="fade-up">
         <h1 className="relative top-12 text-lg tracking-widest ">EXPERIENCED & INTERNATIONALLY CERTIFIED PERSONAL TRAINERS</h1>
         <h1 className=" mt-16  italic h-10 text-5xl" style={{color:"yellow"}}>THE BEST FITNESS EXPERIENCE</h1>
         <h1 className="mt-8">We're committed to bringing you the best workout experience.</h1>
        <div className="flex ml-16  mt-16 gap-5">
         <img className="h-60 w-72 rounded-lg" src={bodycomp} />
         <img className="h-60 w-72 rounded-lg" src={sevenday} />
         <img className="h-60 w-72 rounded-lg" src={parking} />
         <img className="h-60 w-72 rounded-lg" src={clean} />
        </div>
        <div className="flex ml-20 mt-9">
         <h1 className="ml-4">Body Composition Assessment</h1>
         <h1 className="ml-32">Open 7 Days A Week</h1>
         <h1 className="ml-32">Complimentary Valet Parking</h1>
         <h1 className="ml-28">Clean, Comfortable and Safe</h1>
         </div>
        </div>
        </div>
        <div className="homeimg2 ">
            <div data-aos="fade-up">
         <h1 className="text-4xl text-white font-bold relative top-40 ml-12 scale-y-[1.5] font-sans">"During the hard times, it's important to <br />
             focus on the things you can change in that <br />
             moment instead of what you should have or <br />
             could have done differently."</h1>
             <div className="flex mt-80 ml-12 gap-2 text-2xl font-semibold font-sans">
             <h1 className="text-white mt-4">- Annie Thorisdottir,</h1>
             <h1 className="text-white mt-4" style={{color:"yellow"}}>X GYM Athlete</h1>
             </div>
             </div>
        </div>
        <div className="h-screen bg-neutral-900">
            <div data-aos="fade-up" className="flex ">
            <div className=" mt-16 relative left-24">
            <h1 className="text-white">WHO WE ARE</h1>
            <h1 className="text-4xl font-bold text-white mt-3" style={{color:""}} >Building Fitness is Building Your<br/>
                Body and Confidence
            </h1>
            <h1 className="text-white mt-3">we believe that fitness is not just about building muscles, it’s about
                 building <br/>confidence , discipline , and a healthier lifestyle. With 
                 certified trainers , modern equipment,<br/> and result-oriented programs
                 — we help you transform your body and mindset.</h1>
                 <div className="flex mt-5">
                 <MdArrowOutward className="mt-1 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold">Personal Trainer</h1>
                 <MdArrowOutward className="ml-48 mt-1 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold">Cardio Programs</h1>
                 </div>
                 <div className="flex mt-1">
                    <h1 className="text-white">Get 1-on-1 attention from certified fitness<br/> coaches to help you train smarter.</h1>
                    <h1 className="ml-10 text-white">Improve your heart health and stamina with<br/> our tailored cardio routines.</h1>
                 </div>
                 <div className="flex gap-1 mt-4">
                 <MdArrowOutward className="mt-1 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold ">Quality Equipments</h1>
                 <MdArrowOutward className="mt-1 ml-40 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold">Healthy Nutrition</h1>
                 </div>
                 <div className="flex mt-1">
                    <h1 className="text-white">Train with state-of-the-art fitness machine<br/> for maximum performance.</h1>
                    <h1 className="ml-10 text-white">Get expert tips and plan on healthy eating<br/> for faster results.</h1>
                 </div>
            </div>
            <div className="flex relative right-8 ">
                <img src={women} className=" h-44 relative left-48 w-56 mt-52  " />
                <img src={men} className="mt-20 ml-2" style={{height:"360px", width:"400px"}} />
            </div>
            </div>
            <div className="text1 flex text-black gap-60 ml-24 mt-20" >
                <h1 className="px-3 text-4xl font-semibold"  style={{backgroundColor:"yellow"}}>1374</h1>
                <h1 className="px-3 text-4xl font-semibold" style={{backgroundColor:"yellow"}}>356</h1>
                <h1 className="px-3 text-4xl font-semibold" style={{backgroundColor:"yellow"}}>57k</h1>
                <h1 className="px-3 text-4xl font-semibold" style={{backgroundColor:"yellow"}}>17+</h1>
            </div>
        </div>
        <div className="flex bg-neutral-900 text-white text-lg gap-52 h-16 w-full">
            <h1 className="ml-24 relative bottom-6">Happy Clients</h1>
            <h1 className="ml-4 relative bottom-6">Strong Bodies</h1>
            <h1 className="ml-3 relative bottom-6">IG Followers</h1>
            <h1 className="ml- relative bottom-6">Years Experience</h1>
        </div>
        </div>
        <div className="pricing2 bg-black" style={{height:"870px"}}>
            <div data-aos="fade-up">
            <h1 className="text-white text-5xl font-bold text-center relative top-20">CHOOSE YOUR <span style={{backgroundColor:"yellow",color:"black"}}>PRICING</span> PLAN</h1>
            <div className="ml-2 mt-2 flex gap-10">
                <div className="pricing text-white px-5 border border-white  ml-16  mt-40">
                    <h1 className="text-5xl font-bold text-center mt-16">$10</h1>
						<p className="text-center mt-3 text-lg">/month</p>
						<ul className=" mt-16">
							<li className="text-center text-lg">Gym</li>
							<li className=" mt-3 text-center text-lg">Fitness 24/7</li>
							<li><span class="span1 absolute w-8 h-1 mt-8 ml-24 " style={{backgroundColor:"yellow",}}></span></li>
							<li><span class=" absolute w-8 h-1   ml-24 " style={{backgroundColor:"yellow",marginTop:"70px"}}></span></li>
							<li><span class=" absolute w-8 h-1  ml-24 " style={{backgroundColor:"yellow",marginTop:"110px"}}></span></li>
						</ul>
                        <button className="choose1  border  font-semibold mt-52 ml-7 text-lg px-8 py-4">Choose Plan</button>
            </div> 
            <div className="pricing text-white px-5 border border-white  mt-40" >
                    <h1 className="text-5xl font-bold text-center mt-16">$25</h1>
						<p className="text-center mt-3 text-lg">/month</p>
						<ul className=" mt-16">
							<li className="text-center text-lg">Gym</li>
							<li className=" mt-3 text-center text-lg">Fitness 24/7</li>
							<li className="mt-3 text-center text-lg ">Sauna</li>
							<li><span class=" absolute w-8 h-1 mt-7 ml-24 " style={{backgroundColor:"yellow"}}></span></li>
							<li><span class=" absolute w-8 h-1  ml-24 " style={{backgroundColor:"yellow",marginTop:"70px"}}></span></li>
						</ul>
                        <button className="choose2 border  font-semibold  ml-7 text-lg px-8 py-4">Choose Plan</button>
            </div>          
            <div className="pricing text-white px-5 border border-white  mt-40" >
                    <h1 className="text-5xl font-bold text-center mt-16">$30</h1>
						<p className="text-center mt-3 text-lg">/month</p>
						<ul className=" mt-16">
							<li className="text-center text-lg">Gym</li>
							<li className=" mt-3 text-center text-lg">Fitness 24/7</li>
							<li className=" mt-3 text-center text-lg">Sauna</li>
							<li className=" mt-3 text-center text-lg">Personal Trainer</li>
							<li className=" mt-3 text-center text-lg">Massage</li>
						</ul>
                        <button className="choose3 hover:bg-black border font-semibold  ml-7 text-lg px-8 py-4">Choose Plan</button>
            </div>          
            <div className="pricing text-white px-5 border border-white  mt-40">
                    <h1 className="text-5xl font-bold text-center mt-16">$50</h1>
						<p className="text-center mt-3 text-lg">/month</p>
						<ul className=" mt-16">
							<li className="text-center text-lg">Gym</li>
							<li className=" mt-3 text-center text-lg">Fitness 24/7</li>
							<li className=" mt-3 text-center text-lg">Sauna</li>
							<li className=" mt-3 text-center text-lg">Personal Trainer</li>
							<li className=" mt-3 text-center text-lg">Massage</li>
                            <li className=" mt-3 text-center text-lg">Dietician</li>
                            
						</ul>
                        <button className="choose4 border  font-semibold mt-12 ml-7 text-lg px-8 py-4">Choose Plan</button>
            </div>                   
            </div>
            </div>
        </div>
        </>
     );
}

export default Home;