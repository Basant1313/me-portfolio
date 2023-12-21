import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        About
                    </p>
                </div>
                <p className="text-xl">Enthusiastic graduate seeking a entry-level opportunity to enhance and explore my technical knowledge
gained at Savitribai Phule University in the last four years. I hold a B.E degree from Trinity College of
Engineering and Research and passionate about implementing and launching new project</p>
                <br />
                <p className="text-xl">
                I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                </p>
            </div>
        </div>
    )
}

export default About;