import Image from "next/image";
import LeftGradient from "@/src/assets/left-side-gradient.png";
import RightGradient from "@/src/assets/right-side-gradient.png";
import React from "react";

export const Hero = () => {
  return (
    <section className="pt-32 md:pt-34 lg:pt-56 h-svh">
      <div className="container md:w-[1100px]">
        <div className="flex items-center justify-center flex-col">
          <h1 className="pb-1.5 text-[40px] leading-10 md:text-7xl md:leading-[100px] text-center font-medium bg-gradient-to-br from-white from-0% to-[#9B9B9B] to-100% text-transparent bg-clip-text">
            Grow Your Business with Proven Marketing Strategies
          </h1>
          <div className="md:w-[550px]">
            <p className="mt-10 tracking-tight leading-6 text-white text-center">
              We specialize in creating marketing campaigns that increase
              visibility, generate leads, and drive business growth
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <button className="btn-fill">Get Free Trial</button>
            <button className="btn text-[#A8FF35] border-2 border-[#A8FF35]">
              Watch A Tutorial
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={LeftGradient}
          alt="Gradient image on the left side"
          className="absolute -top-52"
        />
        <Image
          src={RightGradient}
          alt="Gradient image on the left side"
          className="absolute -right-0 -top-96"
        />
      </div>
    </section>
  );
};
