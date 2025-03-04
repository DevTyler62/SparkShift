import React from "react";
import LongLine from "@/src/assets/long-line.png";
import Facebook from "@/src/assets/facebook.svg";
import Twitter from "@/src/assets/twitter.svg";
import Linkedin from "@/src/assets/linkedin.svg";
import Instagram from "@/src/assets/instagram.svg";
import LeftGradient from "@/src/assets/left-side-gradient.png";
import RightGradient from "@/src/assets/right-side-gradient.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-20">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-white text-5xl mb-4 md:text-7xl lg:text-8xl">
            Let&apos;s Collaborate
          </h1>
          <Image src={LongLine} alt="Long dividing line" />
        </div>
        <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
          <div>
            <div className="mb-12">
              <h4 className="footer-heading">Address</h4>
              <p className="text-white md:w-[250px]">
                473 Alton Ave. San Bernardino, CA 92404
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={Facebook} alt="Facebook logo" />
              <Image src={Twitter} alt="Twitter logo" />
              <Image src={Linkedin} alt="Linkedin logo" />
              <Image src={Instagram} alt="Instagram logo" />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="flex flex-col gap-2">
                <li className="text-white">About</li>
                <li className="text-white">Features</li>
                <li className="text-white">Pricing</li>
                <li className="text-white">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="flex flex-col gap-2">
                <li className="text-white">SEO Tools</li>
                <li className="text-white">Marketplace</li>
                <li className="text-white">Google Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Help Center</h4>
              <ul className="flex flex-col gap-2">
                <li className="text-white">Community</li>
                <li className="text-white">Contact</li>
                <li className="text-white">Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={LeftGradient}
          alt="Gradient image on the left side"
          className="absolute -top-[350px]"
        />
        <Image
          src={RightGradient}
          alt="Gradient image on the left side"
          className="absolute -right-0 -top-[600px] md:-top-[400px]"
        />
      </div>
    </footer>
  );
};
