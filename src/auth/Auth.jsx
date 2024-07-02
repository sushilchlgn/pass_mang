import React from "react";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  return (
    <div className="p-4 mt-4 border-2 border-black rounded-3xl w-96 h-96 m-auto">
      <div className="w-80 h-14 ">
        <ul className="p-4 flex flex-row ">
          <li className=" text-lg text-center text-white w-40 h-10 rounded-lg bg-red-600 ">
            Register
          </li>
          <li className=" text-lg text-center text-white w-40 h-10 rounded-lg bg-red-600 ">
            login
          </li>
        </ul>
        <Register />
      </div>
      {/* <Login /> */}
    </div>
  );
};

export default Auth;
