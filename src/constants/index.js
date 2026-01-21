export const HERO_CONTENT = `
Hi, I’m Siddique Mohammad Arshad, a data analyst passionate about transforming raw data into actionable insights, with a knack for uncovering trends that drive strategic decision-making. Let’s collaborate to turn numbers into meaningful stories that fuel growth.
`;

export const ABOUT_TEXT = `I’m a software engineer with 2 years of experience in front-end technologies, but my journey didn’t stop there. Driven by a curiosity to uncover the stories hidden in data, I transitioned into the data field to explore its power to solve complex problems and drive impactful decisions.

Proficient in Python, SQL, and Power BI, I have a strong foundation in data cleaning, exploratory data analysis (EDA), and dashboard creation. Leveraging libraries like Pandas, NumPy, Matplotlib, and Seaborn, I excel at extracting actionable insights and developing predictive models using machine learning techniques. I specialize in communicating complex data through compelling visualizations and presentations, supporting informed decision-making. Additionally, my expertise in front-end technologies like HTML, CSS, JavaScript, and ReactJS enables me to build interactive and user-friendly data applications.

I thrive in collaborative team environments and quickly adapt to dynamic challenges. Driven by a passion for data-driven solutions, I focus on developing innovative analytics that address critical business needs. My goal is to continue growing as a Data Scientist, using my expanding knowledge to drive meaningful impact through analytics and innovation.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Oct 2025",
    role: "Business Analyst Intern",
    company: "Unified Mentor Pvt Ltd",
    description: [
      "Completed a 6-month hands-on programme focused on real-world business analytics",
      "Used SQL, Power BI, Excel, and Python for data cleaning, transformation, and analysis",
      "Built end-to-end dashboards including a Pizza Sales Analysis project tracking key KPIs",
      "Performed exploratory data analysis (EDA) to identify trends and insights",
      "Presented insights through clear dashboards and stakeholder-ready reports",
      "Worked with ETL processes, KPI tracking, and Power BI dashboard automation",
    ],
  },
  {
    year: "Feb 2023 - Feb 2025",
    role: "Software Engineer",
    company: "Mindtech iSolutions",
    description: [
      "Developed responsive, user-focused web applications using React.js, HTML, CSS, and JavaScript",
      "Collaborated with cross-functional teams to convert wireframes into production-ready code",
      "Built reusable React components, reducing development time by approximately 40%",
      "Integrated REST APIs to display dynamic data in applications",
      "Optimised applications for performance, mobile responsiveness, and cross-browser compatibility",
      "Improved load times using optimisation techniques such as lazy loading",
    ],
    // technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Text-Analysis-Cloud",
    description:
      "A cloud-based text analysis system built on AWS using an event-driven architecture. Users can upload single or multiple text files via a Flask web application, which processes documents in parallel to extract word frequency, sentence-start patterns, and sentence-length statistics. The system leverages serverless components for scalability, fault isolation, and efficient on-demand processing.",
    technologies: [
      "AWS S3",
      "AWS Lambda",
      "API Gateway",
      "Flask",
      "EC2",
      "Python",
      "ThreadPoolExecutor",
    ],
    url: "",
    code: "https://github.com/MAS364/Cloud-Text_Analysis",
  },
  {
    title: "Ecommerce-Cloud-Analytics Web App (BigQuery + Cloud Run)",
    description:
      "Built a cloud-native analytics web application deployed on Google Cloud Run to analyse e-commerce performance using Google BigQuery. The application executes custom, business-driven SQL queries on the public thelook_ecommerce dataset to answer key business questions such as top-performing products and distribution-centre performance. Insights are visualised through Looker Studio dashboards, enabling scalable, data-driven reporting and interactive exploration of sales and operational metrics.",
    url: "https://task-b-cloud-run-1023861211173.europe-west2.run.app/",
    technologies: ["Google BigQuery", "Google Cloud Run", "Flask", "SQL", "Docker", "GCP"],
    code: "https://github.com/MAS364/Ecommerce-DataInsights-BigQuery",
  },
  {
    title: "Flight Price Analysis and Visualization",
    description:
      "Analysed and visualised flight price data to identify trends and insights across multiple airlines. Performed exploratory data analysis (EDA) using Pandas, NumPy, and Seaborn to understand price patterns and key drivers.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn"],
    url: "",
    code: "https://github.com/MAS364/EDA---Flight-Price-Prediction",
  },
  {
    title: "Sales Analysis Dashboard",
    description:
      "Developed an interactive Sales Analysis Dashboard to track and visualise sales trends, profitability, and customer purchasing patterns from 2020 to 2024. Analysed KPIs including total sales, profit margins, product performance, and promotional effectiveness.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZjhjMDU3MzUtOTQ4YS00YmY1LWI1MWQtZmY0MzNhMTk4OTBiIiwidCI6IjRlMDRjNGVjLTEyYzMtNDdhYy05MzhkLTFmZWZjODExNTE2MCJ9&pageName=870538b047557d673905",
    technologies: ["Power BI", "DAX", "Excel"],
    code: "https://github.com/MAS364/PowerBI_Projects/tree/main/Project%20-%20Sales%20Data%20Analysis",
  },
  {
    title: "Bicycle Company Quarterly Sales Dashboard",
    description:
      "Developed a quarterly sales performance report for Adventure Works, analysing sales trends, product categories, regional performance, and salesperson contributions to provide actionable business insights.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNGIxYjRlN2MtN2MyMS00OTVlLTk3MzItZmU4NjY0ZmU1OThmIiwidCI6IjRlMDRjNGVjLTEyYzMtNDdhYy05MzhkLTFmZWZjODExNTE2MCJ9",
    technologies: ["Power BI", "DAX", "Excel"],
    code: "https://github.com/MAS364/PowerBI_Projects/tree/main/Project%20-%20Bicycle%20Quarter%20Sales%20Report",
  },
  {
    title: "UPI Transaction Analysis",
    description:
      "Built a UPI transaction analysis dashboard to track digital payment trends, user demographics, and transaction patterns across multiple cities, providing insights into volumes, payment methods, and banking trends.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjc4NjM0NmMtYzI1Ny00YmY2LTlmYzctMWEyMjA0NzJmZjM0IiwidCI6IjRlMDRjNGVjLTEyYzMtNDdhYy05MzhkLTFmZWZjODExNTE2MCJ9",
    technologies: ["Power BI", "DAX", "Excel"],
    code: "https://github.com/MAS364/PowerBI_Projects/tree/main/Project%20-%20UPI%20Transaction%20Analysis",
  },
  {
    title: "Youtube Clone",
    description:
      "A YouTube clone app that allows users to browse and search videos using the YouTube API. Users can view results and play selected videos in a clean, responsive interface.",
    technologies: ["React", "Tailwind CSS", "HTML", "Rapid API"],
    url: "https://mas-clone.vercel.app/",
    code: "https://github.com/MAS364/YClone",
  },
  {
    title: "CoinBit",
    description:
      "A crypto tracker app that enables users to search cryptocurrencies and view trending coins. Integrated real-time data from the Coingecko API for live price updates.",
    technologies: ["React", "Tailwind", "Coingecko API", "Material UI"],
    url: "https://mas-crypto.vercel.app/",
    code: "https://github.com/MAS364/Cryptotracker",
  },
  {
    title: "React Components",
    description:
      "Built multiple React components to strengthen understanding of state management, component lifecycle, and event handling within React.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://components-mas-react.vercel.app/",
    code: "https://github.com/MAS364/Components",
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra",
  phoneNo: "+91-8898570670",
  email: "siddiquiarshad106@gmail.com",
};
