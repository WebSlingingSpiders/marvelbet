import React from "react";
import Image from "next/image";
import btnlogo from "../assets/img/cs-title-en.png";
import Link from "next/link";
export default function button24hr() {
  return (
    <div>
      <Link
        href="https://t.me/customrsservic"
        className="sideBtn rounded-l-md mt-1.5"
      >
        <Image width={36} height={37} src={btnlogo} alt="btnlogo"></Image>
      </Link>
    </div>
  );
}
