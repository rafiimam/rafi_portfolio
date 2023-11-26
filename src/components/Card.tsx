// react
import { FC, useState } from "react";

// mui
import { Tooltip } from "@mui/material";

// framer-motion
import { motion } from "framer-motion";

// components
import { Button } from "./";

interface CardProps {
  imgSrc: string;
  title: string;
  technologies: string;
  liveLink?: string;
  githubRepo?: string;
}

const Card: FC<CardProps> = ({ imgSrc, title, technologies, liveLink, githubRepo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-card hover:shadow-cardHover transition-all ease-linear duration-300"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={imgSrc} alt={title} className="transition-all duration-700 backdrop-blur-0 group-hover:scale-105 ease-in-out max-h-[220px]" />

      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 transition-all ease-linear duration-300">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 pl-[30px] pr-[30px] items-center justify-center">{technologies}</p>

          <div className="flex gap-4">
            {liveLink && (
              <Tooltip title="Live Link" arrow>
                <Button link={liveLink} target="_blank" rel="noopener noreferrer">
                  Live
                </Button>
              </Tooltip>
            )}
            {githubRepo && (
              <Tooltip title="GitHub Repo" arrow>
                <Button link={githubRepo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
