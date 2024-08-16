import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  let navDialoge = document.getElementById("nav-dialoge");

  function handleMenu() {
    navDialoge.classList.toggle("hidden");
  }

  return (
    <>
      <section className="z-40 w-full bg-slate-100 backdrop-blur-sm shadow-lg p-2 relative">
        <nav className="flex justify-between px-2 items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="h-[10vh] w-[10vh]  ">
              <img className="h-[100%] w-[100%]" src={logo} alt="logo" />
            </div>
            <h1 className="hidden sm:block text-4xl  sm:text-left ">
              Rastriya Mukti Kranti
            </h1>
          </div>

          <button onClick={handleMenu}>
            <svg
              class="h-8 w-8 md:hidden  text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <line x1="3" y1="12" x2="21" y2="12" />{" "}
              <line x1="3" y1="6" x2="21" y2="6" />{" "}
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Bada navbar (Upper navbar)  */}
          <div className="md:flex  text-xl font-semibold items-center hidden justify-between gap-10">
            <Link to="/">
              <h4 className=" hover:text-green-700 transition ease-in">Home</h4>
            </Link>

            <Link to="/contact">
              <h4 className=" hover:text-green-700 transition ease-in">
                Contact
              </h4>
            </Link>

            <div className="flex justify-center items-center gap-2">
              <Link to="/join">
                <button className="bg-green-400 hover:bg-green-500 transition ease-in  rounded-md text-white px-6 py-1 ">
                  Join
                </button>
              </Link>
              <Link to="/donate">
                <button className="bg-transparent border-green-700 border-2 transition ease-in hover:border-blue-400 hover:text-blue-400 rounded-md text-green-700  px-3 py-1 ">
                  Donate
                </button>
              </Link>
            </div>
          </div>

          {/* Navbar Chota wala (Side View) */}

          <div
            id="nav-dialoge"
            className="md:hidden transition pt-6 hidden ease-in sm-menu shadow-lg bg-slate-100 fixed z-20 px-4 py-3 h-[100vh] w-[70vw] right-0 top-0"
          >
            <div className="flex font-bold justify-between  items-center">
              <h1 className="text-green-500 text-3xl px-6 ">R M K</h1>

              <button onClick={handleMenu}>
                <svg
                  class="h-8 w-8 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="mt-10 text-xl font-semibold flex flex-col w-full gap-3 px-0">
              <div className="w-full rounded bg-slate-300 items-center hover:bg-slate-400 text-gray-800 hover:text-green-100 py-1 flex">
                <button className="w-full" onClick={handleMenu}>
                  <Link className="w-full flex justify-center" to="/">
                    <h4 className=" hover:text-green-400">Home</h4>
                  </Link>
                </button>
              </div>

              <div className="w-full rounded bg-slate-300 hover:bg-slate-400 text-gray-800 hover:text-green-100 py-1  items-center flex">
                <button className="w-full" onClick={handleMenu}>
                  <Link className="w-full flex justify-center" to="/contact">
                    <h4 className=" hover:text-green-400">Contact</h4>
                  </Link>
                </button>
              </div>

              <div className="w-full rounded bg-green-400 text-white  hover:bg-green-500 py-1 items-center flex">
                <button className="w-full" onClick={handleMenu}>
                  <Link className="w-full flex justify-center" to="/join">
                    <h4 className=" ">Join</h4>
                  </Link>
                </button>
              </div>

              <div className="w-full rounded bg-transparent border-2 border-green-600 text-green-600 py-1 hover:border-blue-400 items-center hover:text-blue-400 ease-in transition flex">
                <button className="w-full" onClick={handleMenu}>
                  <Link className="w-full flex justify-center" to="/donate">
                    <h4 className=" hover:text-red-400">Donate</h4>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navigation;
