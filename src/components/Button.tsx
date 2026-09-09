// components/Button.tsx

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
  // Add optional props for external links
  link?: string;
  target?: string;
  rel?: string;
}

const Button: FC<ButtonProps> = ({ children, secondary, icon, onClick, link, target, rel }) => {
  // If a link is provided, render an anchor tag; otherwise, render a button
  if (link) {
    return (
      <a href={link} target={target} rel={rel} className={`${secondary ? "bg-secondary" : "bg-accent"} ${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit`} onClick={onClick}>
        {renderContent()}
      </a>
    );
  }

  // If no link is provided, render a button
  return (
    <button className={`${secondary ? "bg-secondary" : "bg-accent"} ${
      secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
    } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit`} onClick={onClick}>
      {renderContent()}
    </button>
  );

  function renderContent() {
    return icon ? (
      <div className="flex items-center gap-2.5 justify-center">
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
        <img src={icon} alt="" />
      </div>
    ) : (
      <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
    );
  }
};

export default Button;
