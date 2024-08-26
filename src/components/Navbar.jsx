import React from "react";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <div className=" navbar align-content py-0">
      <div className="navbar-start">
        <a href="./index.html">
          <img src="./logo.png" alt="" />
        </a>
        <p className="hidden sm:block max-w-32 w-full text-xs ml-5">
          Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi
        </p>
      </div>

      <div className="navbar-center hidden lg:flex ml-16">
        <Navlinks />
      </div>

      <div className="navbar-end">
        <a href="">
          <p className="flex flex-col font-semibold text-2xl ">+998 (33) 306 0098
            <span>Hoziroq bog'laning</span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
