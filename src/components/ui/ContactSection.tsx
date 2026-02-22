"use client";

import React from "react";
import Button from "./Button";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-12 md:mt-16 mb-12 md:mb-16 px-4">
      <h3 className="font-['Montserrat'] font-semibold text-xl md:text-2xl text-black mb-4 md:mb-6 text-center">
        Still Need Help?
      </h3>
      <Button
        onClick={() => {
          let el = document.querySelector(".siqico-close.zsiq-close-icn");
          if (!el) el = document.getElementById("zsiq_float");
          if (el) (el as HTMLElement).click();
        }}
        className="px-6 md:px-8 py-3 md:py-4 w-full max-w-71.25 h-11 md:h-12.5 font-semibold text-base md:text-lg rounded-[40px]"
      >
        Contact us
      </Button>
    </section>
  );
};

export default ContactSection;