import React from "react";
import { CiCircleCheck } from "react-icons/ci"
const Skill = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    REACT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <CiCircleCheck className="text-2xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TAILWIND.CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-pink-300 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-pink-500 text-right">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
export default Skill