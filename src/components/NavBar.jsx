import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center w-11/12 mx-10 px-4 h-14">
      <div className="logo font-bold cursor-pointer">Pass Mang</div>
      <ul className="">
        <li className="flex gap-9 m-auto">
          <a className="hover:font-bold" href="">
            Home
          </a>
          <a className="hover:font-bold" href="">
            About
          </a>
          <a className="hover:font-bold" href="">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
