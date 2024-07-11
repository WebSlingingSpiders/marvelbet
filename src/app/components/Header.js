"use client";
import Logo from "../assets/img/logo.png";
import Image from "next/image";
import { navMenu } from "../components/Navbar";
import "../menu.css";
import { useState, useEffect } from "react";
import In from "../assets/img/IN.png";

import Btn24hr from "./button24hr";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update the current time in the state
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0"); // Ensure 2-digit format
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    };

    // Update the time immediately
    updateTime();

    // Set up an interval to update the time every second (1000 milliseconds)
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount to prevent memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="md:sticky top-0 z-50 bg-[#222]">
      <div className=" ">
        <div className="hero-wrapper text-white  border-b">
          <div className="container mx-auto  py-1">
            <div className="flex align-middle">
              <div>(GMT +8) {currentTime}</div>
              <div id="lang_select" className="language flex ms-2 align-center">
                <Image
                  src={In}
                  className="mx-2"
                  alt="in"
                  width={23}
                  height={23}
                />
                <p className="m-0">
                  <span>₹&nbsp;INR</span>&nbsp;English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="mx-5 md:mx-0 ">
        <div className="container mx-auto">
          <div className="my-5 flex md:justify-between flex-wrap justify-center ">
            <a href="/">
              <Image
                src={Logo}
                className="bg-no-repeat md:h-12 md:w-36 my-3 md:my-0"
                alt="logo marvel bet"
              ></Image>
            </a>

            <div className="flex align-middle py-1 text-white flex-wrap ">
              <input
                className="rounded my-4 w-full md:w-auto md:my-0 md:mx-2 px-5 py-3 md:py-auto"
                type="text"
                placeholder="Search..."
              ></input>
              <button
                className=" my-2 md:mx-2 md:m-0 p-4 md:py-0 w-full md:w-auto border hover:bg-sky-600 border-blue-600 px-6 text-white rounded"
                type="submit"
              >
                Search
              </button>
              <a
                href="https://six6s6.com/af/GNp0dr3s/blackhat"
                className="my-2 flex items-center md:mx-2 md:m-0 p-4 md:py-2 w-full md:w-auto hover:bg-green-800 px-8 rounded bg-green-600 "
              >
                Login
              </a>

              <a
                href="https://six6s6.com/af/GNp0dr3s/blackhat"
                className="my-2 flex items-center md:mx-2 md:m-0 p-4 md:py-0 w-full md:w-auto hover:bg-red-800 px-8 rounded bg-red-600 "
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-black w-full p-2">
          <div className="main-nav container mx-auto ">
            <ul className="flex justify-evenly flex-wrap list-none text-lg items-center">
              <div className="h-full text-white flex justify-center align-center">
                <li className=" flex justify-center ">
                  <a href="/">
                    <svg
                      fill="#fff"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      className=""
                    >
                      <path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path>
                    </svg>
                  </a>
                  <span className="border-nav ml-3 mr-2"></span>
                </li>
                <li className="flex justify-center align-center">
                  <a href="/">
                    <svg
                      fill="#fff"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                    >
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
                    </svg>
                  </a>
                  <span className="border-nav ml-3"></span>
                </li>
              </div>
              {navMenu &&
                navMenu.map((menus, index) => (
                  <div
                    key={index + 1}
                    className="flex align-center justify-center"
                  >
                    <li className="h-full text-white">
                      <a className="hover:text-red-600" href={menus.link}>
                        {menus.label}
                      </a>
                      <span className="border-nav ml-16"></span>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <Btn24hr />
      </header>
    </div>
  );
};

export default Header;
