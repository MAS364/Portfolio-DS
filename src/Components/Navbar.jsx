// import React from "react";
// import logo from "../assets/logo.png";
// import { FaLinkedin, FaGithub, FaSquare, FaDownload } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img
//           className="mx-2 w-14 h-14 rounded-full hover:bg-purple-700"
//           src={logo}
//           alt="logo"
//         />
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a
//           href="https://drive.google.com/file/d/1aLCYx9A0GAIDPm8aTWGWICC-iqy7J9ws/view?usp=drive_link"
//           download
//           className="hover:text-purple-900"
//         >
//           <FaDownload />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/mas364/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-900"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/MAS364"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-900"
//         >
//           <FaGithub />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";                    // Import React
import logo from "../assets/logo.png";         // Import the logo image (replace with actual image path)
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"; // Import icons for LinkedIn, GitHub, and Download

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-14 h-14 rounded-full hover:bg-purple-700" // Image style: size, rounded corners, hover effect
          src={logo} 
          alt="logo"
        />
      </div>

      {/* Links Section (Download, LinkedIn, GitHub) */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Download link */}
        <a
          href="https://drive.google.com/file/d/1aLCYx9A0GAIDPm8aTWGWICC-iqy7J9ws/view?usp=drive_link"  // Link to Google Drive file
          download
          className="hover:text-purple-900"  // Hover effect to change text color
        >
          <FaDownload />  {/* Download Icon */}
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/mas364/"  // LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"  // Security feature for links opening in a new tab
          className="hover:text-purple-900"  // Hover effect to change text color
        >
          <FaLinkedin />  {/* LinkedIn Icon */}
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/MAS364"  // GitHub profile link
          target="_blank"
          rel="noopener noreferrer"  // Security feature for links opening in a new tab
          className="hover:text-purple-900"  // Hover effect to change text color
        >
          <FaGithub />  {/* GitHub Icon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
