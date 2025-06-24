import "swiper/css";
import { script } from "framer-motion/client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const images = [
  "/images/certificate1.png",
  "/images/certificate2.png",
  "/images/certificate3.png",
  "/images/certificate4.png",
  "/images/certificate5.png",
  "/images/certificate6.png",
  "/images/certificate7.png",
  "/images/certificate8.png",
];

function Hero() {
  return (
    <>
      <section className="pt-32 bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-lg px-4 mx-auto lg:grid-cols-12 lg:gap-8 justify-start">

          {/* Introduction */}
          <div className="ml-6 lg:col-span-5">
            <p className="max-w-2xl font-light text-green-400 md:text-lg lg:text-2xl dark:text-green-400">
              Hello, my name is
            </p>
            <p className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-700 md:text-5xl xl:text-6xl dark:text-gray-200">
              Prateek Haldkar
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              I'm pursuing a BTECH, specialization in Electronics & Communication engineering (ECE)
            </p>
            {/* Icons Section (Hidden on small screens) */}
            <div className="hidden lg:flex justify-start items-center space-x-6 mt-6 lg:mt-10">
              <a href="https://www.linkedin.com/in/prateek-haldkar-0a277725b" target="_blank" rel="noopener noreferrer">
                <i className="text-4xl devicon-linkedin-plain text-black block dark:hidden"></i>
                <i className="text-4xl devicon-linkedin-plain text-white hidden dark:block"></i>
              </a>

              <a href="https://github.com/prateekhaldkar" target="_blank" rel="noopener noreferrer">
                <i className="text-4xl devicon-github-original text-black block dark:hidden"></i>
                <i className="text-4xl devicon-github-original text-white hidden dark:block"></i>
              </a>
              <a href="https://www.instagram.com/prateek_haldkar_/" target="_blank" rel="noopener noreferrer">
                <img className="w-10 block dark:hidden" src="/images/instagram.png" alt="Instagram" />
                <img className="w-12 hidden dark:block" src="/images/Winstagram.png" alt="Instagram" />
              </a>
            </div>
            <a href="#">
              <button className="flex items-center bg-green-400 text-white hover:text-white border border-green-400 hover:bg-green-500 focus:ring-2 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-base px-5 py-1 text-center mt-7 me-4 mb-2 dark:bg-green-400 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-400">
                  <img className="w-8 mr-2" src="/images/link.png" alt="" />
                  GET MY RESUME
              </button>
            </a>


            
          </div>

          {/* Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
              src="/images/image1.png"
              alt="My Photo"/>
          </div>


        </div>

        {/* Icons for Mobile View */}
        <div className="lg:hidden flex justify-center items-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/prateek-haldkar-0a277725b" target="_blank" rel="noopener noreferrer">
            <i className="text-4xl devicon-linkedin-plain text-black block dark:hidden"></i>
            <i className="text-4xl devicon-linkedin-plain text-white hidden dark:block"></i>
          </a>

          <a href="https://github.com/prateekhaldkar" target="_blank" rel="noopener noreferrer">
            <i className="text-4xl devicon-github-original text-black block dark:hidden"></i>
            <i className="text-4xl devicon-github-original text-white hidden dark:block"></i>
          </a>
          <a href="https://www.instagram.com/prateek_haldkar_/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-10 block dark:hidden"
              src="/images/instagram.png"
              alt="Instagram"
            />
            <img
              className="w-12 hidden dark:block"
              src="/images/Winstagram.png"
              alt="Instagram"
            />
          </a>
        </div>


        {/* SKILLS */}
        <div className="bg-white dark:bg-gray-800 px-4 mx-4  rounded-xl shadow">

          <div className="italic place-self-center text-3xl font-bold text-green-400 dark:text-green-400 dark:bg-black">
            <u>SKILLS</u>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* left box */}
            <div className="">
              {/* Frontend Technologies */}
              <div>
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  Frontend Technologies
                </h1>

                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/html.png" alt="" />
                    HTML
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/css.png" alt="" />
                    CSS
                  </button>
                </div>

              </div>

              {/* Programming Languages */}
              <div>
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  Programming Languages
                </h1>

                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/java.png" alt="" />
                    Core java
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/javascript.png" alt="" />
                    javascript
                  </button>
                </div>

              </div>

              {/* FrameWorks: */}
              <div className="">
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  FrameWorks:
                </h1>
                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-base text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/react.png" alt="" />
                    ReactJS
                  </button>
                  <button className="flex items-center text-base text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/bootstrap.png" alt="" />
                    Bootstrap
                  </button>
                  <button className="flex items-center text-base text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/tailwindCSS.png" alt="" />
                    TailwindCSS
                  </button>
                </div>

              </div>

              {/* API s & Library: */}
              <div className="">
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  API s & Library:
                </h1>
                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/twillio.png" alt="" />
                    Twillio
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/gmail.png" alt="" />
                    JavaMail
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/captcha.png" alt="" />
                    Recaptcha
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/dropzone.png" alt="" />
                    DropZone
                  </button>
                </div>
                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/fetchapi.png" alt="" />
                    Fetch API
                  </button>
                </div>

              </div>
            </div>

            {/* right box */}
            <div>
              {/* DevOPS: */}
              <div>
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  DevOPS:
                </h1>

                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/react.png" alt="" />
                    non
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/react.png" alt="" />
                    non
                  </button>
                </div>

              </div>

              {/* Server Technologies: */}
              <div>
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  Server Technologies:
                </h1>

                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/servlet.png" alt="" />
                    Servlet
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/jsp.png" alt="" />
                    JSP
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/el.png" alt="" />
                    EL
                  </button>
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/jstl.png" alt="" />
                    JSTL
                  </button>
                </div>
                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/mvc.png" alt="" />
                    MVC Architecture
                  </button>
                </div>

              </div>

              {/* DataBase: */}
              <div>
                <h1 className="text-2xl font-bold text-gray-700  dark:text-gray-200">
                  DataBase:
                </h1>

                <div className="flex flex-wrap items-center">
                  <button className="flex items-center text-gray-200  dark:text-gray-200 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4 me-4 mb-2 dark:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <img className="w-8 mr-2" src="/images/mysql.png" alt="" />
                    MySQL
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* projects */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-center mt-10">
            <div className="italic place-self-center text-3xl font-bold text-green-400 dark:text-green-400 dark:bg-black">
              <u>Projects</u>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
            {/* Card 1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
              <a href="https://dainty-unicorn-550719.netlify.app/" target="_blank">
                <img className="rounded-t-lg" src="images/eventcalendar.png" alt="" />
              </a>
              <div className="p-5">
                <a href="https://dainty-unicorn-550719.netlify.app/" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Event calendar
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Built Event Calendar using React.js and Tailwind CSS, supporting event creation, editing, deletion, and smooth month navigation with reminders for scheduled events. Implemented advanced calendar logic and deployed the application on AWS for live usability.

                </p>


                <div className="flex justify-center items-center ">
                  <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-sm" src="/images/html.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded-sm" src="/images/css.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/javascript.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/tailwindCSS.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/react.png" alt="Medium avatar" />
                </div>

                <div className="mt-5 flex justify-center">
                  <a href="https://dainty-unicorn-550719.netlify.app/" target="_blank" className="justify-center w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
              <a href="https://github.com/prateekhaldkar/lmsystem" target="_blank">
                <img className="rounded-t-lg" src="images/librarypic.png" alt="" />
              </a>
              <div className="p-5">
                <a href="https://github.com/prateekhaldkar/lmsystem" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Library Management System
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A platform where libraries can manage books and memberships, publishers can upload books, and students can access library info remotely with secure login and mobile verification.
                </p>

                <div className="flex justify-center items-center ">
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/javascript.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/tailwindCSS.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/java.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/captcha.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/mysql.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/gmail.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/twillio.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/el.png" alt="Medium avatar" />
                </div>

                <div className="mt-5 flex justify-center">
                  <a href="https://github.com/prateekhaldkar/lmsystem" target="_blank" className="justify-center w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            {/* Card 3*/}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
              <a href="https://prateekhaldkar.github.io/weather-app/" target="_blank">
                <img className="rounded-t-lg" src="images/wetherforcastingapp.png" alt="" />
              </a>
              <div className="p-5">
                <a href="https://prateekhaldkar.github.io/weather-app/" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Weather Forcasting Web App
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Built a responsive weather forecasting web app using HTML, CSS, and JavaScript. Integrated an external API to fetch and display real-time weather data, improving user experience.
                </p>

                <div className="flex justify-center items-center ">
                  <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-sm" src="/images/html.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded-sm" src="/images/css.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/javascript.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/openWeather.png" alt="Medium avatar" />
                </div>

                <div className="mt-5 flex justify-center">
                  <a href="https://prateekhaldkar.github.io/weather-app/" target="_blank" className="justify-center w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    view
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>


            {/* Card 4*/}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
              <a href="#">
                <img className="rounded-t-lg" src="images/basic_calendar.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Basic Calendar
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Built a clean, responsive basic calendar using HTML, CSS, and JavaScript. It displays dates dynamically and adapts well across devices, demonstrating foundational web development skills.
                </p>


                <div className="flex justify-center items-center ">
                  <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-sm" src="/images/html.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded-sm" src="/images/css.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/javascript.png" alt="Medium avatar" />
                </div>


                <div className="mt-5 flex justify-center">
                  <a href="#" className="justify-center w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    view
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>


            {/* Card 5*/}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
              <a href="#">
                <img className="rounded-t-lg" src="images/radarSystem.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Radar System
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  An Arduino-based radar that uses a rotating ultrasonic sensor to detect objects up to 400 mm. It measures the object’s distance and angle, displaying live visualization on a computer screen. This project showcases Arduino control, sensor use, and real-time data display.
                </p>


                <div className="flex justify-center items-center ">
                  <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded-sm" src="/images/arduino.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-sm" src="/images/cpp.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/processing.png" alt="Medium avatar" />
                  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-sm" src="/images/ultrasonic.png" alt="Medium avatar" />
                </div>


                <div className="mt-5 flex justify-center">
                  <a href="#" className="justify-center w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    view
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>


          </div>
        </div>

        {/* Acheivements */}
        <div className="flex justify-center items-center flex-col">
          <div className="text-center mt-10">
            <div className="italic place-self-center text-3xl font-bold text-green-400 dark:text-green-400 dark:bg-black">
              <u>Acheivements</u>
            </div>
          </div>

          <div id="c_cor" className="w-full max-w-6xl px-6 mt-10">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>
        

        <div className="flex justify-center items-center flex-col">
          <div className="text-center mt-10">
            <div className="italic place-self-center text-3xl font-bold text-green-400 dark:text-green-400 dark:bg-black">
              <u>Acheivements</u>
            </div>
          </div>
          
          
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">1984</time>
                  <div className="text-lg font-black">First Macintosh computer</div>
                  The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                  personal computer. It played a pivotal role in establishing desktop publishing as a general
                  office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                  in a beige case with integrated carrying handle; it came with a keyboard and single-button
                  mouse.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                  been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                  and has evolved through seven distinct forms
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
                  The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                  designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                  8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                  million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                  over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2007</time>
                  <div className="text-lg font-black">iPhone</div>
                  iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                  operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                  January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                  of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                  accounts for 15.6% of global smartphone market share
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2015</time>
                  <div className="text-lg font-black">Apple Watch</div>
                  The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                  tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                  iOS and other Apple products and services
                </div>
              </li>
            </ul>
        </div>
       

      </section>
    </>
  );
}

export default Hero;

