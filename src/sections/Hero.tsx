"use client";
import Image from "next/image";
import LeftGradient from "@/src/assets/left-side-gradient.png";
import RightGradient from "@/src/assets/right-side-gradient.png";
import Person1 from "@/src/assets/person-1.png";
import Person2 from "@/src/assets/person-2.png";
import Star from "@/src/assets/star.png";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="pt-20 sm:pb-52 md:pb-[260px] lg:pt-48 bg-black">
      <div className="container md:w-[1100px]">
        <motion.div
          className="flex items-center justify-center flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-5 mb-4">
            <div className="flex gap-2 items-center">
              <Image
                src={Person1}
                alt="Picture of a person"
                className="rounded-[50%]"
              />
              <Image
                src={Person2}
                alt="Picture of a person"
                className="rounded-[50%]"
              />
              <Image
                src={Person1}
                alt="Picture of a person"
                className="rounded-[50%]"
              />
            </div>
            <div className="inline-flex items-center gap-1">
              <Image src={Star} alt="Star" />
              <Image src={Star} alt="Star" />
              <Image src={Star} alt="Star" />
              <Image src={Star} alt="Star" />
              <Image src={Star} alt="Star" />
              <p className="tracking-tight leading-6 text-white text-center font-medium">
                (4.9/5 Star Rating)
              </p>
            </div>
          </div>
          <h1 className="pb-1.5 text-[40px] leading-10 md:text-7xl md:leading-[100px] text-center font-medium bg-gradient-to-br from-white from-0% to-[#9B9B9B] to-100% text-transparent bg-clip-text">
            Grow Your Business with Proven Marketing Strategies
          </h1>
          <div className="md:w-[550px]">
            <p className="mt-8 tracking-tight leading-6 text-white text-center">
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
        </motion.div>
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
