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
    AOS.init({ duration: 1000 }); 
  }, []);
    return (
        <>
    <div>
         <div className="classesimg">
              <div className="relative top-52 md:ml-96 ml-2">
              <h1 className="cont2 text-white md:text-8xl text-7xl md:ml-40 ml-24 ">CLASSES</h1>
              </div>
              <div className="mt-52 md:ml-52 flex gap-1 ml-28 ">
              <IoHomeSharp className="text-white relative md:left-96 text-lg mt-1 left-2 " /><h1 style={{}} className=" text-white font-semibold md:ml-96 text-lg ml-2" >Home ></h1>
              <h1 className=" text-white text-lg " style={{color:"yellow"}}>Classes</h1> 
              </div>
         </div>
         <div className="bg-neutral-900 md:h-[700px] h-[1125px] " >
              <div data-aos="fade-up">
              <h1 className="text-center relative top-12 text-3xl" style={{color:"yellow"}}>X GYM</h1>
              <h1 className=" text-white text-center relative top-12 mt-1  italic md:text-lg ">Take care of your body. It's the only place you have to live.</h1>
              </div>
              <div data-aos="fade-up" className="md:flex mt-24 md:ml-12 ml-10 gap-12">
              <div className=" text-white ">
                <h1 className="relative left-4  tracking-wider text-xl md:ml-[210px] bottom-3 ml-[72px] ">GYM FITNESS</h1>
                <img src={gymfitness}  className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                   </div>
              <div className="text-white md:mt-0 mt-20">
              <h1 className="relative md:left-36  tracking-wide text-xl md:ml-[72px] bottom-3 ml-[70px]">INDOOR CYCLING</h1>
                <img src={indoorcycling} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                     carries the risk of significant injury, especially head injury. involves using a special as<br/>
                     stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div>
         <div className="bg-neutral-900 md:h-[600px] h-[1025px] " >
             <div data-aos="fade-up" className="md:flex  md:ml-12 ml-10  gap-12 relative top-16">
             <div className="text-white">
                <h1 className="relative left-4  tracking-wider text-xl md:ml-[210px] bottom-3 ml-[72px]">POWER YOGA</h1>
                <img src={poweryoga} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px]"/>
                <h1 className="mt-3">Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                   </div>
              <div className="text-white md:mt-0 mt-20 ">
              <h1 className="relative md:left-36  tracking-wide text-xl  ml-[72px] bottom-3">CARDIO FITNESS</h1>
                <img src={cardiofitness} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                    carries the risk of significant injury, especially head injury. involves using a special as<br/>
                    stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div> 
         <div className="bg-neutral-900 md:h-[600px] h-[1025px] " >
             <div data-aos="fade-up" className="md:flex  md:ml-12 ml-10  gap-12 relative md:top-16 top-12">
             <div className="text-white">
                <h1 className="relative left-4  tracking-wider text-xl md:ml-[190px] ml-[45px] bottom-3">CIRCUIT TRAINING</h1>
                <img src={circuittraining} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                   </div>
              <div className="text-white md:mt-0 mt-20 ">
              <h1 className="relative md:left-36  tracking-wide text-xl md:ml-[100px] bottom-3 ml-[115px] ">ZUMBA</h1>
                <img src={zumba} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
                    carries the risk of significant injury, especially head injury. involves using a special as<br/>
                    stationary exercise bicycle with a weighted flywheel in a classroom setting.</h1>
              </div>
              </div>
         </div> 
         <div className="bg-neutral-900 h-[1050px] md:h-[650px] " >
             <div data-aos="fade-up" className="md:flex  md:ml-12 ml-10  gap-12 relative md:top-16 top-8 ">
             <div className="text-white">
                <h1 className="relative left-4  tracking-wider text-xl md:ml-[190px] ml-[40px] bottom-3">STRENGTH CLASSES</h1>
                <img src={strengthclasses} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Exercise and rest are the cornerstones of improving your quality of life. It's not always<br/>
                   easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel bett<br/>er,
                   look better and be happier in your own skin.</h1>
                   </div>
              <div className="text-white md:mt-0 mt-20 ">
              <h1 className="relative md:left-36  tracking-wide text-xl md:ml-[72px] ml-[60px] bottom-3">OUTDOOR TRAINING</h1>
                <img src={outdoortraining} className="md:h-[400px] md:w-[600px] h-[250px] w-[300px] "/>
                <h1 className="mt-3">Cycling is a great form of exercise as well as a practical way to get around, but it also<br/>
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