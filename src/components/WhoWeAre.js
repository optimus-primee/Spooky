import React from "react";
import nft from "../assets/nft1.png";

function WhoWeAre() {
  return (
    <div>
      <div className="mt-20 px-28  flex justify-between items-center ">
        <div className="">
          <div>
            <h3 className="font-christmas text-secondary text-[28px] uppercase font-bold mb-4">
              Who we are
            </h3>
            <h5 className="font-mplus text-[16px] text-white w-[300px]">
              Spooky Koalas Family is a collection of 3,033 Spooky weird
              characters. Our project is a community-driven project is aimed at
              developing a brand that represents the values of our community.
            </h5>
          </div>
          <div className="mt-8">
            <h3 className="font-christmas text-secondary text-[28px] w-[200px] uppercase font-bold">
              why Join the family?
            </h3>
            <h5 className="font-mplus text-[16px] text-white w-[380px] mt-4">
              Holding a piece gives you the right to use it for any commercial
              purposes.
            </h5>
            <h5 className="font-mplus text-[16px] text-white w-[380px] my-5">
              SKF Holders will receive full access to exclusive drops,
              experiences, and more.
            </h5>
            <h5 className="font-mplus text-[16px] text-white w-[380px]">
              As a holder, you get full access to the membership channel on our
              Discord and support on Projects.
            </h5>
          </div>
        </div>
        <div className="">
          <img src={nft} />
        </div>
      </div>
      <div className="flex justify-between w-[100%] items-center"></div>
    </div>
  );
}

export default WhoWeAre;
