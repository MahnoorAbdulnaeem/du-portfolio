"use client";
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-[#000000]">
      <section className="text-black-600 body-font  bg-cover bg-center custom-image">
        <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [' HY I Am DUANOOR FRONTEND WEB DEVELOPER'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[600px] h-[2px] bg-white -100"></div>
            <p className="mb-8 leading-relaxed ">
              A passionate and skilled Frontend Web Developer committed to creating visually stunning and highly functional websites. With a solid foundation in HTML, CSS, and JavaScript, I excel at building responsive, user-friendly web applications. Currently, I am furthering my knowledge through advanced courses in Artificial Intelligence, Web 3.0, and the Metaverse. My goal is to leverage my expertise to deliver innovative digital solutions and eventually transition into a full-stack developer role.i consider myself a responsible and orderly person i am looking forward to my first work experience!!
            </p>
            <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[25rem]"
              alt="hero"
              width={500}
              height={500}
              src={require('../../../public/assets/pic/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMl8zZF9yZW5kZXJfY2hhcmFjdGVyX29mX2FfZmVtYWxfd2l0aF9sYXB0b3Bfc21pbF80N2IzZDM5YS0xYzJmLTQ1ZWYtODQwMy1lMGZmZjM0YTM4NjdfMi5qcGc.webp')}
            />
          </div>
        </div>
      </section>
    </div>


  
  )
}
export default Hero