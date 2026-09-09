import { useMemo, useState } from "react";
import projectsPageImg from "../assets/projects-page.svg";
import { Button, Card, Reveal } from "../components";
import { projects, ProjectCategory } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "banking" | "earlier" | "publications";

const publications = [
  {
    id: 1,
    title: "Suicidal Thought Detection Using NLP on Reddit Data",
    doi: "https://doi.org/10.1109/ICCIT60459.2023.10441163",
    researchGate:
      "https://www.researchgate.net/publication/378529380_Suicidal_Thought_Detection_Using_NLPNatural_Language_Processing_on_Reddit_Data",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("banking");

  const visibleProjects = useMemo(
    () => projects.filter((item) => item.category === (activeCategory as ProjectCategory)),
    [activeCategory]
  );

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
      <div className="max-w-screen-2xl w-full py-16 px-6 sm:px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Work at <span className="text-secondary">Jamuna Bank</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-textSecondary text-center xl:text-start max-w-3xl">
              Systems I built for Jamuna Bank PLC. The images are demo screens, not live customer data.
              Code links open sanitized public samples: credentials, environment files, and internal
              endpoints stay private.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button secondary={activeCategory === "banking"} onClick={() => setActiveCategory("banking")}>
              Jamuna Bank
            </Button>
            <Button secondary={activeCategory === "earlier"} onClick={() => setActiveCategory("earlier")}>
              Earlier work
            </Button>
            <Button
              secondary={activeCategory === "publications"}
              onClick={() => setActiveCategory("publications")}
            >
              Publications
            </Button>
          </motion.div>

          {activeCategory === "publications" ? (
            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="grid gap-6 mt-8"
            >
              {publications.map((pub) => (
                <article
                  key={pub.id}
                  className="bg-[#1b242c] border border-white/10 rounded-xl p-6 max-w-3xl"
                >
                  <h3 className="text-white text-xl font-semibold">{pub.title}</h3>
                  <p className="text-textSecondary mt-2">ICCIT 2023 · NLP</p>
                  <div className="flex gap-4 mt-4">
                    <Button link={pub.doi} target="_blank" rel="noopener noreferrer">
                      DOI
                    </Button>
                    <Button link={pub.researchGate} target="_blank" rel="noopener noreferrer">
                      ResearchGate
                    </Button>
                  </div>
                </article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex gap-6 mt-8 flex-wrap justify-center xl:justify-start"
            >
              {visibleProjects.map((item) => (
                <Card
                  key={item.id}
                  imgSrc={item.img}
                  title={item.title}
                  technologies={item.technology}
                  summary={item.summary}
                  liveLink={item.liveLink}
                  githubRepo={item.githubRepo}
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
