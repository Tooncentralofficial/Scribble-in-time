import React from "react";
import { FooterLogo } from "@/assets";
import { socialIcons } from "@/constants";
import Link from "next/link";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <div
      className="px-[1rem] md:px-[2rem] lg:px-[3rem] xl:px-[5.4rem] h-full md:h-[41.5rem]  bg-[#12141D] text-white py-[2rem] flex flex-col
    gap-5 justify-end"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="flex flex-col gap-4">
          <FooterLogo width={166} height={29} />
          <p>Email: contact.ascribbleintime@gmail.com</p>
          <p className="text-[#B9B3B3]">
            Preserving African stories, one voice at a time.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className="w-[2.3rem] h-[2.3rem] bg-[#4B4B4B] rounded-full flex items-center justify-center"
                  key={index}
                >
                  <Link href={item.href}>
                    <Icon width={14} height={14} />
                  </Link>
                </div>
              );
            })}

            <div className=""></div>
          </div>
        </div>
        <div className="flex gap-5 lg:gap-10 flex-col md:flex-row ">
          <div className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Company</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#B9B3B3] ">
                <li>Service</li>
                <li>Testimonials</li>
                <li>Portfolios</li>
                <li>Writers</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">About</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#B9B3B3] ">
                <li>Packages</li>
                <li>How it works</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Resources</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#B9B3B3] ">
                <li>Blog</li>
                <li>FAQs</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg bg">Subscribe to our Newsletter</p>
            <span className="inline gap-4 relative h-[3.4rem]  w-[17rem]">
              <Input
                className="bg-white w-[17rem]  h-full text-black outline-none border-none ring-0"
                placeholder="Enter email address"
              />
              <button className="bg-[#1D4ED7] h-full  px-4 py-2 absolute right-0 top-0 rounded-r-[8px] cursor-pointer ">
                Subscribe
              </button>
            </span>
          </div>
        </div>
      </div>
      <Separator className="bg-[#8A8A8A] mt-10 hidden lg:block" />

      <p className="text-center text-sm text-[#8A8A8A]">
        © Copyright 2025, All Rights Reserved by A Scribble in Time
      </p>
    </div>
  );
}

export default Footer;
