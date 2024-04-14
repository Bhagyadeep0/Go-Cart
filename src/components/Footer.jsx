import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <ScrollReveal>
    <section className=" bg-yellow-300 divide-top h-full py-10">
      <div className="flex flex-col md:flex-row gap-5 justify-between h-full container mx-auto py-5 r ">
        {/* logo*/}
        <div className="cursor-pointer">
          <img src="/Logo.svg" alt="logo" />
        </div>
        {/* quick links */}
        <div className="uppercase space-y-3 ">
          <h3 className="h3 ">Links</h3>
          <p className="p text-[15px] cursor-pointer">Something</p>
          <p className="p text-[15px] cursor-pointer">Something</p>
          <p className="p text-[15px] cursor-pointer">Something</p>
          <p className="p text-[15px] cursor-pointer">Something</p>
        </div>
        <div className="uppercase space-y-3">
          <h3 className="h3">contact</h3>
          <p className="p text-[15px] cursor-pointer">mail</p>
          <p className="p text-[15px] cursor-pointer">number</p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Footer;
