import { TickIcon } from "@/assets";
import { cn } from "@/lib/utils";
import React from "react";

function PriceCard({ packageName, features , index ,selectedPackage, setSelectedPackage }: { packageName: string; features: string[] ,index: number,selectedPackage: number, setSelectedPackage: (index: number) => void,
 }) {
  return (
    <div
      className={cn(
        " bg-white  py-[2rem] px-[1rem] lg:px-[1rem] xl:px-[3rem] flex flex-col gap-6 cursor-pointer transition-all duration-500 rounded-[6px]",
        selectedPackage === index ? "bg-[#1D4ED7] text-white" : "bg-white"
      )}
      onMouseEnter={() => setSelectedPackage(index)}
    >
      <div className=" flex gap-3">
        <div
          className={cn(
            "w-[1.9rem] h-[1.9rem] rounded-full bg-[#1D4ED7]/25 flex items-center justify-center transition-all duration-500",
            selectedPackage === index ? "bg-white/25" : ""
          )}
        >
          <div
            className={cn(
              "h-[1.25rem] w-[1.25rem] rounded-full bg-[#1D4ED7] transition-all duration-500",
              selectedPackage === index ? "bg-white" : ""
            )}
          >
            {" "}
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{packageName}</h2>
          <p className="text-xs">Package includes:</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {features.map((feature, ind) => (
          <div className="flex gap-4 mt-6" key={ind}>
            <div
              className={cn(
                "w-[1.3rem] min-w-[1.3rem] h-[1.3rem] bg-[#1D4ED7]/25  flex items-center justify-center rounded-[2px] transition-all duration-500 ",
                selectedPackage === index ? "bg-white/25" : " bg-[#1D4ED7]/25"
              )}
            >
              <TickIcon width={7} height={5} color={"#1D4ED7"} />
            </div>
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <button
        className={cn(
          "w-full h-[4.25rem] bg-[#1D4ED7] text-white text-lg font-bold transition-all duration-500 cursor-pointer ",
          selectedPackage === index
            ? "bg-white text-[#1D4ED7] hover:bg-white/80"
            : "bg-[#1D4ED7] text-white "
        )}
      >
        Start With A Free Discovery Call
      </button>
    </div>
  );
}

export default PriceCard;
