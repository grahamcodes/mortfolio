import type { NextPage } from "next";

import { Header, About, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Projects />
      <Skills />

    </div>
  );
};

export default Home;
