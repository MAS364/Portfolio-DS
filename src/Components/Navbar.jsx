import React from "react"; // Import React
import logo from "../assets/logo.png"; // Import the logo image (replace with actual image path)
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"; // Import icons for LinkedIn, GitHub, and Download
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-14 h-14 rounded-full hover:bg-purple-700" // Image style: size, rounded corners, hover effect
          src={logo}
          alt="logo"
        />
      </div>

      {/* Links Section (Download, Leetcode, LinkedIn, GitHub, ) */}

      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        
        {/* Download link} */}

        <a
          href="https://leetcode.com/u/siddiquiarshad106/" // LeetCode profile link
          target="_blank"
          rel="noopener noreferrer" // Security feature for links opening in a new tab
          className="hover:text-orange-500" // Hover effect with LeetCode brand color
        >
          <SiLeetcode /> {/* LeetCode Icon */}
        </a>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/mas364/" // LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer" // Security feature for links opening in a new tab
          className="hover:text-purple-900" // Hover effect to change text color
        >
          <FaLinkedin /> {/* LinkedIn Icon */}
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/MAS364" // GitHub profile link
          target="_blank"
          rel="noopener noreferrer" // Security feature for links opening in a new tab
          className="hover:text-purple-900" // Hover effect to change text color
        >
          <FaGithub /> {/* GitHub Icon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
