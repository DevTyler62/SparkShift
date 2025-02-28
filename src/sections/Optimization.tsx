"use client";
import React, { useState } from "react";
import ArrowDown from "@/src/assets/arrow-down-icon.png";
import ArrowUp from "@/src/assets/arrow-up-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Optimization = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <section className="py-20">
      <div className="sm:max-w-md md:max-w-7xl mr-auto ml-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-6">
          <div className="sm:px-6">
            <h2 className="section-heading">
              SEO and Performance Optimization
            </h2>
            <div className="w-[350px]">
              <p className="mt-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </p>
            </div>
            <button className="mt-5 bg-[#A8FF35] font-semibold px-5 py-2 border-2 border-black rounded-3xl">
              Get Free Trial
            </button>
          </div>
          <div className="mx-auto md:w-[800px]">
            <div className="mb-4 cursor-pointer">
              <a
                onClick={() => {
                  if (isOpen2 === true) {
                    setIsOpen2(!isOpen2);
                  } else if (isOpen3 === true) {
                    setIsOpen3(!isOpen3);
                  } else if (isOpen4 === true) {
                    setIsOpen4(!isOpen4);
                  }
                  setIsOpen1(!isOpen1);
                }}
              >
                <div
                  className="flex items-center justify-between py-5 px-5"
                  style={{
                    backgroundColor: isOpen1 ? "#A8FF35" : "#FAFAFA",
                    fontWeight: isOpen1 ? "600" : "normal",
                    border: isOpen1 ? "1px solid black" : "none",
                  }}
                >
                  <span className="text-sm lg:text-base">
                    1. Perform keyword research to understand
                  </span>
                  {isOpen1 ? (
                    <Image src={ArrowUp} alt="Arrow up icon" />
                  ) : (
                    <Image src={ArrowDown} alt="Arrow down icon" />
                  )}
                </div>
              </a>
              <motion.div
                initial={{ height: 0 }}
                animate={
                  isOpen1
                    ? { height: "auto", visibility: "visible" }
                    : { height: 0, visibility: "hidden" }
                }
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="py-6 px-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mb-4 cursor-pointer">
              <a
                onClick={() => {
                  if (isOpen1 === true) {
                    setIsOpen1(!isOpen1);
                  } else if (isOpen3 === true) {
                    setIsOpen3(!isOpen3);
                  } else if (isOpen4 === true) {
                    setIsOpen4(!isOpen4);
                  }
                  setIsOpen2(!isOpen2);
                }}
              >
                <div
                  className="flex items-center justify-between py-5 px-5 bg-[#FAFAFA]"
                  style={{
                    backgroundColor: isOpen2 ? "#A8FF35" : "#FAFAFA",
                    fontWeight: isOpen2 ? "600" : "normal",
                    border: isOpen2 ? "1px solid black" : "none",
                  }}
                >
                  <span className="text-sm lg:text-base">
                    2. Optimize images, use caching, and minimize scripts
                  </span>
                  {isOpen2 ? (
                    <Image src={ArrowUp} alt="Arrow up icon" />
                  ) : (
                    <Image src={ArrowDown} alt="Arrow down icon" />
                  )}
                </div>
              </a>
              <motion.div
                initial={{ height: 0 }}
                animate={
                  isOpen2
                    ? { height: "auto", visibility: "visible" }
                    : { height: 0, visibility: "hidden" }
                }
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="py-6 px-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mb-4">
              <a
                onClick={() => {
                  if (isOpen1 === true) {
                    setIsOpen1(!isOpen1);
                  } else if (isOpen2 === true) {
                    setIsOpen2(!isOpen2);
                  } else if (isOpen4 === true) {
                    setIsOpen4(!isOpen4);
                  }
                  setIsOpen3(!isOpen3);
                }}
              >
                <div
                  className="flex items-center justify-between py-5 px-5 bg-[#FAFAFA]"
                  style={{
                    backgroundColor: isOpen3 ? "#A8FF35" : "#FAFAFA",
                    fontWeight: isOpen3 ? "600" : "normal",
                    border: isOpen3 ? "1px solid black" : "none",
                  }}
                >
                  <span className="text-sm lg:text-base">
                    3. Set up Google Analytics to monitor visitor behavior
                  </span>
                  {isOpen3 ? (
                    <Image src={ArrowUp} alt="Arrow up icon" />
                  ) : (
                    <Image src={ArrowDown} alt="Arrow down icon" />
                  )}
                </div>
              </a>
              <motion.div
                initial={{ height: 0 }}
                animate={
                  isOpen3
                    ? { height: "auto", visibility: "visible" }
                    : { height: 0, visibility: "hidden" }
                }
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="py-6 px-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mb-4">
              <a
                onClick={() => {
                  if (isOpen1 === true) {
                    setIsOpen1(!isOpen1);
                  } else if (isOpen2 === true) {
                    setIsOpen2(!isOpen2);
                  } else if (isOpen3 === true) {
                    setIsOpen3(!isOpen3);
                  }
                  setIsOpen4(!isOpen4);
                }}
              >
                <div
                  className="flex items-center justify-between py-5 px-5 bg-[#FAFAFA]"
                  style={{
                    backgroundColor: isOpen4 ? "#A8FF35" : "#FAFAFA",
                    fontWeight: isOpen4 ? "600" : "normal",
                    border: isOpen4 ? "1px solid black" : "none",
                  }}
                >
                  <span className="text-sm lg:text-base">
                    4. Regularly test different versions of pages
                  </span>
                  {isOpen4 ? (
                    <Image src={ArrowUp} alt="Arrow up icon" />
                  ) : (
                    <Image src={ArrowDown} alt="Arrow down icon" />
                  )}
                </div>
              </a>
              <motion.div
                initial={{ height: 0 }}
                animate={
                  isOpen4
                    ? { height: "auto", visibility: "visible" }
                    : { height: 0, visibility: "hidden" }
                }
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="py-6 px-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
