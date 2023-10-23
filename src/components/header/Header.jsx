import React from "react";
import { useState, useEffect } from "react";
import { navMenu } from "../../data/Navbar";
import { IoHomeSharp } from "react-icons/io5";
import { BsPhoneFill } from "react-icons/bs";
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
    <div className="hero-wrapper ">
      <div className="container d-flex align-items-center">
        <div className="header_inner py-1">(GMT +8) {currentTime}</div>
        <div
          id="lang_select"
          class="language d-flex justify-content-center align-items-center ms-2"
        >
          <img src="/assets/img/IN.png" className=" my-auto" alt="en" />
          <p className="m-0">
            <span>₹&nbsp;INR</span>&nbsp;English
          </p>
        </div>
      </div>
      <header className="border-secondary border-top ">
        <div className="container my-3 d-flex justify-content-between">
          <div>
            <a href="https://six6s6.com/af/GNp0dr3s/blackhat">
              <img
                className="logo"
                src="/assets/img/logo.png"
                alt="logo"
                srcset=""
              />
            </a>
          </div>
          <div className="d-flex align-items-center">
          
          {/* Searchbox */}
          <div style={{width:"250px", paddingRight:"10px"}} class="input-group mb-3">
             
              <input style={{marginTop:"20px", height:"35px"}} type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
              <div class="input-group-append">
              <a href="https://six6s6.com/af/GNp0dr3s/blackhat"><button style={{marginTop:"20px",height:"35px"}} class="btn btn-primary" type="button">Search</button> </a>
              </div>
             
          </div>
          {/* End Searchbox */}

           <a href="https://six6s6.com/af/GNp0dr3s/blackhat"><button className="btn  btn-2nd me-3 ">Login </button></a>
           <a href="https://six6s6.com/af/GNp0dr3s/blackhat"><button className="btn  btn-default px-4  ">Sign Up </button></a>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <div className="main-nav">
              <div className="container h-100 ps-0">
                <ul className="nav-inner back-index d-flex my-auto align-items-center ps-0">
                  <li
                    class="back-index d-flex align-items-center justify-content-center"
                    id="menu-index"
                  >
                    <a
                      class="nav-item nav-promotion d-flex justify-content-center align-items-center text-white"
                      href="https://six6s6.com/af/GNp0dr3s/blackhat"
                    >
                      <IoHomeSharp className="icon-header" />
                      <span className="border-nav"></span>
                    </a>
                  </li>
                  <li className="nav-item back-index d-flex align-items-center justify-content-center ">
                    <a
                      class="nav-promotion text-white d-flex justify-content-center align-items-center"
                      href="/"
                    >
                      <BsPhoneFill className="icon-header" />
                      <span className="border-nav"></span>
                    </a>
                  </li>

                  {navMenu.map((item, index) => (
                    <li
                      key={index}
                      className="navmenu-items d-flex align-items-center justify-content-evenly "
                    >
                      <a
                        class="nav-promotion nav-link-hover text-decoration-none text-capitalize w-100 "
                        href={item.link}
                      >
                        {item.label}
                      </a>
                      <span className="border-nav"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
