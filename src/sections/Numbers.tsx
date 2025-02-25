import React from "react";
import subIcon from "@/src/assets/sub-icon.png";
import jobIcon from "@/src/assets/job-icon.png";
import yearsIcon from "@/src/assets/years-icon.png";
import LineH from "@/src/assets/line-h.png";
import LineV from "@/src/assets/line-v.png";
import Image from "next/image";

const numbersData = [
  {
    id: 0,
    title: "800K",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod`,
    icon: subIcon,
    iconAlt: "Subscriber Icon",
    iconText: "Subscriber",
  },
  {
    id: 1,
    title: "96%",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod`,
    icon: jobIcon,
    iconAlt: "Job Icon",
    iconText: "Job Success",
  },
  {
    id: 2,
    title: "15+",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod`,
    icon: yearsIcon,
    iconAlt: "Years Icon",
    iconText: "Years of Experience",
  },
];

function CheckID({ id }: { id: any }) {
  if (id === 0 || id === 1) {
    return (
      <div className="mt-10 mb-10 flex justify-center items-center">
        <Image src={LineH} alt="Horizontal line" className="md:hidden" />
        <Image
          src={LineV}
          alt="Vertical line"
          className="sm:hidden md:block md:mr-5"
        />
      </div>
    );
  }
}

export const Numbers = () => {
  return (
    <section className="bg-white pt-24 pb-24">
      <div className="mr-auto ml-auto px-10">
        <div className="md:flex items-center justify-evenly gap-4">
          {numbersData.map(({ id, title, desc, icon, iconAlt, iconText }) => (
            <React.Fragment key={id}>
              <div key={id}>
                <h1 className="text-7xl md:text-8xl lg:text-9xl">{title}</h1>
                <div className="md:max-w-[300px]">
                  <p className="text-[#6B7280] mt-5">{desc}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 bg-[#A8FF35] w-fit pt-1 pb-1 pr-2 pl-2 border-2 border-black rounded-3xl">
                  <Image
                    src={icon}
                    alt={iconAlt}
                    className="inline-flex justify-center items-center"
                  />
                  <p>{iconText}</p>
                </div>
              </div>
              <CheckID id={id} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
