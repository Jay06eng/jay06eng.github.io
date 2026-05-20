import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      title_i18n: { en: "Home", es: "Inicio" },
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      title_i18n: { en: "Projects", es: "Proyectos" },
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
{
      id: "menu-3",
      title: "Skills",
      title_i18n: { en: "Skills", es: "Habilidades" },
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "LinkedIn",
      title_i18n: { en: "LinkedIn", es: "LinkedIn" },
      path: "https://www.linkedin.com/in/javierbonillab/",
      icon: <FaLinkedinIn size={35} />,
      className: "nav-text",
      external: true,
      iconOnly: true,
    },
  ],
};

export default menuConfig;
