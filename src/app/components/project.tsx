import React from "react";
import Image from "next/image";
const Project =()=>{
    return(
        <div id="Project">
     <section className="text-black-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-light to-pink-500">
        My Project📚
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Worked on two projects using HTML and CSS, focusing on design and user experience. Showcased creativity and attention to detail. Put in a lot of effort to make them great.📚
      </p>
    </div>
    <div className="flex flex-wrap -m-3">
        {/*project*/}
      <div className="lg:w-1/1 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/project/Screenshot (67).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              FaceBook Page✨
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook Project
            </h1>
            <p className="leading-relaxed">
              This is the project which i create for my practice to better my development skills😊
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/1 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/project/Screenshot (66).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Food Home Page😋🍽🥘
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Food Project🧂
            </h1>
            <p className="leading-relaxed">
              This is the Project wich i created to practice my Food website page and become a pro web developer🤗💟
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Project