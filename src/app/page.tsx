"use client";

import React from "react";
import HelpSearcher from "@/components/ui/HelpSearcher";
import Link from "next/link";
import { helpSections } from "@/components/icons/help-center";
import Faq from "@/components/ui/Faq";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    outline:
      "bg-background text-primary border border-transparent hover:bg-background-dark focus:ring-primary",
    ghost: "text-black hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className=" mx-auto">
        <HelpSearcher />

        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {helpSections.map((section, index) => (
              <Link href={section.route} key={`help-center-sections-${index}`}>
                <div className="bg-background h-48 md:h-72 flex flex-col items-center justify-center p-4 md:p-6 text-center hover:bg-background-dark hover:text-white cursor-pointer rounded-lg transition-all duration-500 ease-in-out">
                  <div className="mb-3 md:mb-6">{section.icon}</div>
                  <h3 className="font-medium text-lg md:text-2xl text-primary mb-2 md:mb-3">
                    {section.title}
                  </h3>
                  <p
                    className="font-inter font-medium text-sm md:text-md text-black leading-4 md:leading-5"
                    dangerouslySetInnerHTML={{
                      __html: section.description || "",
                    }}
                  ></p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-24">
          <div className="container px-4 sm:px-6 ">
            <h1 className="text-primary text-2xl md:text-4xl font-black mb-6 md:mb-8">
              Frequently asked questions
            </h1>
            <Faq />
          </div>
        </div>

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
      </div>
    </div>
  );
}
