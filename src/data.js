export const COURSES = [
  "1 Year Diploma",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
  "Cyber Security",
  "Ethical Hacking",
  "Full Stack Web Development",
  "Web Development",
  "Web Designing",
  "Cloud Computing",
  "React JS",
  "Digital Marketing Course",
  "Python",
  "Java",
  "6 Months Training",
  "6 Weeks Training",
  "Internship",
  "Graphic Designing",
  "Software Testing",
  "Other",
];

export const DEMO_COURSES = [
  "Full Stack Web Development",
  "Artificial Intelligence",
  "Data Science",
  "Cyber Security",
  "Digital Marketing Course",
  "Graphic Designing",
  "6 Months Training",
  "Internship",
  "Other",
];

export const BRANCHES = [
  "Chandigarh",
  "Mohali",
  "Zirakpur",
  "Patiala",
  "Hamirpur",
  "Dharamshala",
  "Solan",
  "Ambala",
  "Online Mode",
];

export const CONTACT_BRANCHES = [
  "Chandigarh",
  "Mohali",
  "Zirakpur",
  "Patiala",
  "Hamirpur",
  "Dharamshala",
  "Solan",
];

export const PROGRAMS = [
  {
    title: "UI/UX Design Team",
    focus: "Photoshop, Figma & UX Research",
    emoji: "🎨",
    bg: "#f2f2f2",
    intro: "Intuitive interfaces, Photoshop assets, and production-ready Figma files for SaaS and e-commerce products.",
    icon: "uiux",
    tools: ["Photoshop", "Figma", "Wireframes"],
    points: [
      "Photoshop & Visual Design: high-fidelity UI mockups, banners, and marketing creatives.",
      "Advanced Figma & Variables: component libraries and responsive auto-layout templates.",
      "UX Research & Wireframing: complex user journey maps for multi-page products.",
    ],
  },
  {
    title: "Front-End Team",
    focus: "React, Vue, Tailwind CSS",
    emoji: "💻",
    bg: "#f2f2f2",
    intro: "High-speed UI code in React, Vue, and Tailwind CSS with a clean Figma-to-code workflow.",
    icon: "frontend",
    tools: ["React", "Vue", "Tailwind"],
    points: [
      "Figma-to-React Workflow: convert designs into optimized React components.",
      "Modern UI Frameworks: reusable Vue and React components with Tailwind CSS.",
      "Core Web Vitals Optimization: faster pages, lighter assets, lower bounce rates.",
    ],
  },
  {
    title: "Back-End Team",
    focus: "Laravel & Node.js Experts",
    emoji: "⚙️",
    bg: "#f2f2f2",
    intro: "Custom Laravel solutions and Node.js APIs built for scale, security, and real-time use.",
    icon: "backend",
    tools: ["Laravel", "Node.js", "SQL"],
    points: [
      "Advanced Laravel Architectures: packages, repository patterns, event-driven design.",
      "Scalable APIs with Node.js: microservices architecture and real-time sockets.",
      "Database Optimization: SQL query caching and indexing for MySQL and related databases.",
    ],
  },
  {
    title: "CMS & E-commerce Team",
    focus: "Shopify, WordPress, Wix & Squarespace",
    emoji: "🛍️",
    bg: "#f2f2f2",
    intro: "High-performance storefronts and custom sites on Shopify, WordPress, Wix, and Squarespace.",
    icon: "commerce",
    tools: ["Shopify", "WordPress", "Wix", "Squarespace"],
    points: [
      "Shopify Liquid & Hydrogen: custom theme setups and headless Shopify commerce.",
      "WordPress Builds: custom themes, plugins, and content-driven websites.",
      "Wix & Squarespace: polished marketing sites and storefronts for faster go-live.",
    ],
  },
  {
    title: "Digital Marketing & SEO Team",
    focus: "Traffic, CRO & Growth",
    emoji: "📈",
    bg: "#f2f2f2",
    intro: "Marketing systems that grow client traffic, conversions, and revenue.",
    icon: "marketing",
    tools: ["SEO", "CRO", "Schema", "AI Content"],
    points: [
      "Technical SEO Mastery: site architecture, schema markup, and programmatic SEO.",
      "Conversion Rate Optimization: A/B testing with tools like Hotjar and Optimizely.",
      "AI in Marketing: SEO content, programmatic keywords, and ad-copy execution.",
    ],
  },
];

export const COURSE_CARDS = [
  {
    title: "UI/UX Design",
    lead: "UI/UX",
    accent: "Design",
    intro: "Learn Figma, Photoshop, and UX research to design job-ready product interfaces.",
    duration: "2–6 Months",
    image: "/course-photos/uiux.jpg",
    tools: [
      { name: "Figma", file: "figma.svg" },
      { name: "Photoshop", file: "photoshop.svg" },
      { name: "Illustrator", file: "illustrator.svg" },
    ],
  },
  {
    title: "Graphics Design",
    lead: "Graphics",
    accent: "Design",
    intro: "Learn design tools, creative techniques, and build real-world projects.",
    duration: "2–6 Months",
    image: "/course-photos/graphic.jpg",
    tools: [
      { name: "Photoshop", file: "photoshop.svg" },
      { name: "Illustrator", file: "illustrator.svg" },
      { name: "CorelDRAW", file: "coreldraw.svg" },
      { name: "InDesign", file: "indesign.svg" },
    ],
  },
  {
    title: "Front End Development",
    lead: "Front End",
    accent: "Development",
    intro: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive, real-world websites.",
    duration: "2–6 Months",
    image: "/course-photos/frontend.jpg",
    tools: [
      { name: "HTML", file: "html5.svg" },
      { name: "CSS", file: "css3.svg" },
      { name: "JS", file: "javascript.svg" },
      { name: "React", file: "react.svg" },
      { name: "Bootstrap", file: "bootstrap.svg" },
    ],
  },
  {
    title: "Full Stack Development",
    lead: "Full Stack",
    accent: "Development",
    intro: "Learn frontend, backend, databases and deployment to build real-world web applications.",
    duration: "3–6 Months",
    image: "/course-photos/fullstack.jpg",
    tools: [
      { name: "React", file: "react.svg" },
      { name: "Node.js", file: "nodejs.svg" },
      { name: "MongoDB", file: "mongodb.svg" },
      { name: "Express", file: "express.svg" },
      { name: "Next.js", file: "nextjs.svg" },
      { name: "MySQL", file: "mysql.svg" },
    ],
  },
  {
    title: "CMS & E-commerce",
    lead: "CMS &",
    accent: "E-commerce",
    intro: "Learn WordPress, WooCommerce, Shopify and more to build powerful websites and online stores.",
    duration: "2–6 Months",
    image: "/course-photos/cms.jpg",
    tools: [
      { name: "WordPress", file: "wordpress.svg" },
      { name: "WooCommerce", file: "woocommerce.svg" },
      { name: "Shopify", file: "shopify.svg" },
      { name: "Wix", file: "wix.svg" },
      { name: "Elementor", file: "elementor.svg" },
    ],
  },
  {
    title: "Digital Marketing & SEO",
    lead: "Digital Marketing &",
    accent: "SEO",
    intro: "Learn social media marketing, Google Ads, SEO, content marketing and more to grow real businesses online.",
    duration: "2–6 Months",
    image: "/course-photos/marketing.jpg",
    tools: [
      { name: "Google Ads", file: "googleads.svg" },
      { name: "Meta Ads", file: "meta.svg" },
      { name: "Instagram", file: "instagram.svg" },
      { name: "YouTube", file: "youtube.svg" },
      { name: "Analytics", file: "analytics.svg" },
      { name: "SEMrush", file: "semrush.svg" },
    ],
  },
];

export const COMBOS = [
  {
    title: "Full Stack Combo Pack with AI",
    skills: ["MERN Stack", "React JS", "DSA", "DevOps", "Python", "DBMS"],
  },
  {
    title: "Data Scientist Combo Pack with AI",
    skills: ["Data Science", "Data Analysis", "Python", "DSA", "DBMS with SQL", "ML"],
  },
  {
    title: "AI Engineer Combo Pack with Pro Tools",
    skills: ["Python", "Gen AI", "Data Science", "ML", "Deep Learning", "NLP"],
  },
  {
    title: "Cyber Security Expert Combo Pack with AI",
    skills: ["Cyber Security", "Web Security", "Digital Forensics", "Ethical Hacking", "Linux", "Cloud Security"],
  },
  {
    title: "Graphic Design Combo Pack with AI",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Graphic Design with AI", "UI Design", "UX Strategy"],
  },
  {
    title: "Digital Marketing Combo Pack with AI",
    skills: ["Performance Marketing", "SEO", "Copy Writing", "Social Growth", "Frontend Art", "Backend Logic"],
  },
];

export const BRANCH_CARDS = [
  { city: "Chandigarh", text: "SCO 62-63, Second Floor, Sector 34A, Chandigarh 160022" },
  { city: "Mohali", text: "C-133, First Floor, Industrial Area Phase 8, Sector 72, Mohali" },
  { city: "Zirakpur", text: "Classroom training with the same curriculum and placement support." },
  { city: "Patiala", text: "Career programs and industrial training for local students." },
  { city: "Hamirpur", text: "Lower Bazar, Near Shiv Mandir, Hamirpur (Himachal Pradesh)" },
  { city: "Dharamshala", text: "Building no. 336A, 2nd Floor, Above IndusInd Bank, Civil Bazar" },
  { city: "Solan", text: "Himachal center with flexible batches and demo classes." },
  { city: "Ambala", text: "Industrial training and professional IT courses for Haryana students." },
];

export const FAQS = [
  {
    q: "Which is the best institute for industrial training in Chandigarh and Mohali?",
    a: "Excellence Technology is widely recognized as one of the best institutes for industrial training in Chandigarh and Mohali. We provide ISO-certified, career-oriented courses in Python, Java, Digital Marketing, and Web Development with 100% practical training on live projects to ensure real industry exposure.",
    open: true,
  },
  {
    q: "Does Excellence Technology provide 100% job placement assistance?",
    a: "Yes, we offer dedicated placement assistance to all our students. With 700+ hiring partners and a track record of training 12,000+ professionals on this campus network, we help students secure job opportunities in leading IT companies and MNCs after successful course completion.",
  },
  {
    q: "What professional courses are available at Excellence Technology?",
    a: "We offer industry-focused programs including Full Stack Development, Data Science, Cyber Security, Digital Marketing, and HR Training. All courses are designed according to current IT industry demands in the Tricity region.",
  },
  {
    q: "Is the certification from Excellence Technology valid for international jobs?",
    a: "Yes. Excellence Technology is an ISO 9001:2015 certified company. Our certifications are globally recognized and help students apply for job opportunities both in India and abroad.",
  },
  {
    q: "Can I attend a demo class before enrolling?",
    a: "Absolutely! We provide free demo sessions so students can experience our practical teaching approach and interact with expert trainers before enrolling.",
  },
];
