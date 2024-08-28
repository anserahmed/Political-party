import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Join3() {
  return (
    <div className=" bg-zinc-100 h-screen">
      <form class=" px-5 rounded max-w-md mx-auto ">
        {/* join rkm  */}
        <div className="flex justify-center pb-5 md:text-3xl md:pt-36 pt-32 items-center gap-1 text-2xl font-bold text-indigo-900">
          <h1 className="text-green-500 ">JOIN </h1>
          <span>RKM</span>
        </div>
        {/* stepper  */}
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 py-5  sm:text-base">
          <li class="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li class="flex md:w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Contact <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li class="flex text-blue-600 items-center">
            <svg
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className=" text-blue-600">Confirmation</span>
          </li>
        </ol>
      </form>
      <div className="flex flex-col w-full pt-7 gap-7 justify-center items-center">
        <div className="flex h-[15vh] w-[15vh]  md:h-[25vh] md:w-[25vh] lg:h-[36vh] lg:w-[36vh] justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <div className="font-semibold text-lg md:text-xl lg:text-3xl">
          <h1 className="px-3  md:px-6 lg:px-10">
            Thank you for your interest, your request has been received. You are
            now <span className="text-green-600">active member</span> of <span className="text-orange-400">RKM</span>.
          </h1>
        </div>
      </div>
    </div>
  );
}
