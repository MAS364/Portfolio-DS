<<<<<<< HEAD
;




import React from "react";                                // Import React
import { PROJECTS } from "../constants";                   // Import projects data from constants file
import { motion } from "framer-motion";                    // Import framer-motion for animations

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Projects Section Header */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}                  // Animation for opacity and slide-in effect
        initial={{ opacity: 0, y: -100 }}                   // Initial state of the header with opacity and position
        transition={{ duration: 0.5 }}                      // Duration for the animation
        className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto pb-2"
      >
        Projects
      </motion.h2>

      {/* Grid Display for Projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}                                          // Unique key for each project card
            whileInView={{ opacity: 1, scale: 1 }}              // Animate opacity and scale for each project
            initial={{ opacity: 0, scale: 0.8 }}                 // Initial state for animation with opacity and scaling
            transition={{ duration: 0.5 }}                        // Duration of the animation
            className="relative rounded-lg bg-neutral-800 p-3 shadow-md"  // Styles for project card container
          >
            {/* Project Title */}
            <h6 className="text-lg font-semibold text-[#CBA35C] mb-2 text-center">
              {project.title}
            </h6>
            {/* Project Description */}
            <p className="text-neutral-400 mb-4 text-sm text-center">
              {project.description}
            </p>
            {/* Technologies Used */}
            <div className="flex flex-wrap justify-center mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 rounded bg-neutral-700 px-3 py-1 text-xs text-purple-400"   // Styles for technology tags
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Action Buttons for Demo and Code */}
            <div className="flex justify-evenly">
              {/* Demo Link */}
              <a
                href={project.url}                            // Link to demo page
                target="_blank"                                // Open demo in new tab
                rel="noopener noreferrer"                     // Security feature for new tab opening
                className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"  // Style for button
              >
                View
              </a>

              {/* Code Link */}
              <a
                href={project.code}                            // Link to project code (GitHub)
                target="_blank"                                 // Open code in new tab
                rel="noopener noreferrer"                      // Security feature for new tab opening
                className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600" // Style for button
              >
                Code
              </a>
=======


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
          PROJECTS
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
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Project Image */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="rounded-xl overflow-hidden bg-neutral-800 shadow-lg">
                <div className="w-full h-44 md:h-48 bg-neutral-700 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm font-medium text-center px-6">
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
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center
                                 bg-neutral-700
                                 px-3 py-1.5 rounded-lg
                                 text-sm font-medium
                                 text-white"
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
                    className="px-6 py-2.5 bg-purple-700 text-white 
                               rounded-lg hover:bg-purple-600 
                               transition font-medium text-sm"
                  >
                    Visit Website
                  </a>
                )}

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-purple-700 text-white 
                               rounded-lg hover:bg-purple-600 
                               transition font-medium text-sm"
                  >
                    View Code
                  </a>
                )}
              </div>
>>>>>>> dcf9723 (Initial commit)
            </div>
          </motion.div>
        ))}
      </div>
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> dcf9723 (Initial commit)
  );
};

export default Projects;
