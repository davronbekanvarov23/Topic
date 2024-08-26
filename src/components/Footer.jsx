import React from "react";
import Navlinks from "./Navlinks";

function Footer() {
  return (
    <div className="align-content bg-[#333333] text-white">
      <div
        className=" p-5 flex  items-center justify-between
      "
      >
        <div className="">
          <img src="./logo_Footer.svg" alt="" />
        </div>

        <div className="flex items-center md:flex-row flex-col ">
          {" "}
          <div className="md:flex-row flex-col">
            {" "}
            <Navlinks />
          </div>
          <div className="flex">
            <img src="./phone.svg" alt="" />
            <img src="./tg.svg" alt="" />
            <img src="./insta.svg" alt="" />
            <img src="./youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
