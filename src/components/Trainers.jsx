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
                <div className="relative top-52 md:ml-96 ml-2">
                <h1 className="cont2 text-white md:text-8xl text-7xl md:ml-40 ml-24 ">TRAINERS</h1>
                </div>
                <div className="mt-52 md:ml-56 ml-28 flex gap-1">
                <IoHomeSharp className="text-white relative md:left-96 left-2 text-lg mt-1 " /><h1 style={{}} className=" text-white font-semibold md:ml-96 ml-2 text-lg " >Home ></h1>
                <h1 className=" text-white text-lg" style={{color:"yellow"}}>Trainers</h1> 
                </div>
            </div>
            <div className="bg-neutral-900 md:h-[920px] h-[1700px] " >
                <div data-aos="fade-up">
                <h1 className="text-center text-3xl relative top-12" style={{color:"yellow",}}>MEET OUR TRAINERS</h1>
                <h1 className="text-white text-center mt-1 md:text-lg italic relative top-12">Expert guidance and personalized support to help you succeed.</h1>
                </div>
                <div data-aos="fade-up" className="md:flex gap-28">
                    <div className="mt-32 md:ml-24 ml-9 ">
                        <h1 className="text-white text-4xl font-bold">Jason Tran</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 md:text-lg text-xl">After eight years in the finance industry, Jason left his desk job<br/>
                            behind for a career in fitness. Certified by Schwinn, Jason<br/>
                            quickly developed a fiercely loyal following (lovingly known as<br/>
                            Tran Fans) through teaching at various gyms in the city. He's<br/>
                            become well known in NYC by his trademark playlists and<br/>
                            hard-to-find remixes and his intense (but fun!) teaching style.<br/>
                            There's no doubt that after a FHIX or two you will become a<br/> Tran Fan!</h1>
                        <h1 className="text-white md:text-lg text-xl mt-6"><span className="font-bold">Fun Fact: </span>
                            The best piece of advice Jason ever received comes<br/>
                            from Sister Act 2: "If you wanna be somebody, if you wanna go<br/>
                            somewhere, you better wake up and pay attention."</h1>
                            <h1 className="text-white md:text-lg text-xl mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 md:text-lg text-xl">Kettlebell Concepts, PROnatal Fitness Pre and Post Natal, TRX <br/>
                             Level 1.</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK JASON CLASS</button>
                    </div>
                    <div>
                       <img className="md:mt-32 mt-20 md:h-[520px] md:w-[540px] h-[350px] w-[300px] md:ml-0 ml-10 " src={trainer1}/>
                    </div>
                </div>
            </div>
                <div className="md:flex gap-28 bg-neutral-900 h-[1400px] md:h-[700px]">
                    <div data-aos="fade-up" className="  md:ml-24 ml-9">
                        <h1 className="text-white text-4xl font-bold">Melody Scharff</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 md:text-lg text-xl ">
                                       Melody grew up dancing and developed a passion for<br/>
                                       performing. After performing for over eighteen years, Melody<br/>
                                       felt her love for dance fading and needed to find new ways to<br/>
                                       stay active. She became an avid yogi and self-proclaimed gym<br/>
                                       rat. After spending less than two years in a marketing career,<br/>
                                       she left her 9-to-5 to pursue a career in fitness. Melody's goal<br/>
                                       is to help people feel confident both in the studio and their<br/>
                                       day-to-day lives.</h1>
                        <h1 className="text-white md:text-lg text-xl  mt-6"><span className="font-bold">Fun Fact: </span>
                             Mel would love to train Miley Cyrus one day. "I'm all<br/>
                             about releasing some serious girl power!"</h1>
                            <h1 className="text-white md:text-lg text-xl  mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 md:text-lg text-xl ">NASM Personal Trainer, AFAA Group Fitness Instructor,<br/>
                            PROnatal Fitness Pre and Post Natal, TRX Level 1</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK MELODY CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="md:mt-0 mt-20 md:h-[500px] md:w-[540px] h-[320px] w-[300px] md:ml-0 ml-10" src={trainer2} />
                    </div>
                </div>
                <div className="md:flex gap-28 bg-neutral-900 h-[1400px] md:h-[700px]">
                    <div data-aos="fade-up" className=" md:ml-24 ml-9 ">
                        <h1 className="text-white text-4xl font-bold">Lucas Donovan</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 md:text-lg text-xl ">After eight years in the finance industry, Jason left his desk job<br/>
                            behind for a career in fitness. Certified by Schwinn, Lucas<br/>
                            quickly developed a fiercely loyal following (lovingly known as<br/>
                            Donovan Fans) through teaching at various gyms in the city. He's<br/>
                            become well known in NYC by his trademark playlists and<br/>
                            hard-to-find remixes and his intense (but fun!) teaching style.<br/>
                            There's no doubt that after a FHIX or two you will become a<br/> Tran Fan!</h1>
                            <h1 className="text-white  md:text-lg text-xl mt-6"><span className="font-bold">Fun Fact: </span>
                            The best piece of advice Jason ever received comes<br/>
                            from Sister Act 2: "If you wanna be somebody, if you wanna go<br/>
                            somewhere, you better wake up and pay attention."</h1>
                            <h1 className="text-white  md:text-lg text-xl mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2  md:text-lg text-xl">Kettlebell Concepts, PROnatal Fitness Pre and Post Natal, TRX <br/>
                             Level 1.</h1>
                             <button className="btn2 mt-8  border  px-4 py-2 font-semibold">BOOK LUCAS CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="md:mt-0 mt-20 md:h-[500px] md:w-[540px] h-[320px] w-[300px] md:ml-0 ml-10" src={trainer3} />
                    </div>
                </div>
                <div className="md:flex gap-28 bg-neutral-900 md:h-[700px] h-[1400px] ">
                    <div data-aos="fade-up" className="md:ml-24 ml-9">
                        <h1  className="text-white text-4xl font-bold">Olivia Parker</h1>
                        <span class="absolute w-20 h-1  mt-5" style={{backgroundColor:"yellow"}}></span>
                        <h1 className="text-white mt-10 md:text-lg text-xl">
                                       Olivia grew up dancing and developed a passion for<br/>
                                       performing. After performing for over eighteen years, Melody<br/>
                                       felt her love for dance fading and needed to find new ways to<br/>
                                       stay active. She became an avid yogi and self-proclaimed gym<br/>
                                       rat. After spending less than two years in a marketing career,<br/>
                                       she left her 9-to-5 to pursue a career in fitness. Melody's goal<br/>
                                       is to help people feel confident both in the studio and their<br/>
                                       day-to-day lives.</h1>
                        <h1 className="text-white md:text-lg text-xl mt-6"><span className="font-bold">Fun Fact: </span>
                             Mel would love to train Miley Cyrus one day. "I'm all<br/>
                             about releasing some serious girl power!"</h1>
                             <h1 className="text-white md:text-lg text-xl mt-6 font-bold">Certifications:</h1>
                            <h1 className="text-white mt-2 md:text-lg text-xl">NASM Personal Trainer, AFAA Group Fitness Instructor,<br/>
                            PROnatal Fitness Pre and Post Natal, TRX Level 1</h1><button className=" btn2 mt-8  border  px-4 py-2 font-semibold">BOOK OLIVIA CLASS</button>
                    </div>
                    <div>
                       <img data-aos="fade-up" className="md:mt-0 mt-20 md:h-[500px] md:w-[540px] h-[320px] w-[300px] md:ml-0 ml-10" src={trainer4}/>
                    </div>
                </div>
        </div>
        </>
     );
}

export default Trainers;