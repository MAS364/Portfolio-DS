// import React from "react";
// import { EXPERIENCES } from "../constants";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         // className="my-20 text-center text-4xl"
//         className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto mt-5 pb-2"
//       >
//         Experience
//       </motion.h2>

//       <div>
//         {EXPERIENCES.map((experience, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <p className=" mb-2 text-sm text-neutral-400">
//                 {experience.year}
//               </p>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold">
//                 {experience.role} -
//                 <span className="text-sm text-purple-100">
//                   {experience.company}
//                 </span>
//               </h6>

//               <p className="mb-4 text-neutral-400 text-justify">
//                 {experience.description}
//               </p>
//               {/* {experience.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   // className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 "
//                 >
//                   {tech}
//                 </span>
//               ))} */}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;




<<<<<<< HEAD
import React from "react";
import { EXPERIENCES } from "../constants";  // Import experiences data from constants
import { motion } from "framer-motion";      // Import motion component from framer-motion for animations

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">  {/* Bottom border with padding for the experience section */}
      {/* Motion header with fade-in and slide effect */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}    // When the header comes into view, it fades in and slides from the top
        initial={{ opacity: 0, y: -100 }}     // Initial state: hidden and moved upwards
        transition={{ duration: 0.5 }}         // Set the transition duration to 0.5 seconds
        className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto mt-5 pb-2"
=======
// import React from "react";
// import { EXPERIENCES } from "../constants";  // Import experiences data from constants
// import { motion } from "framer-motion";      // Import motion component from framer-motion for animations

// const Experience = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">  {/* Bottom border with padding for the experience section */}
//       {/* Motion header with fade-in and slide effect */}
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}    // When the header comes into view, it fades in and slides from the top
//         initial={{ opacity: 0, y: -100 }}     // Initial state: hidden and moved upwards
//         transition={{ duration: 0.5 }}         // Set the transition duration to 0.5 seconds
//         className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto mt-5 pb-2"
//       >
//         Experience
//       </motion.h2>

//       <div>
//         {/* Iterate over the EXPERIENCES array and render each item */}
//         {EXPERIENCES.map((experience, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> {/* Flexbox wrapper for each experience item */}
//             {/* Year Section: Motion animation for slide-in */}
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}  // Fade in and slide in from left
//               initial={{ opacity: 0, x: -100 }}   // Initial state: hidden and off-screen left
//               transition={{ duration: 1 }}         // Set transition duration
//               className="w-full lg:w-1/4"         // Full width on small screens, one-quarter width on larger screens
//             >
//               <p className="mb-2 text-sm text-neutral-400">
//                 {experience.year} {/* Display the year of the experience */}
//               </p>
//             </motion.div>

//             {/* Role and Description Section */}
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}  // Fade in and slide in from right
//               initial={{ opacity: 0, x: 100 }}    // Initial state: hidden and off-screen right
//               transition={{ duration: 1 }}         // Set transition duration
//               className="w-full max-w-xl lg:w-3/4"  // Full width with max width and 3/4 width on larger screens
//             >
//               {/* Job Role and Company */}
//               <h6 className="mb-2 font-semibold">
//                 {experience.role} - {/* Display the role */}
//                 <span className="text-sm text-purple-100">
//                   {experience.company} {/* Display the company name */}
//                 </span>
//               </h6>

//               {/* Job Description */}
//               <p className="mb-4 text-neutral-400 text-justify">
//                 {experience.description} {/* Display the description of the role */}
//               </p>
//               {/* Uncomment this block if experience.technologies array needs to be displayed */}
//               {/* {experience.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 "
//                 >
//                   {tech}
//                 </span>
//               ))} */}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

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
>>>>>>> dcf9723 (Initial commit)
      >
        Experience
      </motion.h2>

<<<<<<< HEAD
      <div>
        {/* Iterate over the EXPERIENCES array and render each item */}
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> {/* Flexbox wrapper for each experience item */}
            {/* Year Section: Motion animation for slide-in */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}  // Fade in and slide in from left
              initial={{ opacity: 0, x: -100 }}   // Initial state: hidden and off-screen left
              transition={{ duration: 1 }}         // Set transition duration
              className="w-full lg:w-1/4"         // Full width on small screens, one-quarter width on larger screens
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year} {/* Display the year of the experience */}
              </p>
            </motion.div>

            {/* Role and Description Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}  // Fade in and slide in from right
              initial={{ opacity: 0, x: 100 }}    // Initial state: hidden and off-screen right
              transition={{ duration: 1 }}         // Set transition duration
              className="w-full max-w-xl lg:w-3/4"  // Full width with max width and 3/4 width on larger screens
            >
              {/* Job Role and Company */}
              <h6 className="mb-2 font-semibold">
                {experience.role} - {/* Display the role */}
                <span className="text-sm text-purple-100">
                  {experience.company} {/* Display the company name */}
                </span>
              </h6>

              {/* Job Description */}
              <p className="mb-4 text-neutral-400 text-justify">
                {experience.description} {/* Display the description of the role */}
              </p>
              {/* Uncomment this block if experience.technologies array needs to be displayed */}
              {/* {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 "
                >
                  {tech}
                </span>
              ))} */}
=======
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

            {/* Right: Role, Company, Bullets */}
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

              {/* Bullet Points */}
              {Array.isArray(experience.description) ? (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-neutral-400">
                  {experience.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                // Fallback: if description is still a string
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {experience.description}
                </p>
              )}
>>>>>>> dcf9723 (Initial commit)
            </motion.div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> dcf9723 (Initial commit)
  );
};

export default Experience;
