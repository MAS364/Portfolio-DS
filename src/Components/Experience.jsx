import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto pb-2"
      >
        Experience
      </motion.h2>

      {/* Experiences */}
      <div className="max-w-6xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row lg:justify-center gap-6"
          >
            {/* Left: Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Right: Role, Company, Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/4 max-w-2xl"
            >
              <h3 className="text-lg font-semibold text-neutral-100">
                {experience.role}{" "}
                <span className="text-sm font-medium text-purple-100">
                  — {experience.company}
                </span>
              </h3>

              {/* Description (supports string OR bullet list) */}
              {Array.isArray(experience.description) ? (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-neutral-400">
                  {experience.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed text-justify">
                  {experience.description}
                </p>
              )}

              {/* Optional Technologies */}
              {Array.isArray(experience.technologies) &&
                experience.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
