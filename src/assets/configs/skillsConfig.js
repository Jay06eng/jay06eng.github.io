import {
  SiPython,
  SiPostgresql,
  SiSalesforce,
  SiJira,
  SiConfluence,
  SiMongodb,
  SiGithub,
  SiGit,
  SiNotion,
  SiMysql,
  SiOpenai,
} from "react-icons/si";
import { FaAws, FaBrain, FaRobot, FaCogs, FaDatabase } from "react-icons/fa";
import { BiBot, BiData, BiPlug, BiCodeAlt } from "react-icons/bi";
import { BsBucket } from "react-icons/bs";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CloudIcon from "@mui/icons-material/Cloud";
import CampaignIcon from "@mui/icons-material/Campaign";

const ICON_SIZE = 50;
const MAIN_ICON_SIZE = 38;

const skillsConfig = {
  certifications: [
    {
      id: "cert-0",
      name: "AI & Machine Learning: Code, Train, Deploy",
      url: "https://credsverse.com/credentials/f2d0a06f-bd8b-4f52-9570-94a9c2cf671f",
    },
    {
      id: "cert-1",
      name: "Software Product Strategy",
      url: "https://badges.parchment.com/public/assertions/ezhv1hxoRlyZGFeK71KKCw",
    },
    {
      id: "cert-2",
      name: "Lean Six Sigma Black Belt",
      url: null,
    },
  ],
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={MAIN_ICON_SIZE} />, text: "Python" },
    { id: "skills-main-sql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: MAIN_ICON_SIZE }} />, text: "SQL" },
    { id: "skills-main-llms", className: "skill-icon", icon: <BiBot size={MAIN_ICON_SIZE} />, text: "LLMs" },
    { id: "skills-main-azuredevops", className: "skill-icon", icon: <FaCogs size={MAIN_ICON_SIZE} />, text: "Azure DevOps" },
    { id: "skills-main-salesforce", className: "skill-icon", icon: <SiSalesforce size={MAIN_ICON_SIZE} />, text: "Salesforce" },
    { id: "skills-main-oracle", className: "skill-icon", icon: <FaDatabase size={MAIN_ICON_SIZE} />, text: "Oracle" },
    { id: "skills-main-adsmanager", className: "skill-icon", icon: <CampaignIcon sx={{ fontSize: MAIN_ICON_SIZE }} />, text: "Ads Manager" },
    { id: "skills-main-aws", className: "skill-icon", icon: <FaAws size={MAIN_ICON_SIZE} />, text: "AWS" },
    { id: "skills-main-git", className: "skill-icon", icon: <SiGit size={MAIN_ICON_SIZE} />, text: "Git" },
  ],
  complementarySkills: [
    { id: "skills-comp-jira", className: "skill-icon", icon: <SiJira size={ICON_SIZE} />, text: "Jira" },
    { id: "skills-comp-notion", className: "skill-icon", icon: <SiNotion size={ICON_SIZE} />, text: "Notion" },
    { id: "skills-comp-confluence", className: "skill-icon", icon: <SiConfluence size={ICON_SIZE} />, text: "Confluence" },
    { id: "skills-comp-mysql", className: "skill-icon", icon: <SiMysql size={ICON_SIZE} />, text: "MySQL" },
    { id: "skills-comp-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "Postgres" },
    { id: "skills-comp-mongodb", className: "skill-icon", icon: <SiMongodb size={ICON_SIZE} />, text: "MongoDB" },
    { id: "skills-comp-api", className: "skill-icon", icon: <BiPlug size={ICON_SIZE} />, text: "API Integration" },
    { id: "skills-comp-claudecode", className: "skill-icon", icon: <FaRobot size={ICON_SIZE} />, text: "Claude Code" },
    { id: "skills-comp-codex", className: "skill-icon", icon: <SiOpenai size={ICON_SIZE} />, text: "Codex" },
    { id: "skills-comp-copilot", className: "skill-icon", icon: <SiGithub size={ICON_SIZE} />, text: "GitHub Copilot" },
    { id: "skills-comp-vscode", className: "skill-icon", icon: <BiCodeAlt size={ICON_SIZE} />, text: "VS Code" },
  ],
};

export default skillsConfig;
