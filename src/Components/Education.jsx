import React from "react";
import { motion } from "framer-motion";

const Education = () => {
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
        Education
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* University of Surrey */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
          {/* Left: Year */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/4"
          >
            <p className="text-sm text-neutral-400">
              Sept 2025 – Present
            </p>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/4 max-w-2xl"
          >
            <h3 className="text-lg font-semibold text-neutral-100">
              MSc in Data Science
            </h3>
            <p className="text-sm text-purple-100 mb-3">
              University of Surrey, UK
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              <span className="font-medium text-neutral-300">
                Relevant Coursework:
              </span>{" "}
              Cloud Computing, Database Systems & Business Intelligence,
              Statistical Data Science, Business Analytics with Data
              Visualisation, Machine Learning for Data Science, Applied
              Machine Learning.
            </p>
          </motion.div>
        </div>

        {/* M.H. Saboo Siddik College */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
          {/* Left: Year */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/4"
          >
            <p className="text-sm text-neutral-400">
              July 2016 – Dec 2020
            </p>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/4 max-w-2xl"
          >
            <h3 className="text-lg font-semibold text-neutral-100">
              Bachelor of Engineering in Information Technology
            </h3>
            <p className="text-sm text-purple-100 mb-2">
              University of Mumbai — Mumbai, India
            </p>

            <p className="text-sm text-neutral-400">
              {/* CGPI: <span className="font-medium text-neutral-300">7.56 / 10</span> */}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
