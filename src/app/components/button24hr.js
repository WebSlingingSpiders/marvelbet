import React from "react";
import Image from "next/image";
import btnlogo from "../assets/img/cs-title-en.png";

export default function button24hr() {
  return (
    <div>
      <button className="sideBtn rounded-l-md mt-1.5">
        <Image width={36} height={37} src={btnlogo} alt="btnlogo"></Image>
      </button>
    </div>
  );
}
