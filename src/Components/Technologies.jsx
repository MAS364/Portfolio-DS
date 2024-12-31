// import { FaPython } from "react-icons/fa";
// import {
//   SiNumpy,
//   SiPandas,
//   SiScikitlearn,
//   SiTensorflow,
//   SiOpencv,
//   SiJupyter,
//   SiMysql,
//   SiPostgresql,
//   SiMongodb,
//   SiTableau,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const SkillCard = ({ icon, name }) => (
//   <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-2 w-[120px]">
//     <div className="text-4xl">{icon}</div>
//     <span className="text-sm text-gray-600">{name}</span>
//   </div>
// );

// const Technologies = () => {
//   return (
//     <div className="py-16 px-4">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto mt-5 pb-2"
//       >
//         SKILLS
//       </motion.h2>

//       <div className="max-w-4xl mx-auto space-y-12">
//         {/* Programming Languages */}
//         <div className="space-y-4">
//           <h3 className="text-xl text-center mb-6">Programming Languages</h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <SkillCard
//               icon={<FaPython className="text-[#3776AB]" />}
//               name="Python"
//             />
//             {/* <SkillCard icon={<SiJupyter className="text-[#F37626]" />} name="Jupyter" /> */}
//           </div>
//         </div>

//         {/* Data Science Libraries */}
//         <div className="space-y-4">
//           <h3 className="text-xl text-center mb-6">Data Science Libraries</h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <SkillCard
//               icon={<SiNumpy className="text-[#013243]" />}
//               name="NumPy"
//             />
//             <SkillCard
//               icon={<SiPandas className="text-[#150458]" />}
//               name="Pandas"
//             />
//             <SkillCard
//               icon={<SiScikitlearn className="text-[#F7931E]" />}
//               name="Scikit-learn"
//             />
//             {/* <SkillCard icon={<SiTensorflow className="text-[#FF6F00]" />} name="TensorFlow" /> */}
//             {/* <SkillCard icon={<SiOpencv className="text-[#5C3EE8]" />} name="OpenCV" /> */}
//           </div>
//         </div>

//         {/* Databases & Visualization */}
//         <div className="space-y-4">
//           <h3 className="text-xl text-center mb-6">
//             Databases & Visualization
//           </h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <SkillCard
//               icon={<SiMysql className="text-[#4479A1]" />}
//               name="MySQL"
//             />
//             <SkillCard className="text-[#4479A1]" name="PowerBi" />
//             {/* <SkillCard icon={<SiPostgresql className="text-[#4169E1]" />} name="PostgreSQL" /> */}
//             {/* <SkillCard icon={<SiMongodb className="text-[#47A248]" />} name="MongoDB" /> */}
//             {/* <SkillCard icon={<SiTableau className="text-[#E97627]" />} name="PowerBi" /> */}
//             {/* <SkillCard icon={<SiPowerbi className="text-[#D5D5D5]" />} name="Power BI" /> */}
//           </div>
//         </div>

//         {/* Tools */}
//         <div className="space-y-4">
//           <h3 className="text-xl text-center mb-6">Tools</h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <SkillCard
//               icon={<SiJupyter className="text-[#F37626]" />}
//               name="Jupyter"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;




import { FaPython } from "react-icons/fa";                      // Import Python icon from react-icons
import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTableau,
} from "react-icons/si";                                        // Import multiple icons for technologies
import { motion } from "framer-motion";                           // Import motion for animations

// SkillCard component to display each individual skill (icon & name)
const SkillCard = ({ icon, name }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-2 w-[120px]">
    {/* Display the icon and the skill name */}
    <div className="text-4xl">{icon}</div>
    <span className="text-sm text-gray-600">{name}</span>
  </div>
);

const Technologies = () => {
  return (
    <div className="py-16 px-4">
      {/* Section Title with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}                             // Set initial opacity and y position
        animate={{ opacity: 1, y: 0 }}                               // Animate to full opacity and reset y position
        transition={{ duration: 0.5 }}                                // Set transition duration
        className="my-20 text-center text-4xl text-[#CBA35C] font-poppins font-bold border-b-4 border-white w-fit mx-auto mt-5 pb-2"
      >
        SKILLS
      </motion.h2>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Programming Languages Section */}
        <div className="space-y-4">
          <h3 className="text-xl text-center mb-6">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard
              icon={<FaPython className="text-[#3776AB]" />}       // Python icon with its color
              name="Python"
            />
            {/* Example of another SkillCard */}
            {/* <SkillCard icon={<SiJupyter className="text-[#F37626]" />} name="Jupyter" /> */}
          </div>
        </div>

        {/* Data Science Libraries Section */}
        <div className="space-y-4">
          <h3 className="text-xl text-center mb-6">Data Science Libraries</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard
              icon={<SiNumpy className="text-[#013243]" />}
              name="NumPy"
            />
            <SkillCard
              icon={<SiPandas className="text-[#150458]" />}
              name="Pandas"
            />
            <SkillCard
              icon={<SiScikitlearn className="text-[#F7931E]" />}
              name="Scikit-learn"
            />
            {/* Optionally include other libraries */}
            {/* <SkillCard icon={<SiTensorflow className="text-[#FF6F00]" />} name="TensorFlow" /> */}
            {/* <SkillCard icon={<SiOpencv className="text-[#5C3EE8]" />} name="OpenCV" /> */}
          </div>
        </div>

        {/* Databases & Visualization Section */}
        <div className="space-y-4">
          <h3 className="text-xl text-center mb-6">Databases & Visualization</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard
              icon={<SiMysql className="text-[#4479A1]" />}
              name="MySQL"
            />
            <SkillCard
              icon={<SiTableau className="text-[#E97627]" />}
              name="Tableau"
            />
            {/* Uncomment to add other technologies */}
            {/* <SkillCard icon={<SiPostgresql className="text-[#4169E1]" />} name="PostgreSQL" /> */}
            {/* <SkillCard icon={<SiMongodb className="text-[#47A248]" />} name="MongoDB" /> */}
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-4">
          <h3 className="text-xl text-center mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard
              icon={<SiJupyter className="text-[#F37626]" />}
              name="Jupyter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
