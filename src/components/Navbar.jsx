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
            className="transition pt-6  hidden ease-in sm-menu bg-white fixed z-20 px-4 py-3 h-screen w-screen right-0 top-0"
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
              <div className="flex relative flex-end font-bold gap-5  justify-center items-center h-[10vh] bottom-0 ">
                <div>
                  <h3>Connect with us :</h3>
                </div>
                <div className="flex justify-start gap-2 items-center">
                  <h3>
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </h3>
                  <h3>
                    <svg
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
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
