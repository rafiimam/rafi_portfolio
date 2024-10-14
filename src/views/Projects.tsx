// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "projects" | "publications";

const publications = [
  {
    id: 1,
    title: "Publication Title 1",
    doi: "10.1109/ICCIT60459.2023.10441163",
    researchGate: "https://www.researchgate.net/publication/378529380_Suicidal_Thought_Detection_Using_NLPNatural_Language_Processing_on_Reddit_Data",
    technologies: ""
  },
  {
    id: 2,
    title: "Publication Title 2",
    doi: "https://doi.org/10.1234/example2",
    researchGate: "https://www.researchgate.net/profile/yourprofile",
    technologies: ""
  },
  {
    id: 3,
    title: "Publication Title 3",
    doi: "https://doi.org/10.1234/example3",
    researchGate: "https://www.researchgate.net/profile/yourprofile",
    technologies: ""
  },
  {
    id: 4,
    title: "Publication Title 4",
    doi: "https://doi.org/10.1234/example4",
    researchGate: "https://www.researchgate.net/profile/yourprofile",
    technologies: ""
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("projects");

  const filteredProjects = () => {
    return projects; // Return all projects for the "Projects" category
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My recent <span className="text-secondary">projects & publications</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "projects"}
              onClick={() => setActiveCategory("projects")}
            >
              Projects
            </Button>
            <Button
              secondary={activeCategory === "publications"}
              onClick={() => setActiveCategory("publications")}
            >
              Publications
            </Button>
          </motion.div>

          {activeCategory === "projects" ? (
            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex gap-12 mt-12 flex-wrap justify-center"
            >
              {filteredProjects().map((item) => (
                <Card
                  key={item.id}
                  imgSrc={item.img}
                  title={item.title}
                  technologies={item.technology}
                  liveLink={item.liveLink} // Add live link if available
                  githubRepo={item.githubRepo} // Add GitHub repo if available
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex gap-12 mt-12 flex-wrap justify-center"
            >
              {publications.map((pub) => (
                <Card
                  key={pub.id}
                  title={pub.title}
                  technologies="" // Pass an empty string
                  liveLink={pub.doi} // Use DOI as a link
                  githubRepo={pub.researchGate} // Use ResearchGate as a link
                />

              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
