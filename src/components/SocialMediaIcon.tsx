// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  link?: string; // New prop for the link
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, link }) => {
  const iconContent = (
    <div
      className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
      hover:bg-secondary transition-all ease-linear duration-300"
    >
      <img src={imgSrc} alt="" />
    </div>
  );

  return (
    <Tooltip title={title} placement="bottom" arrow>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {iconContent}
        </a>
      ) : (
        iconContent
      )}
    </Tooltip>
  );
};

export default SocialMediaIcon;
