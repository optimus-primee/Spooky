import React from "react";
import arrow from "../assets/arrow.png";
function Scroll() {
  return (
    <div>
      <div className="w-[100%] h-[150px] bg-secondary flex justify-center items-center gap-20 pt-3 ">
        <div className=" relative">
          <div className="">
            <h4 className="font-mont text-[50px] font-black text-white uppercase">
              Dont Scroll
            </h4>
          </div>
          <div className="absolute top-[27px] left-[52px]">
            <div className="relative w-[20px]">
              <div className="w-[20px] h-[20px] bg-primary rounded-full "></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute top-0 -right-[1px] "></div>
            </div>
          </div>
          <div className="absolute top-[27px] left-[289px]">
            <div className="relative w-[20px]">
              <div className="w-[20px] h-[20px] bg-primary rounded-full "></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute top-0 -right-[1px] "></div>
            </div>
          </div>
          <div>
            <img src={arrow} className="w-[130px] relative left-[380px] -top-5" />
          </div>
        </div>
        <div>
          <div className="rotate-[9deg]">
            <h4 className="font-christmas text-primary text-[24px] font-bold -mt-4">
              Its about to get Spooky!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
