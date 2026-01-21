import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic1 from "../assets/A.jpg";
import { motion } from "framer-motion";

const slideInLeft = (delay = 0) => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const slideInRight = (delay = 0) => ({
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="min-h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          {/* Left: Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <motion.h1
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100"
            >
              Mohammad Arshad Siddique{" "}
              <span className="text-[#CBA35C] font-medium">|</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#CBA35C]"
            >
              Data Analyst &amp; Data Scientist
            </motion.h2>

            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate="visible"
              className="w-20 h-1 bg-white mx-auto lg:mx-0 my-5 rounded-full"
            />

            <motion.p
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-3xl"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.p
              variants={fadeUp(0.45)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-sm sm:text-base text-neutral-400"
            >
              If you’re looking for a data-driven professional to elevate your
              business, let’s connect!
            </motion.p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <motion.img
              variants={slideInRight(0.25)}
              initial="hidden"
              animate="visible"
              src={profilePic1}
              alt="Profile"
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg border border-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
