import React from "react";
import bodycomp from "./images/bodycomp.jpg"
import sevenday from "./images/sevenday.jpg"
import parking from "./images/parking.jpg"
import clean from "./images/clean.jpg"
import { MdArrowOutward } from "react-icons/md";
import women from "./images/women.jpeg"
import men from "./images/mard.jpg"
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
        <div>
           <div className="back ">
            <div className="relative md:top-52 top-56">
            <div className="flex md:ml-96 md:text-7xl ml-20 text-3xl ">
           <h1 className="text-white md:ml-12 ml-2 ">TRAIN </h1>
           <h1 className="insane md:ml-10 ml-4" >INSANE</h1>
           </div>
           <div className="flex items-center md:max-w-3xl gap-3 md:ml-72 ml-16">
           <div className="line1 md:flex-1 md:h-10  md:mt-4 h-4 w-24 mt-2 "></div>
           <span className=" text-white md:mt-4 md:text-4xl text-xl mt-2">OR</span>
           <div className="line2 md:flex-1 md:h-10 md:mt-4 h-4 w-24 mt-2"></div>
           </div>
           <div className="flex md:ml-80 md:text-7xl md:mt-4 text-3xl ml-12 mt-2">
           <h1 className="text-white md:ml-12 ml-3">REMAIN THE </h1>
           <h1 className="same md:ml-7 ml-2">SAME</h1>
           </div>
           
           <div className="md:ml-28 md:mt-16 mt-20">
           <button className="btn1 border px-4 py-2  md:ml-96 font-semibold relative left-20 ml-11 md:left-0 " onClick={() => openModal("free")}>TRY US FREE</button>
           <button className="btn2 md:ml-28 border  px-5 py-2  font-semibold relative top-20 md:top-0 md:right-0 right-11 " onClick={() => openModal("join")}>JOIN NOW</button>
           </div>
           <FormModal isOpen={modalOpen} onClose={closeModal} type={modalType} />
           </div>
        </div>
        <div className="fitness md:h-screen h-[1650px] bg-neutral-900 text-white text-center ">
            <div data-aos="fade-up">
         <h1 className="relative top-12 text-lg tracking-widest ">EXPERIENCED & INTERNATIONALLY CERTIFIED PERSONAL TRAINERS</h1>
         <h1 className=" mt-16  italic h-10 text-5xl" style={{color:"yellow"}}>THE BEST FITNESS EXPERIENCE</h1>
         <h1 className="md:mt-8 mt-32">We're committed to bringing you the best workout experience.</h1>
        <div className="md:flex md:ml-16  mt-16 gap-5 ml-11">
             <div>
                 <img className="h-60 w-72 rounded-lg" src={bodycomp} />
                 <h1 className=" md:mt-9 mt-6 relative md:right-0 right-5">Body Composition Assessment</h1>
             </div>
             <div>
                  <img className="h-60 w-72 rounded-lg md:mt-0 mt-6" src={sevenday} />
                  <h1 className=" md:mt-9 mt-6 relative md:right-0 right-5">Open 7 Days A Week</h1>
             </div>
             <div>
                  <img className="h-60 w-72 rounded-lg md:mt-0 mt-6" src={parking} />
                  <h1 className=" md:mt-9 mt-6 relative md:right-0 right-6">Complimentary Valet Parking</h1>
             </div>
             <div>
                  <img className="h-60 w-72 rounded-lg md:mt-0 mt-6" src={clean} />
                  <h1 className=" md:mt-9 mt-6 relative md:right-0 right-5">Clean, Comfortable and Safe</h1>
             </div>
        </div>
        </div>
        </div>
        <div className="homeimg2 md:h-screen h-[450px]">
            <div data-aos="fade-up">
         {/* <h1 className="md:text-4xl text-3xl text-white font-bold relative top-40 md:ml-12 ml-4 scale-y-[1.5] font-sans">"During the hard times, it's important to <br />
             focus on the things you can change in that <br />
             moment instead of what you should have or <br />
             could have done differently."</h1> */}
             <h1 className="text-white md:text-4xl text-lg font-sans font-bold scale-y-[1.5] relative md:top-32 top-28 md:ml-12 ">"During hard times, build your inner powers</h1>
             <h1 className="text-white md:text-4xl text-lg font-sans font-bold scale-y-[1.5] relative md:top-32 top-28 md:mt-5 mt-2 md:ml-12 ml-2">Change what you can today, not tomorrow</h1>
             <h1 className="text-white md:text-4xl text-lg font-sans font-bold scale-y-[1.5] relative md:top-32 top-28 md:mt-5 md:ml-12 mt-2 ml-2">Forget what you could have done before &</h1>
             <h1 className="text-white md:text-4xl text-lg font-sans font-bold scale-y-[1.5] relative md:top-32 top-28 md:mt-5 md:ml-12 mt-2 ml-2">Grow each day & make your strength soar."</h1>
             <div className="flex md:mt-[250px] mt-[180px] md:ml-12 ml-5 gap-2 md:text-2xl text-xl font-semibold font-sans">
             <h1 className="text-white mt-4">- Annie Thorisdottir,</h1>
             <h1 className="text-white mt-4" style={{color:"yellow"}}>X GYM Athlete</h1>
             </div>
             </div>
        </div>
        <div className="md:h-[670px] h-[1550px] bg-neutral-900">
            <div data-aos="fade-up" className="md:flex ">
            <div className=" md:mt-16 relative md:left-24 md:top-0 top-12">
            <h1 className="text-white ml-5 md:ml-0">WHO WE ARE</h1>
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-3 md:ml-0 ml-5" style={{color:""}} >Building Fitness is Building Your<br/>
                Body and Confidence
            </h1>
            <h1 className="text-white mt-3 ml-5 md:ml-0">we believe that fitness is not just about building muscles, it’s about
                 building <br/>confidence , discipline , and a healthier lifestyle. With 
                 certified trainers , modern equipment,<br/> and result-oriented programs
                 — we help you transform your body and mindset.</h1>
                 <div className="flex mt-5">
                 <MdArrowOutward className="mt-1 text-lg ml-5 md:ml-0" style={{color:"yellow"}}/><h1 className="text-white font-bold">Personal Trainer</h1>
                 <MdArrowOutward className="md:ml-48 ml-11 mt-1 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold">Cardio Programs</h1>
                 </div>
                 <div className="flex mt-1">
                    <h1 className="text-white ml-5 md:ml-0">Get 1-on-1 attention from certified fitness<br/> coaches to help you train smarter.</h1>
                    <h1 className="md:ml-10 ml-5 text-white">Improve your heart health and stamina with<br/> our tailored cardio routines.</h1>
                 </div>
                 <div className="flex  mt-4">
                 <MdArrowOutward className="mt-1 text-lg ml-5 md:ml-0" style={{color:"yellow"}}/><h1 className="text-white font-bold ">Quality Equipments</h1>
                 <MdArrowOutward className="mt-1 md:ml-40 relative left-1 ml-4 text-lg" style={{color:"yellow"}}/><h1 className="text-white font-bold relative left-1">Healthy Nutrition</h1>
                 </div>
                 <div className="flex mt-1">
                    <h1 className="text-white ml-5 md:ml-0">Train with state-of-the-art fitness machine<br/> for maximum performance.</h1>
                    <h1 className="md:ml-10 ml-5 text-white">Get expert tips and plan on healthy eating<br/> for faster results.</h1>
                 </div>
            </div>
            <div className="flex relative md:right-8 right-52 ">
                <img src={women} className=" h-44 relative left-48 w-56 mt-52  " />
                <img src={men} className="mt-20 ml-2" style={{height:"360px", width:"400px"}} />
            </div>
            </div>
            <div className="md:flex text-black md:ml-24 ml-32  mt-20" >
                <div>
                <h1 className=" px-3 text-4xl font-semibold " style={{backgroundColor:"yellow",width:"110px",fontFamily:" 'PT Sans', sans-serif"}} >1374</h1>
                <h1 className="mt-1  text-white text-lg ">Happy Clients</h1>
                </div>
                <div>
                <h1 className="px-3 text-4xl font-semibold mt-10 md:mt-0 md:ml-60 ml-3"style={{backgroundColor:"yellow",width:"86px",fontFamily:" 'PT Sans', sans-serif"}} >356</h1>
                <h1 className="mt-1 text-white text-lg md:ml-56  relative left-1">Strong Bodies</h1>
                </div>
                <div>
                <h1 className="px-3 text-4xl font-semibold mt-10 md:mt-0 md:ml-60 ml-3"style={{backgroundColor:"yellow",width:"85px",fontFamily:" 'PT Sans', sans-serif"}} >57k</h1>
                <h1 className="mt-1 text-white text-lg md:ml-56  relative left-2">IG Followers</h1>
                </div>
                <div>
                <h1 className="px-3 text-4xl font-semibold mt-10 md:mt-0 md:ml-60 ml-3" style={{backgroundColor:"yellow",width:"85px",fontFamily:" 'PT Sans', sans-serif"}}>17+</h1>
                <h1 className="mt-1 text-white text-lg md:ml-52 relative md:left-2 right-3 md:right-0">Years Experience</h1>
                </div>
            </div>
        </div>
        </div>
        <div className="pricing2 bg-black md:h-[870px] h-[3100px]">
            <div data-aos="fade-up">
            <h1 className="text-white md:text-5xl text-4xl font-bold text-center relative top-20">CHOOSE YOUR <span style={{backgroundColor:"yellow",color:"black"}}>PRICING</span> PLAN</h1>
            <div className="md:ml-2 mt-2 md:flex gap-10">
                <div className="pricing text-white px-5 border border-white  md:ml-16 ml-12 mt-40">
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
            <div className="pricing text-white px-5 border border-white  mt-40 ml-12 md:ml-0" >
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
            <div className="pricing text-white px-5 border border-white  mt-40 ml-12 md:ml-0" >
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
            <div className="pricing text-white px-5 border border-white  mt-40 ml-12 md:ml-0">
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