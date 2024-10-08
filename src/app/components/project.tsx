import React from "react";
import Image from "next/image";
const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed">
              I built several projects using HTML, TypeScript, Next.js, and Tailwind CSS during my time in the PIAIC program,
              starting from Quarter One. These projects helped me improve my skills in creating responsive and dynamic web pages.
              They show how I've applied what I’ve learned to real-world development.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/*projects  */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (139).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    FOOD WEB PAGE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 1
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Developed a food web page using HTML, CSS, and JavaScript.
                    It displays two dishes and their ingredients.
                    The project highlights my skills in front-end development..
                  </p>
                </div>
              </div>
            </div>
            {/*projects 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (67).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    FACEBOOK PAGE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 2
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Created a Facebook-like page using HTML and CSS.
                    This project showcases user profiles, posts, and a simple layout.
                    It demonstrates my skills in front-end web development.
                  </p>
                </div>
              </div>
            </div>
            {/*projects 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (137).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    WEBSITE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 3
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Created a media website using Next.js and Tailwind CSS.
                    It includes dynamic content and a responsive design for an optimal user experience.
                    This project showcases my skills in modern web development."
                  </p>
                </div>
              </div>
            </div>
            {/*projects 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (140).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    PIAIC CARD
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 4
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Built a card component for PIAIC using Next.js and Tailwind CSS.
                    It features a clean design and responsive layout.
                    This project highlights my skills in front-end development
                  </p>
                </div>
              </div>
            </div>
            {/* project 5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (142).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    CLI NUMBER GUESSING
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 5
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Built a guessing game that checks if the entered number is correct or not using TypeScript.
                    The game provides feedback to the player on their guess.
                    This project showcases my skills in TypeScript and user input handling
                  </p>
                </div>
              </div>
            </div>
            {/*project 6  */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/project/Screenshot (141).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#ec4899] mb-1">
                    WORD COUNTER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PROJECT 6
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    I've created a tool that efficiently counts words,
                    providing instant results as you input text. This project showcases my skills in HTML, CSS,
                    TypeScript, and Python,
                    combining these technologies to build a user-friendly and functional application
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