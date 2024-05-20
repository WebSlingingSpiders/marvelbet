import React from "react";
import Image from "next/image";
import Icon1 from "../assets/img/icon-24hr.png";
import Icon2 from "../assets/img/icon-book.png";
import Icon3 from "../assets/img/icon-win.png";
import Icon4 from "../assets/img/icon-license.png";

import Safe1 from "../assets/img/safe1.png";
import Safe2 from "../assets/img/safe2.png";
import Safe3 from "../assets/img/safe3.png";

import Payment1 from "../assets/img/pay17.png";
import Payment2 from "../assets/img/pay18.png";
import Payment3 from "../assets/img/pay19.png";
import Payment4 from "../assets/img/pay20.png";
import Payment5 from "../assets/img/pay21.png";

import LogoMarvel from "../assets/img/logo.png";
import { Grid } from "swiper/modules";

const Footer = () => {
  const SafeLogos = [Safe1, Safe2, Safe3];
  const Payments = [Payment1, Payment2, Payment3, Payment4, Payment5];
  return (
    <div className=" bg-[#151515]">
      <div className="footer container mx-auto grid grid-rows-3 pb-4">
        <div className="border-b-2 border-[#6C757D] grid grid-cols-1 md:grid-cols-4 md:gap-10 py-4 px-4 md:px-0">
          <div className="flex text-white">
            <Image
              className="me-3 mb-9 w-[60px] h-[60px]"
              src={Icon1}
              alt="24hr Icon"
            ></Image>
            <div className="text-wrap leading-9">
              <h1 className="">Customer Support 24/7</h1>
              <h5 className="text-sm text-[#999]">
                Have a question? Speak to our agent online.
              </h5>
              <a href="https://six6s6.com/af/GNp0dr3s/blackhat">Contact CS</a>
            </div>
          </div>
          <div className="flex text-white">
            <Image
              className="me-3 mb-9 w-14  h-[60px]"
              src={Icon2}
              alt="24hr Icon"
            ></Image>
            <div className="text-wrap leading-9">
              <h1 className="">New Member Guide</h1>
              <h5 className="text-sm text-[#999]">5 mins guide</h5>
              <a href="https://six6s6.com/af/GNp0dr3s/blackhat">Check now</a>
            </div>
          </div>
          <div className="flex text-white">
            <Image
              className="me-3 mb-9 w-14  h-[60px]"
              src={Icon3}
              alt="24hr Icon"
            ></Image>
            <div className="text-wrap leading-9">
              <h1 className="">Live Streaming</h1>
              <h5 className="text-sm text-[#999]">
                Watch worldwide live broadcast
              </h5>
              <a href="https://six6s6.com/af/GNp0dr3s/blackhat"> Watch Now</a>
            </div>
          </div>
          <div className="flex text-white">
            <Image
              className="me-3 mb-9 w-14  h-[60px]"
              src={Icon4}
              alt="24hr Icon"
            ></Image>
            <div className="text-wrap leading-9">
              <h1 className="">MarvelBet Blog</h1>
              <h5 className="text-sm text-[#999]">
                Check out the latest Marvelbet matches and news
              </h5>
              <a href="/article">Check now</a>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#6C757D] grid grid-cols-1 md:grid-cols-4 md:gap-5 py-4 px-4 md:px-0 footer-logo">
          <div className="flex items-center">
            <div className="text-wrap">
              <h5 className="text-sm pb-4 text-[#999]">Responsible Gaming</h5>
              {SafeLogos.map((logos, index) => (
                <a className="inline-block mr-5" href="" key={index}>
                  <Image className="saturate-0" src={logos} alt="safes"></Image>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="text-wrap">
              <h5 className="text-sm pb-4 text-[#999]">Payment Methods</h5>
              {Payments.map((payments, index) => (
                <a className="inline-block mr-5" href="" key={index}>
                  <Image
                    className="saturate-0"
                    src={payments}
                    alt="safes"
                  ></Image>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-wrap">
              <h5 className="text-sm pb-4 text-[#999]">Community Websites</h5>
              {SafeLogos.map((logos, index) => (
                <a className="inline-block mr-5" href="" key={index}>
                  <Image className="saturate-0" src={logos} alt="safes"></Image>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="grid mx-3 md:mx-0 grid-cols-1 md:grid-cols-2 ">
            <div className="flex justify-center md:justify-start ">
              <Image
                src={LogoMarvel}
                width={150}
                height={50}
                alt="marvellogo"
              ></Image>
            </div>
            <div className="flex text-white flex-col mt-10 md:mt-0 items-center md:items-end">
              <div className="flex justify-end">
                <div className=" border-r-2 px-2">
                  <a href="https://six6s6.com/af/GNp0dr3s/blackhat">
                    Affiliate
                  </a>
                </div>
                <div className=" border-r-2 px-2">
                  <a href="https://six6s6.com/af/GNp0dr3s/blackhat">
                    Responsible Gaming
                  </a>
                </div>
                <div className=" border-r-2 px-2">
                  <a href="https://six6s6.com/af/GNp0dr3s/blackhat">About Us</a>
                </div>
              </div>
              <div className="flex justify-end text-[#999] text-sm ">
                <p>© 2023 MarvelBet Copyrights. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
