import React, { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  const navDialogeRef = useRef(null);

  function handleMenu() {
    if (navDialogeRef.current) {
      navDialogeRef.current.classList.toggle("hidden");
    }
  }

  return (
    <>
      <section className="z-40 w-full bg-slate-100 backdrop-blur-sm shadow-lg p-2 relative">
        <nav className="flex justify-between px-2 items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="h-[10vh] w-[10vh]  ">
              <img className="h-[100%] w-[100%]" src={logo} alt="logo" />
            </div>
            <h1 className="hidden sm:block text-3xl font-semibold  sm:text-left ">
              Rastriya Mukti Kranti
            </h1>
          </div>

          {/* Bada navbar (Upper navbar)  */}
          <div className="md:flex  text-sm font-bold items-center hidden justify-between gap-7">
            <Link to="/">
              <h4 className="text-blue-500 hover:text-orange-400 transition ease-in">
                UPCOMING EVENTS
              </h4>
            </Link>

            <Link to="/contact">
              <h4 className=" text-blue-500  hover:text-orange-400  transition ease-in">
                RKM <span className="text-green-500">LIVE</span>
              </h4>
            </Link>
            <Link to="/contact">
              <h4 className=" text-blue-500 hover:text-orange-400 transition ease-in">
                RESOURCES
              </h4>
            </Link>

            <div className="flex justify-center items-center gap-2">
              <Link to="/join">
                <button className="bg-orange-400 hover:bg-orange-500 transition ease-in  rounded-md text-white px-6 py-1 ">
                  Join
                </button>
              </Link>
              <Link to="/donate">
                <button className="bg-orange-400 hover:bg-red-500  transition ease-in  rounded-md text-white  px-3 py-1 ">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          <button onClick={handleMenu}>
            <svg
              className="h-8 w-8   text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Navbar Chota wala (Side View) */}

          <div
            ref={navDialogeRef}
            className="transition pt-6 hidden ease-in sm-menu bg-white fixed z-20 px-4 py-3 h-screen w-screen right-0 top-0"
          >
            <div className="flex font-bold justify-between items-center">
              <h1 className="text-orange-500 text-3xl px-6 ">R M K</h1>

              <button onClick={handleMenu}>
                <svg
                  className="h-8 w-8 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-between  gap-5">
              <div className="flex flex-col  justify-between min-h-[80vh]">
                <div className="mt-10 text-md font-semibold flex flex-col w-full gap-2 px-0">
                  <div className="w-full rounded bg-emerald-500 shadow-md items-center hover:bg-emerald-600 text-gray-100 hover:text-green-100 py-1 flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/">
                        <h4 className=" hover:text-gray-100">Infographics</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded bg-blue-800 hover:bg-blue-900 text-gray-100 py-1 shadow-md  items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link
                        className="w-full flex justify-center"
                        to="/contact"
                      >
                        <h4 className=" ">My RMK</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded bg-purple-800 hover:bg-purple-900 text-gray-100 shadow-md py-1  items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link
                        className="w-full flex justify-center"
                        to="/contact"
                      >
                        <h4 className=" ">State Websites</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded bg-orange-500 text-white  hover:bg-orange-600 shadow-md py-1 items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/join">
                        <h4 className=" ">Join RMK</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded bg-orange-400 text-white  hover:bg-orange-500 shadow-md py-1 items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/donate">
                        <h4 className=" ">Make a Donation</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded bg-cyan-400 text-white  hover:bg-cyan-600 py-1 shadow-md items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/join">
                        <h4 className=" ">Archive</h4>
                      </Link>
                    </button>
                  </div>
                  <div className="w-full rounded  hover:bg-orange-500 text-white bg-orange-400 shadow-md py-1 items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/join">
                        <h4 className=" ">RMK Yatra</h4>
                      </Link>
                    </button>
                  </div>

                  <div className="w-full rounded  hover:bg-green-600 text-white bg-green-500 shadow-md py-1 items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/join">
                        <h4 className=" ">Election Corner</h4>
                      </Link>
                    </button>
                  </div>
                  <div className="w-full rounded bg-purple-900 text-white  hover:bg-purple-950 py-1 items-center flex">
                    <button className="w-full" onClick={handleMenu}>
                      <Link className="w-full flex justify-center" to="/join">
                        <h4 className=" ">RMK Live</h4>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* footer (contacts) */}

              <div className="flex relative flex-end font-bold gap-2  justify-center items-center h-[10vh] bottom-0 ">
                <div>
                  <h3>Connect with us :</h3>
                </div>
                <div className="flex justify-start gap-2 items-center">
                  <h3>
                    <svg
                      class="h-5 w-5 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </h3>
                  <h3>
                    <svg
                      class="h-5 w-5 text-sky-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </h3>
                  <h3>
                    <svg
                      class="h-5 w-5 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </h3>
                  <h3>
                    <svg
                      class="h-5 w-5 text-neutral-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <circle cx="18" cy="5" r="3" />{" "}
                      <circle cx="6" cy="12" r="3" />{" "}
                      <circle cx="18" cy="19" r="3" />{" "}
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />{" "}
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navigation;
