import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import about2 from "./images/about2.jpeg"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaHeadset } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { GiWhistle } from "react-icons/gi";
import { FaClipboardList, FaAppleAlt } from 'react-icons/fa';




const progressData = [
    { percentage: 50,  textInside: 'Happy Clients' },
    { percentage: 75,  textInside: 'Fat Lost' },
    { percentage: 100,  textInside: 'Work' },
    { percentage: 25,  textInside: 'Energy' },
  ];


function Aboutus() {
    return ( 
        <>
    <div>
          <div className="aboutimg">
              <div className="relative top-52 ml-96">
              <h1 className="cont2 text-white text-8xl ml-36 ">ABOUT US</h1>
              </div>
              <div className="mt-52 ml-52 flex gap-1">
              <IoHomeSharp className="text-white relative left-96 text-lg mt-1 " /><h1 style={{}} className=" text-white font-semibold ml-96 text-lg " >Home ></h1>
              <h1 className=" text-white text-lg" style={{color:"yellow"}}>About</h1> 
              </div>
          </div>
          <div className="bg-neutral-900 h-screen flex">
              <div>
                   <img src={about2} className=" relative top-24 ml-20 left-4" style={{width:"550px",height:"400px"}} /> 
              </div>
              <div>
                  <div className="flex text-white ml-32 mt-20">
                    <h1 className=" mt-1" style={{fontFamily:'Bebas Neue',fontSize:"43px",color:"yellow"}}>|</h1>
                    <h1 className="text-6xl mt-2 ml-2" style={{fontFamily:'Bebas Neue'}}>WELCOME </h1>
                    <h1 className="text-6xl mt-2 ml-3" style={{fontFamily:'Bebas Neue'}}>TO</h1>
                    <h1 className="text-6xl mt-2 ml-3" style={{fontFamily:'Bebas Neue'}}>X GYM</h1>
                  </div>
                  <h1 className="text-white font-semibold mt-6" style={{marginLeft:"132px",fontSize:"18px"}}>Our dedicated X gym areas and fitness experts
                      can help you <br/>discover new training techniques and
                      exercises that offer a <br/>dynamic and efficient full
                  </h1>
                  <h1 className="text-white  mt-7" style={{marginLeft:"132px"}}>
                    Our fitness experts can help you discover new training technique. Lore<br/>m ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod te<br/>mporincididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim ve<br/>niam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea com<br/>modo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate vel<br/>it esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cup<br/>idatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est l<br/>aborum.uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com<br/>modo
                     reprehenderit in voluptate velit esse cillum
                  </h1>
              </div>
          </div>
          <div className="aboutimg2  " style={{height:"480px", }}>
              <div className="flex ml-20 relative top-32">
                  {progressData.map((item, index) => (
                  <div key={index} style={{ width: 220, height: 200, marginLeft:50,position: 'relative' }}>
                  <CircularProgressbar
                  value={item.percentage}
                  strokeWidth={3} 
                  styles={buildStyles({
                  pathColor:  'yellow' ,
                  trailColor: 'transparent',
                  })}/>
                  {/* Bold percentage text */}
                  <div
                  style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 600,                     // Extra bold
                  fontSize: '38px',
                  color: '#FFEB3B',
                  textAlign: 'center',
                  }}>
                  {item.percentage}%
                  </div>
                  {/* Custom text below the circle */}
                  <div
                  style={{
                  textAlign: 'center',
                  marginTop: -90,
                  color: 'white',
                  fontSize:'20px'
                  }}>
                  {item.textInside}
                  </div>
                  </div>
                   ))}
             </div>
          </div>
          <div className="bg-neutral-900" style={{height:"685px"}}>
              <div className=" text-center">
                 <h1 className="relative top-12 text-lg" style={{color:"yellow"}}>WHY CHOOSE US?</h1>
                 <h1 className="text-white text-6xl mt-16 ml-2" style={{fontFamily:'Bebas Neue'}}>PUSH YOUR LIMITS FORWARD</h1>
              </div>
              <div className="flex gap-96 ml-48 mt-10">
              <FaHeadset className="text-7xl" style={{color:"yellow"}}/>
              <FaUsers className="text-7xl " style={{color:"yellow"}}/>
              <FaHeartbeat className="text-7xl relative right-16" style={{color:"yellow"}}/>
              </div>
              <div className="text-white flex gap-64 ml-40 mt-5 text-2xl" style={{fontFamily:'Bebas Neue'}}>
                 <h1 className="tracking-wider">SUPPORT 24/24</h1>
                 <h1 className="ml-20 tracking-wider">OUR TRAINER</h1>
                 <h1 className=" tracking-wider">PERSONALIZED SESSIONS</h1>
              </div>
              <div className="text-white flex gap-20 ml-28">
                <h1 className="relative right-10">One of the best ways to make a great vaction<br/>
                    quickly horrible is to choose the wrong 
                    accom<br/> <span className="ml-20">modations for your trip.</span>
                </h1>
                <h1>
                    if you are an infrequent traveler you may need<br/>
                    some tips to keep the wife happy while you are<br/>
                    <span className="ml-16">jet setting around the globe.</span>
                </h1>
                <h1>
                    To succeed at any endeavor. you must stay the<br/>
                    course...no matter what the cost!here are some<br/>
                    <span className="ml-6">surefire tips to help you on your journey.</span>
                </h1>
              </div>
              <div className="flex gap-96 ml-48 mt-12">
              <FaDumbbell className="text-7xl" style={{color:"yellow"}}/>
              <GiWhistle  className="text-7xl " style={{color:"yellow"}}/>
                  <div className="relative right-12" style={{ display: 'flex', color:"yellow" }}>
                   <FaClipboardList className="text-6xl relative right-2"/>
                   <FaAppleAlt className="text-4xl relative right-6 top-6"  />
                  </div>
              </div>
              <div className="text-white flex gap-64 ml-40 mt-4 text-2xl" style={{fontFamily:'Bebas Neue'}}>
                 <h1 className="tracking-wider relative left-1">OUR EQUIPMENT</h1>
                 <h1 className="ml-20 tracking-wider relative left-2">CLASSES DAILY</h1>
                 <h1 className=" tracking-wider relative right-4 bottom-1">FOCUS ON YOUR HEALTH</h1>
              </div>
              <div className="text-white flex gap-20 ml-28">
                <h1 className="relative right-10">Rugby and stratford-upon-a-von. Additionally,<br/>
                    there are many things to see and do in and aro<br/>
                    <span className="ml-24">und coventry itself.</span>
                </h1>
                <h1 className="relative right-1">
                    We would just not have  the will in us to go abou<br/>
                    t our daily lives. its motivation that helps us get <br/>
                    <span className="ml-24"> through the mundane.</span>
                </h1>
                <h1 className="relative bottom-1 right-1">
                    But there is only so far we can go within the<br/>
                    constraints of a family budget in building the<br/>
                    <span className="ml-16">perfect telescopic operation.</span>
                </h1>
              </div>
          </div>
          <div className="appointment">
         <h1 className="text-white text-7xl relative top-60 text-center" style={{fontFamily:'Bebas Neue'}}>REGISTRATION NOW TO GET MORE DEALS</h1>
         <h1 className="text-white relative top-64 text-center text-xl font-semibold">WHERE HEALTH, BEAUTY AND FITNESS MEET.</h1>
         <button  className="btn1 border-2 px-8 py-3 ml-96 font-bold relative top-72 text-center left-52">APPOINTMENT</button>
          </div>
    </div>
        </>
     );
}

export default Aboutus;