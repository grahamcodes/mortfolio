import React, { useState, useEffect } from "react";

import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin} from "../Icons";
import { AiOutlineMail } from "react-icons/ai";

const TextLink = ({ text, href }: any) => {
  return (
    <a
      href={href}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-sludge duration-100 hover:bg-creme"
    >
      {text}
    </a>
  );
};

const Header: React.FC = () => {
  const [topOfPage, setTopOfPage] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setTopOfPage(false);
      } else {
        setTopOfPage(true);
      }
    });
  }, []);

  return (
    <header
      className={`flex flex-row items-center justify-center sm:justify-between py-8 font-jost`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" href="#" />
        <TextLink text="Projects" href="#projects" />
        <TextLink text="Skills" href="#skills" />  
        <Link href="/documents/resume.pdf" passHref>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-sludge duration-100 hover:bg-creme"
          >
            Resume
          </a>
        </Link>
      </p>

      {/* <div className="hidden sm:flex sm:flex-row sm:gap-x-2"> */}
      <div className="flex flex-row gap-x-2">
        
        <Link href="https://www.linkedin.com/in/grahamreveritt/" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="rounded-lg border-2 border-sludge bg-sludge p-2 text-2xl text-white hover:border-creamsicle"
          >
            <AiOutlineLinkedin />
          </a>
        </Link>

        <Link href="https://github.com/grahamre" passHref>
          <a
            className="rounded-lg border-2 border-sludge bg-sludge p-2 text-2xl text-white hover:border-creamsicle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github-repo"
          >
            <VscGithubAlt />
          </a>
        </Link>

        <Link href="mailto:graham.everitt@gmail.com" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-sludge bg-sludge p-2 text-2xl text-white hover:border-creamsicle"
          >
            <AiOutlineMail />
          </a>
        </Link>

      </div>
    </header>
  );
};

export default Header;
