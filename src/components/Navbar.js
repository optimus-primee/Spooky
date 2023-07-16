import React from "react";
import logo from "../assets/logo.png";
import Button from "./button/button";
function Navbar() {
  return (
    <div>
      <div className="px-14 flex justify-between items-center">
        <div>
          <img src={logo} className="w-[80px]" alt="logo" />
        </div>
        <div>
          <ul className="font-mont font-bold flex text-[16px] text-white">
            <li>Discord &nbsp; | &nbsp; </li>
            <li>Twitter &nbsp; | &nbsp;</li>
            <li>Opensea &nbsp; | &nbsp;</li>
            <li>Lookrare </li>
          </ul>
        </div>
        <div>
          <Button
            buttonText="Connect Wallet"
            width="150px"
            backgroundColor="#EE0661"
            height="38px"
            borderRadius="8px"
            fontSize="12px"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
