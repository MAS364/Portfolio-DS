// import React from "react";
// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-16">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto pb-2"
//       >
//         Projects
//       </motion.h2>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {PROJECTS.map((project, index) => (
//           <motion.div
//             key={index}
//             whileInView={{ opacity: 1, scale: 1 }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5 }}
//             className="relative rounded-lg bg-neutral-800 p-3 shadow-md"
//           >
//             <h6 className="text-lg font-semibold text-[#CBA35C] mb-2 text-center">
//               {project.title}
//             </h6>
//             <p className="text-neutral-400 mb-4 text-sm text-center">
//               {project.description}
//             </p>
//             <div className="flex flex-wrap justify-center mb-4">
//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 mb-2 rounded bg-neutral-700 px-3 py-1 text-xs text-purple-400"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="flex justify-evenly">
//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
//               >
//                 Demo
//               </a>
//               <a
//                 href={project.code}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-600"
//               >
//                 Code
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;




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
                Demo
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
