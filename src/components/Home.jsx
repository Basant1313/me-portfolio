import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { HiArrowRight } from "react-icons/hi";

import {Link} from "react-scroll";
import {useTypewriter, Cursor} from "react-simple-typewriter";


const Home = () => {
    const [typeEffect] = useTypewriter({
        words : ['Front-End Dev🧑‍💻' , 'Programmer🖥️'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  text-white">
            
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                   <h2 className="text-3xl sm:text-5xl font-bold">Hi I'm a 
                    <span className="font-bold text-violet-500 ml-2">{typeEffect}</span><Cursor />
                   </h2>
                   
                   <p>
                    I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                   </p>
                   <div>
                    <Link to="portfolio" smooth duration={500} className=" group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowRight className="ml-1"/>
                            </span>
                    </Link>
                   </div>
                </div>
                <div className="pb-20 md:m-auto">
                    <img src={HeroImage} alt="my profile" className="rounded-lg mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
            
       
        </div>
    )
}

export default Home;