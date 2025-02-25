import React from "react";
import Meeting from "@/src/assets/meeting.png";
import Image from "next/image";

export const Unlock = () => {
  return (
    <section className="bg-[#FAFAFA] sm:pt-14 sm:pb-14 pt-5 md:mb-24">
      <div className="container">
        <div className="md:flex justify-between items-center gap-10">
          <div className="md:w-[527px]">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight md:leading-[3rem] lg:leading-[4rem]">
              Unlock Your Brands Full Potential with Expert Marketing Solutions
            </h2>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="sm:hidden md:block md:relative md:h-[300px] lg:h-[400px] w-[351px]">
            <Image
              src={Meeting}
              alt="Meeting image"
              className="absolute top-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
