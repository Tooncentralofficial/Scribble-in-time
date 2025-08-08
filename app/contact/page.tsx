import React from 'react'
import contactImg from '@/public/images/contactus.jpg'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
function ContactPage() {
  return (
    <div className="pt-[7rem] px-[1rem] md:px-[2.5rem] lg:px-[4.3rem] pb-[2rem] ">
      <div className="flex gap-[2rem] flex-col md:flex-row">
        <div className="w-full h-[24rem]  md:w-[35%] md:h-[47rem] ">
          <Image src={contactImg} alt="contact us" width={500} height={900} style={{ objectFit: "cover", objectPosition: "right",width:"100%",height:"100%" }} />
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h3 className=" text-2xl font-bold">Send a Message</h3>
          <form className="flex flex-col gap-[1rem] ">
            <aside className="flex gap-3 flex-col">
              <label htmlFor="name" className="font-bold">Name:</label>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    id="name"
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    id="name"
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email Address:</label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                id="message"
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone">Phone Number:</label>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                id="phone"
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <aside className="flex gap-3 flex-col">
              <label htmlFor="gender">Gender</label>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Gender"
                    id="gender"
                    className="border-[1px] border-[#817F82]"
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full border-[1px] border-[#817F82]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-3">
              <label>Subject of the Memoir</label>
              <Input
                type="text"
                placeholder="e.g yourslef, your mom, your dad"
                id="subject"
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Main Themes to cover</label>
              <Input
                type="text"
                placeholder="e.g Overcoming adversity, adventure, Love story"
                id="themes"
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Key Life Event to Inclue</label>
              <Input
                type="text"
                placeholder="e.g childhood, education, significant relationships "
                id="themes"
                className="border-[1px] border-[#817F82]"
              />
            </div>
            <RadioGroup defaultValue="option-one" className='flex gap-[3.5rem]'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="family-friends"
                  id="option-one"
                  className="bg-[#1D4ED7]"
                />
                <label htmlFor="option-one">Family and Friends</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="public"
                  id="option-two"
                  className="bg-[#1D4ED7]  "
                />
                <label htmlFor="option-two">Public</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="specific-group"
                  id="option-three"
                  className="bg-[#1D4ED7]  "
                />
                <label htmlFor="option-three">Specific Group</label>
              </div>
            </RadioGroup>
            <button className='bg-[#1D4ED7] text-white p-3 rounded-[12.5px]'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage