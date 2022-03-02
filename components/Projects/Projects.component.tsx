import React, { useState } from "react";

const Projects: React.FC = () => {

  const [description, setDescription] = useState("Click a project and I'll tell you all about it!");
  const [projectName, setProjectName] = useState("My Projects");
  const [link, setLink] = useState("");
  const [selected, setSelected] = useState(false);

  const projects = [
    {
      title: "HabsGrudgeBot",
      content: "This bot monitors Reddit comments on the Montreal Canadiens subreddit, hunting for target names and responding accordingly when these names are mentioned. This project is silly and quite useless, however it has taken on a life of its own. Currently in construction is a front and back end allowing for an administrator to CRUD targets and responses. Built using Python, PRAW, PostgreSQL, and JS.",
      link: "https://github.com/grahamcodes/HabsGrudgeBot"
    },
    {
      title: "NASA Image of the Day",
      content: "This is an Android mobile app that pulls data from NASA's Astronomy Picture of the Day API. The UI shows the daily image and allows the user to view past images via calendar selection. The user may save favorite images. I had a lot of fun with this project and progressed beyond the requirements with some personal goals involving animated backgrounds.",
      link: "https://github.com/grahamcodes/NASA_IotD"
    },
    {
      title: "DrawnToYou",
      content: "This is a Java based web app programmed using servlets and MVC. The concept is that of an art-sharing social media platform. This early stage involves user handling and personalized curated profile pages. Initiated as a school project introducing us to design patterns, I am invested in the concept and eager to recreate this with a more modern approach to web-development. Please don't judge the styling too harshly as it was not the initial focus and time was of the essence! I hate it too, but will become more!",
      link: "https://github.com/blguerin/Capstone"
    },
    {
      title: "Solitaire",
      content: "This is a Java based Solitaire application. This was a class project focused on Agile development in which I played the role of Product Owner. The game was programmed around a growing list of requirements, necessitating constant modification. GUI assembled with Swing.",
      link: "https://github.com/grahamcodes/Solitaire_Group_5"
    },
    {
      title: "Morse Coder",
      content: "An app that converts text into Morse code. Text input is converted into dot-dash notation and may be output sonically in beeps. This was my introduction to Python. Uses Tkinter to assemble the GUI.",
      link: "https://github.com/grahamcodes/MorseCoder"
    },
    {
      title: "This Website",
      content: "This is the site you're looking at right now! This is my first forray into React and while this static site is simple, it has really been an exciting and eye-opening introduction to power of modern web-dev. Built with React, Next.js, and styled with Tailwind CSS.",
      link: "https://github.com/grahamcodes/MorseCoder"
    }
  ]

  const handleClick = (num) => {
      scroll(0, 500);
      setSelected(true);
      setProjectName(projects[num].title);
      setDescription(projects[num].content);
      setLink(projects[num].link);
  }

  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Things I've Made</p>
      
      {/* Cards and info text*/}
      <div className="flex flex-col sm:flex-row justify-around gap-10 p-4 sm:p-8">

        {/* Project cards */}
        <div className="min-w-fit justify-items-center grid grid-cols-1 md:grid-cols-2 my-8 gap-10">

          <div 
          className="flex items-center w-64 h-48 hover:scale-150 duration-300"
          onClick={() => handleClick(0)}
          >
            <img
            src="/assests/hgb_main.png"
            alt="HabsGrudgeBot"
            className="w-full rounded"
            />
          </div>

          <div 
          className="grid justify-items-center w-64 h-48 hover:scale-150 duration-300 "
          onClick={() => handleClick(1)}
          >
            <img
            src="/assests/iotd.png"
            alt="NASA Image of the Day"
            className="h-full rounded"
            />
          </div>

          <div 
          className="flex items-center w-64 h-48 hover:scale-150 duration-300"
          onClick={() => handleClick(2)}
          >
            <img
              src="/assests/dty.png"
              alt="DrawnToYou"
              className="w-full rounded"
            />
          </div>

          <div 
          className="grid justify-items-center w-64 h-48 hover:scale-150 duration-300"
          onClick={() => handleClick(3)}
          >
            <img
            src="/assests/solitaire.png"
            alt="Solitaire"
            className="h-full rounded"
            />
          </div>

          <div 
          className="flex items-center w-64 h-48 hover:scale-150 duration-300"
          onClick={() => handleClick(4)}
          >
            <img
            src="/assests/morse.png"
            alt="Morse Coder"
            className="w-full rounded"
            />
          </div>

          <div 
          className="flex items-center w-64 h-48 hover:scale-150 duration-300"
          onClick={() => handleClick(5)}
          >
            <img
            src="/assests/site.png"
            alt="This Website"
            className="w-full rounded border-2 border-cyan-900"
            />
          </div>

        </div>
        {/* Project Info */}
        <div className="flex flex-col items-center min-w-[30%] w-full my-8 order-first sm:order-last text-gray-400">
          <h1 className="text-2xl font-bold text-white text-center">{projectName}</h1>
          <p className="mt-4 text-justify">{description}</p>
          {/* <button className="w-1/3 bg-white">Hello</button> */}
          <div className={"mt-8 rounded-lg border-2 border-cyan-900 bg-cyan-800 p-2 text-white cursor-pointer hover:border-white " + (selected ? "visible" : "invisible")}
          onClick={() => window.open(link)}>Check it out!</div>
        </div> 

      </div>
    </div>
  );
};

export default Projects;
