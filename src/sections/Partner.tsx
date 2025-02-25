import React from "react";
import Marketing from "@/src/assets/marketing-icon.png";
import Analysis from "@/src/assets/analysis-icon.png";
import Recycle from "@/src/assets/recycle-icon.png";
import ArrowRight from "@/src/assets/arrow-right-icon.png";
import Image from "next/image";

export const Partner = () => {
  return (
    <section className="pb-14 sm:pt-14">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight md:leading-[3rem] lg:leading-[4rem] text-center">
            Partner with is to build powerful marketing campaigns that reach
            your target audience
          </h2>
          <div className="md:w-[680px]">
            <p className="mt-8 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
      <div className="sm:max-w-md md:max-w-7xl mr-auto ml-auto px-8">
        <div className="flex sm:flex-col md:flex-row gap-5 lg:gap-12  pt-14">
          <div className="bg-[#FAFAFA] px-12 py-16 flex flex-col gap-8">
            <Image src={Marketing} alt="Marketing card Icon" />
            <div className="flex gap-3 items-center">
              <span className="text-2xl font-medium">Marketing</span>
              <Image
                src={ArrowRight}
                alt="Arrow right icon"
                className="h-5 w-5"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="bg-[#FAFAFA] px-12 py-16 flex flex-col gap-8">
            <Image src={Analysis} alt="Analysis card Icon" />
            <div className="flex gap-3 items-center">
              <span className="text-2xl font-medium">Analysis</span>
              <Image
                src={ArrowRight}
                alt="Arrow right icon"
                className="h-5 w-5"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="bg-[#FAFAFA] px-12 py-16 flex flex-col gap-8">
            <Image src={Recycle} alt="Recycle card Icon" />
            <div className="flex gap-3 items-center">
              <span className="text-2xl font-medium">Recycle</span>
              <Image
                src={ArrowRight}
                alt="Arrow right icon"
                className="h-5 w-5"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
