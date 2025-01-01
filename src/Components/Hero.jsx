

import { HERO_CONTENT } from "../constants";  // Import HERO_CONTENT data from constants
import profilePic1 from "../assets/A.jpg";  // Import profile picture (replace with actual image path)
import { motion } from "framer-motion";    // Import motion for animations

// Container motion animation settings with delay for each element
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },   // Element starts off-screen to the left and transparent
  visible: {
    x: 0,                         // Move to normal position
    opacity: 1,                    // Fully opaque
    transition: { duration: 0.5, delay: delay },   // Duration and delay for the transition
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-6 lg:pb-16 lg:mb-36"> 
      <div className="flex flex-wrap justify-center items-center">
        {/* Main wrapper: flexbox to center content */}
        <div className="w-full lg:w-1/2 px-4 flex justify-center">
          {/* Left Section (Content and Profile Picture) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Profile Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center lg:p-10 lg:ml-60">
              <motion.img
                initial={{ x: 100, opacity: 0 }}  // Initial position for animation (off-screen and transparent)
                animate={{ x: 0, opacity: 1 }}    // Move image into place (fully visible)
                transition={{ duration: 1, delay: 1.2 }}  // Set transition duration and delay
                src={profilePic1}  // Profile picture source
                alt="Profile"
                className="w-60 lg:w-full h-80 sm:h-64 md:h-70 lg:h-80 rounded-full object-cover shadow-lg"  // Image styling
              />
            </div>

            {/* Name Section with fully responsive text size */}
            <motion.h1
              variants={container(0)}    // Animation variant for this text
              initial="hidden"           // Start as hidden
              animate="visible"          // Animate to visible state
              className="pb-4 text-base sm:text-3xl md:text-4xl lg:text-4xl lg:ml-10 lg:text-justify xl:text-4xl 2xl:text-6xl font-bold tracking-tight text-[#CBA35C] leading-1 mt-5"
            >
              Mohammad Arshad Siddique    {/* Name text */}
            </motion.h1>

            {/* Description Content Section */}
            <motion.p
              variants={container(1)}    // Animation for this paragraph
              initial="hidden"           // Start as hidden
              animate="visible"          // Animate to visible state
              className="font-poppins my-2 max-w-xl py-4 font-medium tracking-normal text-justify text-[#f0f0f0] text-base"

            >
              {HERO_CONTENT} {/* Hero content (could be a paragraph or introductory text) */}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
