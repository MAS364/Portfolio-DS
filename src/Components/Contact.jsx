// import React from "react";
// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";
// import { FaCoffee } from "react-icons/fa"; // React Icon for coffee

// const Contact = () => {
//   return (
//     <div className=" border-b border-neutral-900 pb-20">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         // className="my-10 text-center text-4xl "
//         className="my-5 text-center text-3xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto pb-2"
//       >
//         Reach Me At
//       </motion.h2>

//       <div className="text-center tracking-tighter ">
//         {/* Email-Id */}
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-4"
//         >
//           {" "}
//           <a href="#">{CONTACT.email}</a>
//         </motion.p>

//         {/* Phone & Address */}
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//           className=" my-2"
//         >
//           {CONTACT.phoneNo}
//         </motion.p>
//         {CONTACT.address}
//       </div>

//       <div className="w-full">
//         <p className="text-sm text-gray-100 font-semibold text-center mt-20">
//           Made with <span className="text-red-500">❤️</span> and{" "}
//           <span className="text-yellow-400">☕</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React from "react";
import { CONTACT } from "../constants";  // Import contact information from constants
import { motion } from "framer-motion";   // Import motion component from framer-motion for animations
import { FaCoffee } from "react-icons/fa"; // React Icon for coffee (currently not used, but can be added if needed)

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20"> {/* Border and padding for the contact section */}
      {/* Motion header with animation for the "Reach Me At" text */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}  // Fade in and slide down
        initial={{ opacity: 0, y: -100 }}   // Initial state: hidden and off-screen upwards
        transition={{ duration: 0.5 }}       // Transition duration
        className="my-5 text-center text-3xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto pb-2"
      >
        Reach Me At
      </motion.h2>

      <div className="text-center tracking-tighter">
        {/* Motion paragraph for Email-Id */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}  // Slide in from left with fade-in
          initial={{ opacity: 0, x: -100 }}   // Initial state: hidden and off-screen left
          transition={{ duration: 1 }}         // Transition duration
          className="my-4"
        >
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> {/* Mailto link for email */}
        </motion.p>

        {/* Motion paragraph for Phone number */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}  // Slide in from right with fade-in
          initial={{ opacity: 0, x: 100 }}    // Initial state: hidden and off-screen right
          transition={{ duration: 1 }}         // Transition duration
          className="my-2"
        >
          {CONTACT.phoneNo} {/* Display phone number */}
        </motion.p>

        {/* Motion paragraph for Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}  // Fade-in effect
          initial={{ opacity: 0, x: 0 }}     // No initial slide, just fade-in
          transition={{ duration: 1 }}        // Transition duration
        >
          {CONTACT.address} {/* Display contact address */}
        </motion.p>
      </div>

      <div className="w-full">
        {/* Footer section with a message */}
        <p className="text-sm text-gray-100 font-semibold text-center mt-20">
          Made with <span className="text-red-500">❤️</span> and{" "}
          <span className="text-yellow-400">☕</span> {/* Heart and coffee emojis */}
        </p>
      </div>
    </div>
  );
};

export default Contact;

