import Image from "next/image";
import Logo from "@/src/assets/sparkshift-logo.png";
import ArrowIcon from "@/src/assets/icon.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="container mt-5">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Spark Shift logo" width={125} height={27} />
          <nav className="hidden md:text-white md:flex gap-10">
            <a href="#">Homepage</a>
            <a href="#">About</a>
            <a href="#" className="inline-flex gap-1 items-center">
              <span>Services</span>
              <Image
                src={ArrowIcon}
                alt="Arrow down icon"
                className="h-5 w-5 inline-flex justify-center items-center"
              />
            </a>
            <a href="#" className="inline-flex gap-1 items-center">
              <span>Pages</span>
              <Image
                src={ArrowIcon}
                alt="Arrow down icon"
                className="h-5 w-5 inline-flex justify-center items-center"
              />
            </a>
          </nav>
          <button className="bg-[#A8FF35] text-black px-5 py-[10px] rounded-3xl font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
