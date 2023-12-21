import React from "react";
import Skyscanner from "../assets/Skyscanner.png";
import FoodDelivery from "../assets/FoodDelivery.png";
import BookingShow from "../assets/BookingShow.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Skyscanner
        },
        {
            id: 2,
            src: FoodDelivery
        },
        {
            id: 3,
            src: BookingShow
        },
    ];
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                
            <div className=" md:pb-8 ">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some my work right here</p>
                </div>
                
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                    portfolios.map(({id,src} ) => (
                        <div ker={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="items-center justify-center ">
                            <button className="w-full px-6 py-2 m-1 duration-200 hover:scale-105">Code</button>
                            
                        </div>
                    </div>
                        
                    ))
                }
               
            </div>
            </div>
        </div>
    )
}

export default Portfolio;