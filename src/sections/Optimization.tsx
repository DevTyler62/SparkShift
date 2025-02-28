"use client";
import React, { useState } from "react";
import ArrowDown from "@/src/assets/arrow-down-icon.png";
import ArrowUp from "@/src/assets/arrow-up-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Item {
  id: string;
  title: string;
  text: string;
  isOpen: any;
  onClick: any;
}

const AccordionItem = ({ id, title, text, isOpen, onClick }: Item) => {
  return (
    <div key={id} className="mb-4 cursor-pointer">
      <a id={id} onClick={() => onClick(id)}>
        <div
          className="flex items-center justify-between py-5 px-5"
          style={{
            backgroundColor: isOpen ? "#A8FF35" : "#FAFAFA",
            fontWeight: isOpen ? "600" : "normal",
            border: isOpen ? "1px solid black" : "none",
          }}
        >
          <span className="text-sm lg:text-base">{title}</span>
          {isOpen ? (
            <Image src={ArrowUp} alt="Arrow up icon" />
          ) : (
            <Image src={ArrowDown} alt="Arrow down icon" />
          )}
        </div>
      </a>
      <motion.div
        initial={{ height: 0 }}
        animate={
          isOpen
            ? { height: "auto", visibility: "visible" }
            : { height: 0, visibility: "hidden" }
        }
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="py-6 px-6">
          <p>{text}</p>
        </div>
      </motion.div>
    </div>
  );
};

export const Optimization = () => {
  const items = [
    {
      id: "1",
      title: "1. Perform keyword research to understand",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: "2",
      title: "2. Optimize images, use caching, and minimize scripts",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: "3",
      title: "3. Set up Google Analytics to monitor visitor behavior",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      id: "4",
      title: "4. Regularly test different versions of pages",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

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
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}
                isOpen={openItemId === item.id}
                onClick={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
