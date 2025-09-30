import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import gymfitness from "./images/gymfitness.jpg"
import indoorcycling from "./images/indoorcycling.jpeg"
import poweryoga from "./images/poweryoga.jpg"
import cardiofitness from "./images/istockphoto-.webp"
import circuittraining from "./images/circuittraining.jpg"
import zumba from "./images/zumba.jpg"
import strengthclasses from "./images/strengthclasses.png"
import outdoortraining from "./images/outdoortraining.webp"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Classes() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // एनिमेशन 1 सेकंड का
  }, []);
    return (
        <>
    <div>
         <div className="classesimg">
              <div className="relative top-52 ml-96">
              <h1 className="cont2 text-white text-8xl ml-40 ">CLASSES</h1>
              </div>
              <div className="mt-52 ml-52 flex gap-1">
              <IoHomeSharp className="text-white relative left-96 text-lg mt-1 " /><h1 style={{}} className=" text-white font-semibold ml-96 text-lg " >Home ></h1>
              <h1 className=" text-white text-lg" style={{color:"yellow"}}>Classes</h1> 
              </div>
         </div>
         <div className="bg-neutral-900 " style={{height:"700px"}}>
              <div data-aos="fade-up">
              <h1 className="text-center relative top-12 text-3xl" style={{color:"yellow"}}>X GYM</h1>
              <h1 className=" text-white text-center relative top-12 mt-1 text-lg italic  ">Take care of your body. It's the only place you have to live.</h1>
              </div>
              <div data-aos="fade-up">
              <div className="text-white mt-20 flex gap-96 ml-64 text-xl">
                <h1 className="relative left-4 top-1 tracking-wider">GYM FITNESS</h1>
                <h1 className="relative left-36 top-1 tracking-wide">INDOOR CYCLING</h1>
              </div>
              <div className="flex gap-12 ml-12 mt-4">
                <img src={gymfitness} style={{height:"400px",width:"600px"}}/>
                <img src={indoorcycling} style={{height:"400px",width:"600px"}}/>
              </div>
              <div className="text-white ml-12 mt-3 flex gap-12">
                <h1>Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                   <h1>Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                     carries the risk of significant injury, especially head injury. involves using a special as<br/>
                     stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div>
         <div className="bg-neutral-900" style={{height:"600px"}}>
             <div data-aos="fade-up">
             <div className="text-white  flex gap-96 ml-64 text-xl">
                <h1 className="relative left-4 top-12 tracking-wider">POWER YOGA</h1>
                <h1 className="relative left-36 top-12 tracking-wide">CARDIO FITNESS</h1>
              </div>
              <div className="flex gap-12 ml-12 mt-12 relative top-3">
                <img src={poweryoga} style={{height:"400px",width:"600px"}}/>
                <img src={cardiofitness} style={{height:"400px",width:"600px"}}/>
              </div>
              <div className="text-white ml-12 mt-6 flex gap-12">
                <h1>Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                <h1>Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                    carries the risk of significant injury, especially head injury. involves using a special as<br/>
                    stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div> 
         <div className="bg-neutral-900" style={{height:"600px"}}>
             <div data-aos="fade-up">
             <div className="text-white  flex gap-96 ml-64 text-xl">
                <h1 className="relative left-1 top-12 tracking-wider">CIRCUIT TRAINING</h1>
                <h1 className="relative left-36 top-12 tracking-wide">ZUMBA</h1>
              </div>
              <div className="flex gap-12 ml-12 mt-12 relative top-3">
                <img src={circuittraining} style={{height:"400px",width:"600px"}}/>
                <img src={zumba} style={{height:"400px",width:"600px"}}/>
              </div>
              <div className="text-white ml-12 mt-6 flex gap-12">
                <h1>Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                <h1>Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                    carries the risk of significant injury, especially head injury. involves using a special as<br/>
                    stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div> 
         <div className="bg-neutral-900" style={{height:"650px"}}>
             <div data-aos="fade-up">
             <div className="text-white  flex gap-96 ml-60 text-xl">
                <h1 className="relative left-1 top-12 tracking-wider">STRENGTH CLASSES</h1>
                <h1 className="relative left-24 top-12 tracking-wide">OUTDOOR TRAINING</h1>
              </div>
              <div className="flex gap-12 ml-12 mt-12 relative top-3">
                <img src={strengthclasses} style={{height:"400px",width:"600px"}}/>
                <img src={outdoortraining} style={{height:"400px",width:"600px"}}/>
              </div>
              <div className="text-white ml-12 mt-6 flex gap-12">
                <h1>Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                <h1>Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                    carries the risk of significant injury, especially head injury. involves using a special as<br/>
                    stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div> 
    </div>
        </>
      );
}

export default Classes;