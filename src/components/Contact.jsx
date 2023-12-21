import React from "react";

const Contact = () => {
    return(
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mt-10 mx-auto h-full ">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center  items-center">
                    <form action="https://getform.io/f/a1961a70-9f17-4f6a-9456-42bbe7418f64" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2  rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2  rounded-md text-white focus:outline-none" />
                        <textarea name="message" placeholder="Enter your message"rows="10" className="p-2 bg-transparent border-2  rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 my-5 mx-auto flex ites-center rounded-md hover:scale-110 duration-300 ">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;