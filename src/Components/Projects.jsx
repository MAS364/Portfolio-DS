import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-14 mt-10"
      >
        <h2 className="text-4xl font-bold text-[#CBA35C] tracking-wide">
          Projects
        </h2>
        <div className="w-32 h-1 bg-white mt-3 rounded-full" />
      </motion.div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto space-y-14 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Project Visual (placeholder card) */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="rounded-xl overflow-hidden bg-neutral-800 shadow-lg border border-neutral-700">
                <div className="w-full h-44 md:h-48 bg-neutral-700/60 flex items-center justify-center">
                  <span className="text-neutral-300 text-sm font-medium text-center px-6">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1">
              {/* Title */}
              <h3 className="text-xl font-semibold text-neutral-100">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Tech Stack */}
              {Array.isArray(project.technologies) &&
                project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition font-medium text-sm"
                  >
                    View
                  </a>
                )}

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-neutral-800 text-white border border-neutral-700 rounded-lg hover:bg-neutral-700 transition font-medium text-sm"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
