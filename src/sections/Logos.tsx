"use client";
import React from "react";
import Logo1 from "@/src/assets/logo-1.png";
import Logo2 from "@/src/assets/logo-2.png";
import Logo3 from "@/src/assets/logo-3.png";
import Logo4 from "@/src/assets/logo-4.png";
import Logo5 from "@/src/assets/logo-5.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Logos = () => {
  return (
    <div className="sm:my-12 md:my-20 py-12 border-y-2 border-y-[#D1D5DB]">
      <div className="flex sm:max-w-md md:max-w-7xl mr-auto ml-auto px-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-20 flex-none pr-20"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image src={Logo1} alt="Logo 1" className="company-logos" />
          <Image src={Logo2} alt="Logo 2" className="company-logos" />
          <Image src={Logo3} alt="Logo 3" className="company-logos" />
          <Image src={Logo4} alt="Logo 4" className="company-logos" />
          <Image src={Logo5} alt="Logo 5" className="company-logos" />
          {/* Second set of logos for animation */}
          <Image src={Logo1} alt="Logo 1" className="company-logos" />
          <Image src={Logo2} alt="Logo 2" className="company-logos" />
          <Image src={Logo3} alt="Logo 3" className="company-logos" />
          <Image src={Logo4} alt="Logo 4" className="company-logos" />
          <Image src={Logo5} alt="Logo 5" className="company-logos" />
        </motion.div>
      </div>
    </div>
  );
};
