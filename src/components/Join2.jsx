import React from "react";
import { Link } from "react-router-dom";
export default function Join2() {
  return (
    <div className=" bg-zinc-100 h-full">
      <form class=" px-5  pb-10 rounded max-w-md mx-auto ">
        {/* join rkm  */}
        <div className="flex justify-center pb-5 md:text-3xl md:pt-36 pt-32  items-center gap-1 text-2xl font-bold text-indigo-900">
            <h1 className="text-green-500 ">JOIN </h1>
            <span>RKM</span>
          </div>
        {/* stepper  */}
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 py-5  sm:text-base">
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
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
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">2</span>
              <span className="underline underline-offset-4 text-blue-600">
                Personal
              </span>
              <span class="hidden  underline underline-offset-4 text-blue-600 sm:inline-flex sm:ms-2">
                Info
              </span>
            </span>
          </li>
          <li class="flex items-center">
            <span class=" me-2">3</span>
            Confirmation
          </li>
        </ol>

        <div
          class="p-4 text-sm text-orange-800 rounded-lg bg-orange-100 "
          role="alert"
        >
          <span class="font-medium">Congratulations !</span> You have become a
          Portal User. If you want to join as a menber, Please continue.
        </div>
        {/* personal details  */}
        <div className="flex pt-5 justify-start items-center text-xl font-bold text-indigo-900">
          <h1>Personal Details</h1>
        </div>
        {/* form  */}
        <div className="flex pt-5 flex-col gap-4 ">
          {/* Citizen  */}
          <fieldset className="flex py-2 items-center gap-5">
            <div>
              <h1>Are you Nepali Citizen ?</h1>
            </div>

            <div class="flex items-center">
              <input
                id="yes"
                type="radio"
                name="country"
                value="Germany"
                class="w-4 h-4 border-gray-300  "
              />
              <label class="block ms-2 text-sm font-medium text-gray-900">
                Yes
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="yes"
                type="radio"
                name="country"
                value="Germany"
                class="w-4 h-4 border-gray-300  "
              />
              <label class="block ms-2 text-sm font-medium text-gray-900">
                No
              </label>
            </div>
          </fieldset>
          {/* Gender  */}
          <fieldset className="flex py-2 items-center gap-5">
            <div>
              <h1>Gender</h1>
            </div>

            <div class="flex items-center">
              <input
                id="male"
                type="radio"
                name="gender"
                value="{male}"
                class="w-4 h-4 border-gray-300  "
              />
              <label class="block ms-2 text-sm font-medium text-gray-900">
                Male
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="female"
                type="radio"
                name="gender"
                value="{female}"
                class="w-4 h-4 border-gray-300  "
              />
              <label class="block ms-2 text-sm font-medium text-gray-900">
                Female
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="others"
                type="radio"
                name="gender"
                value="{others}"
                class="w-4 h-4 border-gray-300  "
              />
              <label class="block ms-2 text-sm font-medium text-gray-900">
                Others
              </label>
            </div>
          </fieldset>
          {/* Upload  */}
          <form class="max-w-lg  py-2 mx-auto">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 "
              for="user_avatar"
            >
              Upload Profile Picture
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account (jpeg, jpg, png format only, max size 2MB)
            </div>
          </form>
          {/* DOb  */}
          <div class="relative w-auto ">
            <div className="">
              <h1 className="py-1">Select your Date of Birth</h1>
            </div>
            <input
              datepicker
              id="default-datepicker"
              type="date"
              class="bg-gray-50 border my-1  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full  p-2.5 "
              placeholder="Select date"
            />
          </div>
          {/* Address  */}
          <input
            type="text"
            name="floating_phone"
            id="floating_phone"
            class="block py-2.5 px-2 w-full text-sm rounded-lg outline-none text-gray-900 bg-gray-50    "
            placeholder=" Home Address"
            required
          />
          {/* form1  */}
          <form class="flex gap-2 w-full mx-auto">
            <select
              id="states"
              class="bg-gray-50 w-full text-gray-900 text-sm rounded-lg "
            >
              <option selected>Choose a state</option>
              <option value="UP">United Pradesh</option>
            </select>
            <select
              id="distict"
              class="bg-gray-50  w-full text-gray-900 text-sm rounded-lg "
            >
              <option selected>Choose a distict</option>
              <option value="mpi">Mainpuri</option>
            </select>
          </form>
          {/* form 2  */}
          <form class=" flex gap-2 w-full mx-auto">
            <select
              id="states"
              class="bg-gray-50 w-full text-gray-900 text-sm rounded-lg "
            >
              <option selected> Assembly Constitution</option>
              <option value="UP">karhal</option>
            </select>
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-2 w-full text-sm rounded-lg outline-none text-gray-900 bg-gray-50    "
              placeholder=" Pincode"
              required
            />
          </form>
        </div>

        <Link className="" to="/join3">
          <button
            type="submit"
            class="text-white mt-4 bg-orange-400 hover:bg-orange-500 transition ease-in font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
}
