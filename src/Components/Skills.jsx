import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMysql,
  SiGooglecloud,
  SiKubernetes,
  SiLooker,
  SiGooglebigquery,
} from "react-icons/si";
import { TbSql, TbChartBar } from "react-icons/tb";
import { RiFileExcel2Fill } from "react-icons/ri";

const SkillItem = ({ icon, name }) => (
  <span className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-gray-700">
    <span className="text-base">{icon}</span>
    <span className="text-sm font-medium">{name}</span>
  </span>
);

const SkillRow = ({ label, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
  >
    {/* Left label */}
    <span className="text-neutral-300 font-semibold min-w-[180px] shrink-0">
      {label} :
    </span>

    {/* Right chips */}
    <div className="flex flex-wrap gap-3">{children}</div>
  </motion.div>
);

const Technologies = () => {
  return (
    <section className="py-16 px-4 border-b border-neutral-900">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-14"
      >
        <h2 className="text-4xl font-bold text-[#CBA35C] tracking-wide">
          SKILLS
        </h2>
        <div className="w-28 h-1 bg-white mt-3 rounded-full" />
      </motion.div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto space-y-6">
        <SkillRow label="Programming" delay={0.05}>
          <SkillItem icon={<FaPython className="text-[#3776AB]" />} name="Python" />
          <SkillItem icon={<TbSql className="text-[#336791]" />} name="SQL" />
        </SkillRow>

        <SkillRow label="Analytics & ML" delay={0.1}>
          <SkillItem icon={<SiNumpy className="text-[#013243]" />} name="NumPy" />
          <SkillItem icon={<SiPandas className="text-[#150458]" />} name="Pandas" />
          <SkillItem icon={<SiScikitlearn className="text-[#F7931E]" />} name="Scikit-learn" />
          <SkillItem icon={<TbChartBar className="text-gray-500" />} name="Statistical Analysis" />
          <SkillItem icon={<TbChartBar className="text-gray-500" />} name="EDA" />
          <SkillItem icon={<TbChartBar className="text-gray-500" />} name="ETL" />
        </SkillRow>

        <SkillRow label="BI & Data Tools" delay={0.15}>
          <SkillItem icon={<TbChartBar className="text-[#F2C811]" />} name="Power BI" />
          <SkillItem icon={<RiFileExcel2Fill className="text-[#217346]" />} name="Excel" />
          <SkillItem icon={<SiLooker className="text-[#4285F4]" />} name="Looker" />
          <SkillItem icon={<SiGooglebigquery className="text-[#669DF6]" />} name="BigQuery" />
        </SkillRow>

        <SkillRow label="Databases" delay={0.2}>
          <SkillItem icon={<SiMysql className="text-[#4479A1]" />} name="MySQL" />
        </SkillRow>

        <SkillRow label="Cloud & DevOps" delay={0.25}>
          <SkillItem icon={<FaAws className="text-[#FF9900]" />} name="AWS" />
          <SkillItem icon={<SiGooglecloud className="text-[#4285F4]" />} name="GCP" />
          <SkillItem icon={<FaDocker className="text-[#2496ED]" />} name="Docker" />
          {/* <SkillItem icon={<SiKubernetes className="text-[#326CE5]" />} name="Kubernetes" /> */}
          <SkillItem icon={<TbChartBar className="text-gray-500" />} name="CI/CD" />
        </SkillRow>

        <SkillRow label="Version Control" delay={0.3}>
          <SkillItem icon={<FaGitAlt className="text-[#F05032]" />} name="Git" />
          <SkillItem icon={<FaGithub className="text-gray-800" />} name="GitHub" />
        </SkillRow>
      </div>
    </section>
  );
};

export default Technologies;
