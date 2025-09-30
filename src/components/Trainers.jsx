import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import trainer1 from "./images/trainer1.jpeg"
import trainer2 from "./images/trainer2.jpeg"
import trainer3 from "./images/trainer3.jpeg"
import trainer4 from "./images/trainer4.jpeg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Trainers() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // एनिमेशन 1 सेकंड का
      }, []);
    return ( 
        <>
        <div>
            <div className="trainerimg">
                <div className="relative top-52 ml-96">
                <h1 className="cont2 text-white text-8xl ml-40 ">TRAINERS</h1>
                </div>
                <div className="mt-52 ml-52 flex gap-1">
                <IoHomeSharp className="text-white relative left-96 text-lg mt-1 " /><h1 style={{}} className=" text-white font-semibold ml-96 text-lg " >Home ></h1>
                <h1 className=" text-white text-lg" style={{color:"yellow"}}>Trainers</h1> 
                </div>
            </div>
            <div className="bg-neutral-900" style={{height:"920px"}}>
                <div data-aos="fade-up">
                <h1 className="text-center text-3xl relative top-12" style={{color:"yellow",}}>MEET OUR TRAINERS</h1>
                <h1 className="text-white text-center mt-1 text-lg italic relative top-12">Expert guidance and personalized support to help you succeed.</h1>
                </div>
                <div data-aos="fade-up" className="flex gap-28">
                    <div className="mt-32 ml-24">
                        <h1 className="text-white text-4xl font-bold">Jason Tran</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 text-lg">After eight years in the finance industry, Jason left his desk job<br/>
                            behind for a career in fitness. Certified by Schwinn, Jason<br/>
                            quickly developed a fiercely loyal following (lovingly known as<br/>
                            Tran Fans) through teaching at various gyms in the city. He's<br/>
                            become well known in NYC by his trademark playlists and<br/>
                            hard-to-find remixes and his intense (but fun!) teaching style.<br/>
                            There's no doubt that after a FHIX or two you will become a<br/> Tran Fan!</h1>
                        <h1 className="text-white text-lg mt-6"><span className="font-bold">Fun Fact: </span>
                            The best piece of advice Jason ever received comes<br/>
                            from Sister Act 2: "If you wanna be somebody, if you wanna go<br/>
                            somewhere, you better wake up and pay attention."</h1>
                            <h1 className="text-white text-lg mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 text-lg">Kettlebell Concepts, PROnatal Fitness Pre and Post Natal, TRX <br/>
                             Level 1.</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK JASON CLASS</button>
                    </div>
                    <div>
                       <img className="mt-32" src={trainer1} style={{height:"520px",width:"540px"}}/>
                    </div>
                </div>
            </div>
                <div className="flex gap-28 bg-neutral-900" style={{height:"700px"}}>
                    <div data-aos="fade-up" className="  ml-24">
                        <h1 className="text-white text-4xl font-bold">Melody Scharff</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 text-lg">
                                       Melody grew up dancing and developed a passion for<br/>
                                       performing. After performing for over eighteen years, Melody<br/>
                                       felt her love for dance fading and needed to find new ways to<br/>
                                       stay active. She became an avid yogi and self-proclaimed gym<br/>
                                       rat. After spending less than two years in a marketing career,<br/>
                                       she left her 9-to-5 to pursue a career in fitness. Melody's goal<br/>
                                       is to help people feel confident both in the studio and their<br/>
                                       day-to-day lives.</h1>
                        <h1 className="text-white text-lg mt-6"><span className="font-bold">Fun Fact: </span>
                             Mel would love to train Miley Cyrus one day. "I'm all<br/>
                             about releasing some serious girl power!"</h1>
                            <h1 className="text-white text-lg mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 text-lg">NASM Personal Trainer, AFAA Group Fitness Instructor,<br/>
                            PROnatal Fitness Pre and Post Natal, TRX Level 1</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK MELODY CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="" src={trainer2} style={{height:"500px",width:"540px"}}/>
                    </div>
                </div>
                <div className="flex gap-28 bg-neutral-900" style={{height:"700px"}}>
                    <div data-aos="fade-up" className=" ml-24">
                        <h1 className="text-white text-4xl font-bold">Lucas Donovan</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 text-lg">After eight years in the finance industry, Jason left his desk job<br/>
                            behind for a career in fitness. Certified by Schwinn, Lucas<br/>
                            quickly developed a fiercely loyal following (lovingly known as<br/>
                            Donovan Fans) through teaching at various gyms in the city. He's<br/>
                            become well known in NYC by his trademark playlists and<br/>
                            hard-to-find remixes and his intense (but fun!) teaching style.<br/>
                            There's no doubt that after a FHIX or two you will become a<br/> Tran Fan!</h1>
                            <h1 className="text-white text-lg mt-6"><span className="font-bold">Fun Fact: </span>
                            The best piece of advice Jason ever received comes<br/>
                            from Sister Act 2: "If you wanna be somebody, if you wanna go<br/>
                            somewhere, you better wake up and pay attention."</h1>
                            <h1 className="text-white text-lg mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 text-lg">Kettlebell Concepts, PROnatal Fitness Pre and Post Natal, TRX <br/>
                             Level 1.</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK LUCAS CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="" src={trainer3} style={{height:"500px",width:"540px"}}/>
                    </div>
                </div>
                <div className="flex gap-28 bg-neutral-900" style={{height:"650px"}}>
                    <div data-aos="fade-up" className=" ml-24">
                        <h1 className="text-white text-4xl font-bold">Olivia Parker</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 text-lg">
                                       Olivia grew up dancing and developed a passion for<br/>
                                       performing. After performing for over eighteen years, Melody<br/>
                                       felt her love for dance fading and needed to find new ways to<br/>
                                       stay active. She became an avid yogi and self-proclaimed gym<br/>
                                       rat. After spending less than two years in a marketing career,<br/>
                                       she left her 9-to-5 to pursue a career in fitness. Melody's goal<br/>
                                       is to help people feel confident both in the studio and their<br/>
                                       day-to-day lives.</h1>
                        <h1 className="text-white text-lg mt-6"><span className="font-bold">Fun Fact: </span>
                             Mel would love to train Miley Cyrus one day. "I'm all<br/>
                             about releasing some serious girl power!"</h1>
                             <h1 className="text-white text-lg mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 text-lg">NASM Personal Trainer, AFAA Group Fitness Instructor,<br/>
                            PROnatal Fitness Pre and Post Natal, TRX Level 1</h1><button className=" btn2 mt-8  border  px-4 py-2 font-semibold">BOOK OLIVIA CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="" src={trainer4} style={{height:"500px",width:"540px"}}/>
                    </div>
                </div>
        </div>
        </>
     );
}

export default Trainers;