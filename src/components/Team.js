import React from "react";
import founder from "../assets/founder.png";

function Team() {
  return (
    <div>
      <div className="py-20">
        <h4 className="font-mplus text-[50px] uppercase text-secondary font-extrabold text-center ">
          Meet The team
        </h4>
        <div className="flex justify-between items-center px-32">
          <div className="w-[250px] h-[365px] bg-[#ffffff0b] border border-[#1EB3D5] rounded-[28px] flex flex-col items-center pt-3">
            <img className="w-[186px]" src={founder} />
            <h4 className="font-mplus font-bold text-[20px] text-white mt-1">
              Founder/Artist
            </h4>
            <h6 className="font-mplus text-white text-[14px] mt-1">
              John Olatunji
            </h6>
            <p className="w-[150px] text-[10px] text-center text-white mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
            <hr className="w-[60px] border-[2px] border-[#1EB3D5] mt-2" />
          </div>
          <div className="w-[250px] h-[365px] bg-[#ffffff0b]  rounded-[28px] flex flex-col items-center pt-3">
            <img className="w-[186px]" src={founder} />
            <h4 className="font-mplus font-bold text-[20px] text-white mt-1">
              Founder/Artist
            </h4>
            <h6 className="font-mplus text-white text-[14px] mt-1">
              John Olatunji
            </h6>
            <p className="w-[150px] text-[10px] text-center text-white mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
            <hr className="w-[60px] border-[2px] border-[#EE0661] mt-2" />
          </div>
          <div className="w-[250px] h-[365px] bg-[#ffffff00] border border-[#582B7C] rounded-[28px] flex flex-col items-center pt-3">
            <img className="w-[186px]" src={founder} />
            <h4 className="font-mplus font-bold text-[20px] text-white mt-1">
              Founder/Artist
            </h4>
            <h6 className="font-mplus text-white text-[14px] mt-1">
              John Olatunji
            </h6>
            <p className="w-[150px] text-[10px] text-center text-white mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
            <hr className="w-[60px] border-[2px] border-[#ffffff] mt-2" />
          </div>
          <div className="w-[250px] h-[365px] bg-[#ffffff0b] border border-[#DFE6FF] rounded-[28px] flex flex-col items-center pt-3">
            <img className="w-[186px]" src={founder} />
            <h4 className="font-mplus font-bold text-[20px] text-white mt-1">
              Founder/Artist
            </h4>
            <h6 className="font-mplus text-white text-[14px] mt-1">
              John Olatunji
            </h6>
            <p className="w-[150px] text-[10px] text-center text-white mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
            <hr className="w-[60px] border-[2px] border-[#DFE6FF] mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
