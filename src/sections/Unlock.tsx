"use client";
import React from "react";
import Meeting from "@/src/assets/meeting.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Unlock = () => {
  return (
    <section className="bg-[#FAFAFA] sm:pt-14 sm:pb-14 pt-5 md:mb-24">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <div className="md:flex justify-between items-center gap-10">
          <div className="md:w-[527px]">
            <h2 className="section-heading">
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
      </motion.div>
    </section>
  );
};
