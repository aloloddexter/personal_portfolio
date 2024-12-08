import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";


const Footer = () => {
  const socialLink = [
    {
      link: "https://github.com/",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      link: "https://twitter.com/",
      icon: <FaTwitter />,
    },
  ];
  return (
    <footer className="center--content flex-col gap-y-5 border-t-[1px] border-secondary/20 py-10">
      <h2 className="text-primary dark:text-white">
        &copy; All rights reserved. Dexter - 2024
      </h2>
      <div className="center--content gap-x-5">
        {socialLink?.map((data, index) => (
          <a
          className="smooth--hover hover:opacity-80 dark:text-white text-primary"
            key={index}
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
