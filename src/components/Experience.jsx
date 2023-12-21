import React from "react";

const Experience = () => {
    
    const techs = [
        {
            id: 1,
            src:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
            title:"HTML",
            style:"shadow-orange-500"

        },
        {
            id: 2,
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            title:"CSS",
            style:"shadow-blue-500"

        },
        {
            id: 3,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            title:"JavaScript",
            style:"shadow-yellow-500"

        },
        {
            id: 4,
            src:  "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            title:"Bootstrap",
            style:"shadow-violet-500"

        },
        {
            id: 5,
            src:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            title:"React",
            style:"shadow-blue-600"

        },
        {
            id: 6,
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            title:"Tailwind CSS",
            style:"shadow-sky-400"

        },
        {
            id: 7,
            src:  "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            title:"Redux",
            style:"shadow-violet-500"

        },
        {
            id: 8,
            src:"https://nodejs.org/static/images/logo.svg",
            title:"Node JS",
            style:"shadow-green-500"

        },
        {
            id: 9,
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            title:"Python",
            style:"shadow-yellow-500"

        },
        {
            id: 10,
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            title:"MySQL",
            style: "shadow-blue-400"

        },
        {
            id: 11,
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            title:"MongoDB",
            style:"shadow-green-400"

        },
        {
            id: 12,
            src: "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
            title:"Postman",
            style:"shadow-orange-500"

        },
        {
            id: 13,
            src:  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            title:"GitHub",
            style:"shadow-gray-400"

        },
        
    ]
    
    return (
        
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-clip" >
           <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className="sm: mt-12">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div  className="w-full grid grid-cols-3 text-xs sm:grid-cols-3 md:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techs.map(({id,src,title,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}alt="Figma" className="w-10 mx-auto"/>
                    <p className="mt-3">{title}</p>
                </div>

                    ))
                }
                
            </div>
           </div>
        </div>
    )
};

export default Experience;