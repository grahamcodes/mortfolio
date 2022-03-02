import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Icons";

const About = () => {
  return (
    <div className="my-8 flex flex-col sm:flex-row items-center justify-between gap-8 px-10 font-sen">
      <div className="sm:w-2/3">
        <p className="text-3xl font-bold text-white">Graham Everitt</p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Full Stack Dev | Fresh Grad | Stand-up Fella
        </p>

        <p className="mt-4 text-gray-400 text-justify">
          Hi there, I'm Graham. I'm a full stack developer and recent grad of Computer Programming at Algonquin College. 
          I am based out of Ottawa, Ontario. Some call it the city that fun forgot, but I've had fun here at least twice, so that can't be true. 
          This website is a simple showcase of my projects that I've been working on and a list of some of the skills I have acquired along the way. 
          Welcome, and enjoy! 
        </p>
      </div>

      <div className="my-8">
        <Image
          src="/assests/avatar.jpeg"
          width="200p"
          height="200p"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
