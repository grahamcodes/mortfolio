import { BsArrowRightShort } from "../Icons";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-sludge">
      <p className="text-3xl font-bold text-sludge text-center">Skills</p>
      <div className="flex flex-col sm:flex-row text-center my-8 justify-between" >
        <ul className="text-sm text-sludge">
          <li className="text-lg text-creamsicle underline">Languages</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
        </ul>
        <ul className="text-sm text-sludge">
          <li className="text-lg text-creamsicle underline">Databases</li>
          <li>MySQL</li>
          <li>SQL Server</li>
          <li>Oracle</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Neo4j</li>
        </ul>
        <ul className="text-sm text-sludge">
          <li className="text-lg text-creamsicle underline">Concepts & Tech</li>
          <li>OOP</li>
          <li>Agile Development</li>
          <li>Virtualization</li>
          <li>Microservice Architecture</li>
          <li>Docker Containerization</li>
          <li>Git Version Control</li>
        </ul>
      </div>
    </div> 
  );
};

export default Skills;
