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
    { percentage: 75,  textInside: 'Fat Lost'  },
    { percentage: 100,  textInside: 'Work' },
    { percentage: 25,  textInside: 'Energy' },
  ];


function Aboutus() {
    return ( 
        <>
    <div className="w-screen overflow-x-hidden m-0 p-0">
          <div className="aboutimg">
              <div className="relative top-52 md:ml-96 ml-1">
              <h1 className="cont2 text-white md:text-8xl text-7xl md:ml-36 ml-20 ">ABOUT US</h1>
              </div>
              <div className="mt-52 md:ml-52 ml-28 flex gap-1">
              <IoHomeSharp className="text-white relative md:left-96 text-lg mt-1 " /><h1 style={{}} className=" text-white font-semibold md:ml-96 text-lg " >Home ></h1>
              <h1 className=" text-white text-lg" style={{color:"yellow"}}>About</h1> 
              </div>
          </div>
          <div className="bg-neutral-900 md:h-[600px] h-[1250px] md:flex">
              <div>
                   <img src={about2} className=" relative top-24 md:ml-20 md:left-4 md:w-[550px] md:h-[400px] w-[320px] h-[300px] ml-7" /> 
              </div>
              <div>
                  <div className="flex text-white md:ml-32 mt-32 md:mt-20 ml-7">
                    <h1 className=" mt-1 md:text-[44px] text-[36px]" style={{fontFamily:'Bebas Neue',color:"yellow"}}>|</h1>
                    <h1 className="md:text-6xl text-5xl mt-2 ml-2" style={{fontFamily:'Bebas Neue'}}>WELCOME </h1>
                    <h1 className="md:text-6xl text-5xl mt-2 ml-3" style={{fontFamily:'Bebas Neue'}}>TO</h1>
                    <h1 className="md:text-6xl text-5xl mt-2 ml-3" style={{fontFamily:'Bebas Neue'}}>X GYM</h1>
                  </div>
                  <h1 className="text-white font-semibold mt-6  md:ml-[132px] md:text-[18px] text-[22px] ml-8">Our dedicated X gym areas and fitness experts
                      can help you <br/>discover new training techniques and
                      exercises that offer a <br/>dynamic and efficient full
                  </h1>
                  <h1 className="text-white  mt-7 md:ml-[132px] ml-8 text-lg md:text-base">
                    Our fitness experts can help you discover new training technique. Lore<br/>m ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod te<br/>mporincididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim ve<br/>niam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea com<br/>modo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate vel<br/>it esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cup<br/>idatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est l<br/>aborum.uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com<br/>modo
                     reprehenderit in voluptate velit esse cillum.
                  </h1>
              </div>
          </div>
          <div className="aboutimg2 md:h-[480px] h-[1240px] pt-32 md:pt-0 ">
              <div className="md:flex flex-wrap  md:ml-20 ml-9 relative md:top-32 space-y-20 md:space-y-0">
                  {progressData.map((item, index) => (
                  <div key={index} className="ml-[50px] " style={{ width: 220, height: 200,position: 'relative' }}>
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
          <div className="bg-neutral-900 md:h-[685px] h-[1820px] ">
              <div className="text-center">
                 <h1 className="relative top-12 text-lg" style={{color:"yellow"}}>WHY CHOOSE US?</h1>
                 <h1 className="text-white text-6xl mt-16 ml-2" style={{fontFamily:'Bebas Neue'}}>PUSH YOUR LIMITS FORWARD</h1>
              </div>
              <div className="md:flex text-white md:ml-48 mt-10">
                <div className="md:mt-0 mt-20">
              <FaHeadset className="text-7xl ml-40 md:ml-0" style={{color:"yellow"}}/>
              <h1 className="tracking-wider text-2xl relative right-8 mt-5 ml-[160px] md:ml-[0px] " style={{fontFamily:'Bebas Neue'}}>SUPPORT 24/24</h1>
              <h1 className="relative md:right-[120px] ml-[26px] md:ml-[0px] ">One of the best ways to make a great vaction<br/>
              quickly horrible is to choose the wrong 
              accom<br/><span className="ml-20">modations for your trip.</span>
                </h1>
              </div>
              <div className="md:mt-0 mt-16">
              <FaUsers className="text-7xl md:ml-[131px] ml-40 " style={{color:"yellow"}}/>
              <h1 className="md:ml-[112px] ml-[140px] tracking-wider text-2xl mt-5" style={{fontFamily:'Bebas Neue'}}>OUR TRAINER</h1>
              <h1 className="ml-[25px] ">
                    if you are an infrequent traveler you may need<br/>
                    some tips to keep the wife happy while you are<br/>
                    <span className="ml-16">jet setting around the globe.</span>
                </h1>
              </div>
              <div className="md:mt-0 mt-16" >
              <FaHeartbeat className="text-7xl relative md:right-16 md:ml-[255px] ml-40" style={{color:"yellow"}}/>
              <h1 className=" tracking-wider text-2xl mt-5 md:ml-[142px] ml-[100px] " style={{fontFamily:'Bebas Neue'}} >PERSONALIZED SESSIONS</h1>
              <h1 className="md:ml-[80px] ml-[25px]">
                    To succeed at any endeavor. you must stay the<br/>
                    course...no matter what the cost!here are some<br/>
                    <span className="ml-6">surefire tips to help you on your journey.</span>
                </h1>
              </div>
              </div>
              
              <div className="md:flex md:ml-48 mt-12 text-white">
                <div>
              <FaDumbbell className="text-7xl ml-40 md:ml-0" style={{color:"yellow"}}/>
              <h1 className="tracking-wider text-2xl relative right-8 mt-4 md:ml-1 ml-[160px] " style={{fontFamily:'Bebas Neue'}}>OUR EQUIPMENT</h1>
              <h1 className="relative md:right-[120px] ml-[25px] md:ml-0">Rugby and stratford-upon-a-von. Additionally,<br/>
                    there are many things to see and do in and aro<br/>
                    <span className="ml-24">und coventry itself.</span>
                </h1>
              </div>
              <div className="mt-16 md:mt-0 ml-6">
              <GiWhistle  className="text-7xl md:ml-[125px] ml-[138px] " style={{color:"yellow"}}/>
              <h1 className="tracking-wider text-2xl mt-4 ml-[112px]" style={{fontFamily:'Bebas Neue'}}>CLASSES DAILY</h1>
              <h1 className="relative right-1">
                    We would just not have  the will in us to go abou<br/>
                    t our daily lives. its motivation that helps us get <br/>
                    <span className="ml-24"> through the mundane.</span>
                </h1>
              </div>
              <div className="md:mt-0 mt-16 relative right-7 md:right-0 ">
                  <div className="relative right-16 ml-[255px]" style={{ display: 'flex', color:"yellow" }}>
                   <FaClipboardList className="text-6xl relative right-2"/>
                   <FaAppleAlt className="text-4xl relative right-6 top-6"  />
                  </div>
                  <h1 className=" tracking-wider relative right-4 bottom-1 text-2xl mt-7 ml-[140px]" style={{fontFamily:'Bebas Neue'}}>FOCUS ON YOUR HEALTH</h1>
                  <h1 className="relative bottom-1 md:ml-[76px] ml-[52px]">
                    But there is only so far we can go within the<br/>
                    constraints of a family budget in building the<br/>
                    <span className="ml-16">perfect telescopic operation.</span>
                </h1>
              </div>
              </div>
          </div>
          <div className="appointment md:h-screen h-[800px] ">
         <h1 className="text-white text-7xl relative md:top-60 top-44 text-center" style={{fontFamily:'Bebas Neue'}}>REGISTRATION NOW TO GET MORE DEALS</h1>
         <h1 className="text-white relative top-64 text-center text-xl font-semibold">WHERE HEALTH, BEAUTY AND FITNESS MEET.</h1>
         <button  className="btn1 border-2 px-8 py-3 md:ml-96 ml-24 font-bold relative top-72 text-center md:left-52 mt-10 md:mt-0">APPOINTMENT</button>
          </div>
    </div>
        </>
     );
}

export default Aboutus;