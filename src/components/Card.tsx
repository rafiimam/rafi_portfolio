import { FC, useState } from "react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "./";

type CardProps = {
  imgSrc?: string;
  title: string;
  technologies: string | string[];
  summary?: string;
  liveLink?: string;
  githubRepo?: string;
};

const Card: FC<CardProps> = ({
  imgSrc,
  title,
  technologies,
  summary,
  liveLink,
  githubRepo,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const techLabel = Array.isArray(technologies) ? technologies.join(", ") : technologies;

  return (
    <motion.article
      className="w-full sm:w-[340px] bg-[#1b242c] border border-white/10 rounded-xl overflow-hidden shadow-card hover:shadow-cardHover"
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[190px] bg-[#151b22]">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
        ) : null}
        {isHovered && (liveLink || githubRepo) && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/70 px-4">
            {liveLink ? (
              <Tooltip title="Live Link" arrow>
                <Button link={liveLink} target="_blank" rel="noopener noreferrer">
                  Live
                </Button>
              </Tooltip>
            ) : null}
            {githubRepo ? (
              <Tooltip title="Sanitized sample or public repo" arrow>
                <Button link={githubRepo} target="_blank" rel="noopener noreferrer">
                  Code
                </Button>
              </Tooltip>
            ) : null}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-secondary text-sm">{techLabel}</p>
        {summary ? (
          <p className="text-textSecondary text-sm leading-relaxed">{summary}</p>
        ) : null}
      </div>
    </motion.article>
  );
};

export default Card;
