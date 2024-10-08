import React from "react";
import Image from "next/image";
import Link from "next/link";
const About =()=>{
    return(
        <div id="about">
     <section className="text-black-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className=" object-cover object-center rounded mx-auto w-[15rem] h-700"
        alt="hero"
        src={require("../../../public/assets/pic/sis.jpg.jpeg")}
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
        About Me   
      </h1>
      <p className="mb-8 leading-relaxed">
      Hello! My name is Dua, and I am passionate about technology and continuous learning. I am currently pursuing an ADA degree at Karachi University, where I am expanding my knowledge and skills in various subjects.
      In addition to my degree, I am actively involved in the Presidential Initiative for Artificial Intelligence and Computing (PIAIC) program. I have completed the first quarter and am now in the second quarter, focusing on Next.js. This program is helping me to deepen my understanding of web development and stay updated with the latest technologies.
      </p>
      {/* <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div> */}
    </div>
  </div>
</section>

        </div>
    )
} 
export default About












