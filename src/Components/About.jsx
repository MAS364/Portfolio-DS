
import aboutImg from "../assets/about.jpg";  // Import about image
import Education from "../assets/boy.jpg";   // Import education image
import { ABOUT_TEXT } from "../constants";  // Import about text content from constants
import { motion } from "framer-motion";     // Import motion component from framer-motion for animations

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4"> {/* Bottom border for the About section */}
      <h2 className="my-20 text-center text-4xl font-poppins font-bold mb-8">
        {/* Title with "About Me" section */}
        <span className="border-b-4">About</span>
        <span className="text-[#CBA35C] border-b-4 mx-2">Me</span>
      </h2>

      <div className="flex flex-wrap"> {/* Flexbox to wrap the content into two sections */}
        {/* Image section with motion animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}  // Set animation to fade in and slide in from the left
          initial={{ opacity: 0, x: -100 }}   // Initial state: hidden and off-screen
          transition={{ duration: 0.5 }}      // Set animation duration to 0.5 seconds
          className="w-full lg:w-1/2 lg:p-8"  // Full width on small screens, half width on large screens
        >
          <div className="flex items-center justify-center">
            {/* Display the education image */}
            <img className="rounded-2xl w-80" src={Education} alt="about" />
          </div>
        </motion.div>

        {/* Text section with motion animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}  // Set animation to fade in and slide in from the right
          initial={{ opacity: 0, x: 100 }}    // Initial state: hidden and off-screen
          transition={{ duration: 0.5 }}      // Set animation duration to 0.5 seconds
          className="w-full lg:w-1/2"         // Full width on small screens, half width on large screens
        >
          <div className="flex justify-center lg:justify-start">
            {/* Display the about text */}
            <p className="my-2 max-w-xl py-6 text-justify font-poppins font-medium text-[#f0f0f0] text-base">
              {ABOUT_TEXT} {/* About text content injected here */}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
