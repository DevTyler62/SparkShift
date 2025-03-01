import React from "react";
import LongLine from "@/src/assets/long-line.png";
import Facebook from "@/src/assets/facebook.svg";
import Twitter from "@/src/assets/twitter.svg";
import Linkedin from "@/src/assets/linkedin.svg";
import Instagram from "@/src/assets/instagram.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-20">
      <div className="container">
        <div>
          <h1 className="text-white">Let's Collaborate</h1>
          <Image src={LongLine} alt="Long dividing line" />
        </div>
        <div>
          <div>
            <h4>Address</h4>
            <p className="text-white">
              Street Dahlia Number 06, Malang, Indonesia, 64182
            </p>
            <div className="flex">
              <Image src={Facebook} alt="Facebook logo" />
              <Image src={Twitter} alt="Twitter logo" />
              <Image src={Linkedin} alt="Linkedin logo" />
              <Image src={Instagram} alt="Instagram logo" />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="text-white">Company</h4>
              <ul>
                <li className="text-white">About</li>
                <li className="text-white">Features</li>
                <li className="text-white">Pricing</li>
                <li className="text-white">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white">Services</h4>
              <ul>
                <li className="text-white">SEO Tools</li>
                <li className="text-white">Marketplace</li>
                <li className="text-white">Google Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white">Help Center</h4>
              <ul>
                <li className="text-white">Community</li>
                <li className="text-white">Contact</li>
                <li className="text-white">Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
