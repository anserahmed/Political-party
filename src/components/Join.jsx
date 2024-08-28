import React from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const handleNext = () => {
    console.log("retuen krra hai");
    return;
  };

  return (
    <>
      <div className=" bg-zinc-100 h-screen">
        <form class=" px-5 rounded max-w-md mx-auto ">
          {/* join rkm  */}
          <div className="flex justify-center pb-5 md:text-3xl md:pt-36 pt-32 items-center gap-1 text-2xl font-bold text-indigo-900">
            <h1 className="text-green-500 ">JOIN </h1>
            <span>RKM</span>
          </div>
          {/* stepper  */}
          <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 py-5  sm:text-base">
            <li class="flex md:w-full items-center   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex text-blue-600  items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span class="text-gray-500  me-2">1</span>
                <span className="underline-offset-4 underline">Contact</span>
                <span class="hidden sm:inline-flex underline-offset-4 underline  sm:ms-2">
                  Info
                </span>
              </span>
            </li>
            <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span class="me-2">2</span>
                Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
            <li class="flex items-center">
              <span class=" me-2">3</span>
              Confirmation
            </li>
          </ol>
          {/* personal details  */}
          <div className="flex pt-5 justify-start items-center text-xl font-bold text-indigo-900">
            <h1>Contact Details</h1>
          </div>
          {/* form  */}
          <div class="relative z-0 w-full my-5  group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>

          <div class=" md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
          </div>
          <div class=" md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </div>
          {/* checkbox  */}
          <div class="flex items-start justify-center mb-5">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class=" outline-none w-4 h-4 rounded bg-gray-50 "
                required
              />
            </div>
            <label for="terms" class="ms-2 text-sm font-medium text-gray-500 ">
              I certify that above provided information is correct and there is
              no mistake. I know that all further communication will be done on
              above provided details.
            </label>
          </div>
          <button
            onClick={handleNext}
            type="submit"
            class="text-white bg-orange-400 hover:bg-orange-500 transition ease-in font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
          >
            {" "}
            <Link to="/join2"> Next </Link>
          </button>
        </form>
      </div>
    </>
  );
}
