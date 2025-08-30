import Image from "next/image";
import React from "react";
import pricingimg from "@/public/images/pricingimg.jpg";
import PriceSection from "./_components/PriceSection";
function page() {
  return (
    <div className="">
      <div className=" h-[65vh] relative z-[5] ">
        <Image
          src={pricingimg.src}
          alt="pricingimg"
          width={900}
          height={900}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E00] to-[#1E1E1E]/85  flex flex-col items-center justify-center">
          <h2 className="text-center  flex flex-col text-7xl text-white mt-32 font-semibold">
            <span className="">Choose a Plan That Tells Your</span>
            <span className="">story</span>
          </h2>
          <span className="text-center text-white text-lg mt-4">
            <p>
              Every story is unique, and so is our process. Let’s understand
              your needs and
            </p>
            <p>Create something unforgettable together</p>
          </span>
        </div>
      </div>
      <PriceSection />

      {/* <div className="absolute w-[80%] h-[70vh] bottom-110 left-[10%] z-[0] ">
        <Image
          src={footerimg.src}
          alt="footerimg"
          width={900}
          height={900}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center pl-[3rem] gap-8  ">
          <div className="flex flex-col gap-4">
            <span className="text-white text-7xl font-semibold">
              <p>Your story</p>
              <p>could be next</p>
            </span>
            <span className="text-white text-lg">
              <p>Start documenting the legacy your family will cherish </p>
              <p>forever</p>
            </span>
          </div>
          <div className="inline">
            <button className="bg-[#FBFFFE] text-black font-bold px-8 py-3 ">
              Start Your Story
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default page;
