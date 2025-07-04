import "../App.scss";
import React from "react";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

function Hero() {
  return (
    <div className="hero-bg">
      <section className="relative py-0 sm:py-16 lg:pt-0 lg:pb-0 sm:pb-0 lg:px-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  Learn the fundamentals of JavaScript
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="hero flex justify-center flex-shrink-0 -space-x-4 lg:justify-start">
                    <img
                      className="inline-block rounded-full w-14 h-14 filter lg:drop-shadow-2xl"
                      src="https://ik.imagekit.io/bertbigbite/logos/6.png?updatedAt=1749040040523"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://ik.imagekit.io/bertbigbite/logos/7.png?updatedAt=1749040040547"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://ik.imagekit.io/bertbigbite/logos/8.png?updatedAt=1749040040547"
                      alt=""
                    />
                  </div>

                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Study <span className="font-bold">10+ topics</span> and
                    develop your skills
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                  role="button"
                >
                  Get feedback
                </a>

                <a
                  href="#"
                  title=""
                  className="
                                inline-flex
                                items-center
                                px-4
                                py-4
                                mt-4
                                text-lg
                                font-bold
                                transition-all
                                duration-200
                                bg-transparent
                                border border-transparent
                                sm:mt-0
                                font-pj
                                justif-center
                                rounded-xl
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
                                hover:bg-gray-200
                                focus:bg-gray-200
                            "
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Download iOS App
                </a>
              </div>
            </div>

            <div className="xl:col-span-3">
              <img
                className="hero-image w-full mx-auto scale-110"
                src="https://ik.imagekit.io/bertbigbite/logos/hero.png?updatedAt=1751546383253"
                alt=""
              />
            </div>
          </div>
        </div>
        <HowItWorks />
      </section>
      <Footer />
    </div>
  );
}
export default Hero;
