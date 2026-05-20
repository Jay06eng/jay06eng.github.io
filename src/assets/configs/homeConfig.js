import React from "react";
import { FaAmazon } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";
import logoXe from "../images/logo_xe2.png";
import logoCdo from "../images/logo_cdo_nobg.png";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Javier Bonilla</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Javier Bonilla</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Technical Program Manager",
      "AI/ML Product Delivery",
      "Strategy & Operations",
      "Co-Founder @ CommonDevOps",
      "Amazon & Pinterest Alum",
      "Based in Seattle, WA",
    ],
    es: [
      "Technical Program Manager",
      "Entrega de Productos AI/ML",
      "Estrategia y Operaciones",
      "Co-Fundador @ CommonDevOps",
      "Ex Amazon y Pinterest",
      "Seattle, WA",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I'm a Technical Program Manager driving large-scale operational transformations through technical innovation. I navigate high-ambiguity environments and turn complex problems into measurable, positive business impact across ads, data, e-commerce, and order-to-cash. I've delivered $100M in incremental deal value, $9.7M in cost savings, 30% faster planning, 40% shorter invoice-to-payment cycles, and prevented 80,000 fraud attempts.",
      exit:
        "I am proficient in Python, SQL, and ML workflows, with deep expertise in AI/ML orchestration and automation. I am passionate about bridging the gap between engineering excellence and strategic business growth, especially within the evolving landscape of AI-powered products.",
    },
    es: {
      start:
        "He pasado más de diez años impulsando transformaciones operativas a gran escala a través de la innovación técnica. Me motiva el desafío de navegar entornos de alta ambigüedad y convertir problemas complejos en impacto empresarial positivo y medible, habiendo logrado hitos como $100M en valor incremental y millones en ahorros.",
      exit:
        "Tengo gran dominio de Python, SQL y flujos de trabajo ML, con experiencia profunda en orquestación y automatización de AI/ML. Me apasiona conectar la excelencia en ingeniería con el crecimiento estratégico del negocio, especialmente en el ecosistema de productos impulsados por IA.",
    },
  },

  workTimeline: [
    {
      id: "work-5",
      title: "Co-Founder & Sr. TPM, AI/ML",
      title_i18n: { en: "Co-Founder & Sr. TPM, AI/ML", es: "Co-Fundador y Sr. TPM, AI/ML" },
      company: "CommonDevOps",
      description_i18n: {
        en: "Building AI and deterministic products and scalable ML platform architecture from the ground up.",
        es: "Construyendo herramientas de soporte de decisiones con IA y arquitectura de plataforma ML escalable desde cero.",
      },
      date: "2025-Present",
      icon: <img src={logoCdo} alt="CommonDevOps" style={{ width: 28, height: 28, objectFit: 'contain', display: 'block', borderRadius: 5, filter: 'hue-rotate(-65deg) saturate(0.9) brightness(0.75)' }} />,
      url: "https://commondevops.com/",
      tags: ["ai/ml", "llms", "python", "sdlc", "automation"],
    },
    {
      id: "work-4",
      title: "Sr. Technical Program Manager",
      title_i18n: { en: "Sr. Technical Program Manager", es: "Sr. Technical Program Manager" },
      company: "Xenon arc",
      description_i18n: {
        en: "Led CI/CD strategy and D365 platform modernization for 5,000+ users across acquired companies.",
        es: "Lideré la estrategia CI/CD y modernización de D365 para más de 5,000 usuarios en empresas adquiridas.",
      },
      date: "2025",
      icon: <img src={logoXe} alt="Xenon arc" style={{ width: 30, height: 30, objectFit: 'contain', display: 'block', borderRadius: 5, filter: 'hue-rotate(34deg) saturate(1.1)' }} />,
      url: "https://www.xenonarc.com/",
      tags: ["dynamics 365", "azure devops", "ci/cd", "vendor mgmt"],
    },
    {
      id: "work-3",
      title: "Sr. Strategy & Operations Manager",
      title_i18n: { en: "Sr. Strategy & Operations Manager", es: "Sr. Gerente de Estrategia y Operaciones" },
      company: "Pinterest",
      description_i18n: {
        en: "Led the end-to-end go-to-market and product development of the Pinterest platform for the advertiser lifecycle, from onboarding to billing.",
        es: "Impulsé la plataforma del ciclo de vida del anunciante, desbloqueando más de $100M en valor de negocios.",
      },
      date: "2022-2024",
      icon: <SiPinterest />,
      url: "https://www.pinterest.com/",
      tags: ["ads revenue ops", "python", "salesforce", "api", "go-to-market"],
    },
    {
      id: "work-2",
      title: "Program Manager, People Tech",
      title_i18n: { en: "Program Manager, People Tech", es: "Program Manager, People Tech" },
      company: "Amazon",
      description_i18n: {
        en: "Managed global Time & Attendance transformation programs, automating 1.3M transactions and preventing 500,000+ annual payment errors.",
        es: "Transformé plataformas globales de Tiempo y Asistencia, automatizando 1.3M de transacciones y ahorrando más de 28 FTEs.",
      },
      date: "2020-2022",
      icon: <FaAmazon />,
      url: "https://www.amazon.com/",
      tags: ["aws", "lean six sigma", "jira", "sdlc"],
    },
    {
      id: "work-1",
      title: "Process Engineering Manager",
      title_i18n: { en: "Process Engineering Manager", es: "Gerente de Ingeniería de Procesos" },
      company: "Amazon",
      description_i18n: {
        en: "Directed automation programs cutting $9.7M in costs and reducing seller contact volume 400 bps.",
        es: "Dirigí programas de automatización que redujeron $9.7M en costos y el volumen de contacto de vendedores 400 bps.",
      },
      date: "2018-2020",
      icon: <FaAmazon />,
      url: "https://www.amazon.com/",
      tags: ["six sigma black belt", "api", "process automation"],
    },
    {
      id: "work-0",
      title: "Process Engineer",
      title_i18n: { en: "Process Engineer", es: "Ingeniero de Procesos" },
      company: "Amazon",
      description_i18n: {
        en: "Drove $4M in savings and 22% onboarding improvement through workflow standardization and data analysis.",
        es: "Generé $4M en ahorros y una mejora del 22% en onboarding mediante estandarización de flujos de trabajo y análisis de datos.",
      },
      date: "2016-2018",
      icon: <FaAmazon />,
      url: "https://www.amazon.com/",
      tags: ["process improvement", "data analysis", "project mgmt"],
    },
  ],
};

export default homeConfig;
