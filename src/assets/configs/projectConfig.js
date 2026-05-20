import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import projectPrioritization from "../images/project_prioritization.svg";
import projectCreditLine from "../images/project_credit_line.svg";

import React from 'react';

const projectConfig = [
  {
    id: "project-1",
    title: "AI Project Prioritization Assistant",
    category: { en: "AI Tool", es: "Herramienta IA" },
    description_i18n: {
      en: "LLM-powered tool that converts ambiguous inputs into structured GO / NEEDS REVIEW / NO-GO recommendations.",
      es: "Herramienta con LLM que convierte entradas ambiguas en recomendaciones estructuradas GO / NEEDS REVIEW / NO-GO.",
    },
    links: [
      { name: "repo", url: "https://github.com/Jay06eng/decision-assistant-ai-tpm", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/Jay06eng/decision-assistant-ai-tpm/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/Jay06eng/decision-assistant-ai-tpm/subscription", icon: <AiFillEye /> },
    ],
    image: projectPrioritization,
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Credit-Line Approval for Advertisers",
    category: { en: "ML Model", es: "Modelo ML" },
    description_i18n: {
      en: "Explainable ML model to automate and improve advertiser credit-line approval decisions at scale.",
      es: "Modelo ML explicable para automatizar y mejorar las decisiones de aprobación de líneas de crédito para anunciantes.",
    },
    links: [
      { name: "repo", url: "https://github.com/Jay06eng/credit-line-approval-ml", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/Jay06eng/credit-line-approval-ml/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/Jay06eng/credit-line-approval-ml/subscription", icon: <AiFillEye /> },
    ],
    image: projectCreditLine,
    target: "_blank",
  },
];

export default projectConfig;
