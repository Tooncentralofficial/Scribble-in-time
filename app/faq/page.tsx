import React from 'react'
import faqimg from "@/public/images/faqimg.jpg";
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from '@/constants';
function FaqPage() {
  return (
    <div>
      <div className=" h-[65vh] relative z-[5] ">
        <Image
          src={faqimg.src}
          alt="pricingimg"
          width={900}
          height={900}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
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

      <div className="px-[1rem] md:px-[5rem] lg:px-[6rem] xl:px-[8.2rem] py-[2rem]">
        <Accordion type="multiple" className="w-full space-y-3 mt-10 ">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-md  px-4  border-none"
            >
              <AccordionTrigger className="text-left py-4 font-semibold text-black data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqPage