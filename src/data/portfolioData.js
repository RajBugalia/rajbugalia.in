export const portfolioData = {
  personal: {
    name: "Raj Bugalia",
    tagline: "Android & Full-Stack Developer",
    roles: [
      "Android Application Developer",
      "Full-Stack Engineer",
      "Spring Boot Backend Builder",
      "NPTEL Rank 1 (DSA Java)",
      "Jetpack Compose Enthusiast"
    ],
    summary:
      "Passionate Software Engineer with hands-on experience developing production-grade Android applications and robust Spring Boot backends. Known for building resilient offline-first systems, computer-vision AI integrations, and high-performance algorithms.",
    location: "Vadodara, Gujarat / Noida, India",
    email: "rajbugalia0602@gmail.com",
    phone: "+91 8958219555",
    github: "https://github.com/RajBugalia",
    linkedin: "https://linkedin.com/in/raj-bugalia",
    leetcode: "https://leetcode.com/u/raj_bugalia/",
    status: "Open to Full-time Roles & Internships",
    resumeUrl: "#contact"
  },

  stats: [
    { label: "IMCA CGPA", value: "8.34", subtext: "Parul University" },
    { label: "NPTEL All-India", value: "Rank 1", subtext: "DSA using Java" },
    { label: "Intermediate", value: "90.04%", subtext: "CBSE Board (Prince Academy)" },
    { label: "Flagship Apps", value: "3+", subtext: "Production & AI Mobile Systems" }
  ],

  about: {
    paragraphs: [
      "I am an Integrated Master of Computer Applications (IMCA) student at Parul University with a deep passion for mobile application engineering and scalable backend services. My development philosophy revolves around clean architecture, offline-first reliability, and clean code.",
      "Having built full-stack solutions ranging from distributed digital signage networks with heartbeat device synchronization (Viewo) to AI-powered nutrition trackers, I thrive at the intersection of slick user interfaces and sturdy backend infrastructure.",
      "With an All-India Rank 1 in NPTEL's Data Structures & Algorithms using Java, I bring rigorous algorithmic problem-solving to every system I architect, whether optimizing SQLite/Room queries, designing RESTful contracts, or streamlining state management in Jetpack Compose."
    ],
    highlights: [
      {
        title: "Modern Android Architecture",
        desc: "Jetpack Compose, MVVM/Clean Architecture, Kotlin Coroutines, Room DB, CameraX, and Hilt Dependency Injection."
      },
      {
        title: "Spring Boot & RESTful APIs",
        desc: "End-to-end backend engineering, multi-part uploads, proof-of-play telemetry, and secure API gateways."
      },
      {
        title: "Algorithmic Precision",
        desc: "NPTEL Rank 1 in Data Structures & Algorithms using Java, active LeetCode problem solver, and solid OOP fundamentals."
      },
      {
        title: "Leadership & Community",
        desc: "Campus Ambassador for E-Cell IIT Kanpur (2025-26), driving entrepreneurship summits and developer outreach."
      }
    ]
  },

  experience: [
    {
      company: "CyberMitra Technologies Pvt. Ltd.",
      role: "Application Developer (Android) – Intern",
      period: "Jul 2026 – Sep 2026",
      type: "Internship (Hybrid)",
      location: "Noida, India",
      description:
        "Engineered full-stack client applications connecting Android frontends to robust Spring Boot backends under tight production timelines.",
      bullets: [
        "Developed full-stack client applications with a Java/Kotlin Android frontend and a Spring Boot backend, building features end-to-end for live client projects.",
        "Collaborated closely with engineering leads during sprint planning, architectural code reviews, and product triage to ship reliable, production-ready releases.",
        "Designed, tested, and consumed RESTful APIs to connect mobile applications with microservices, ensuring secure token authentication, data serialization, and fault-tolerant error boundaries."
      ],
      technologies: ["Android SDK", "Java", "Kotlin", "Spring Boot", "REST APIs", "Git", "Postman"]
    }
  ],

  projects: [
    {
      id: "viewo",
      title: "Viewo — Digital Signage Platform",
      category: "Mobile & Full Stack",
      featured: true,
      badge: "Flagship System",
      period: "Dec 2026",
      shortDesc:
        "Comprehensive digital signage solution comprising an Android client application and a Spring Boot backend to broadcast and manage scheduled media campaigns across remote screens.",
      longDesc:
        "Viewo is designed for commercial display networks where network connectivity is intermittent and zero-downtime media playback is non-negotiable. It features real-time device pairing via pairing codes, automated heartbeat status monitoring, smart offline media caching with Room Database and ExoPlayer, and robust backend analytics for proof-of-play verification.",
      stack: ["Kotlin", "Jetpack Compose", "Spring Boot", "Room Database", "ExoPlayer", "REST APIs", "Heartbeat Sync"],
      metrics: [
        { label: "Reliability", value: "100% Offline Resilience" },
        { label: "Sync", value: "Real-time Heartbeat" },
        { label: "Media Engine", value: "ExoPlayer + Room Cache" }
      ],
      architectureHighlights: [
        "Engineered real-time device pairing system with periodic heartbeat monitoring, enabling remote administrators to assign media playlists and scheduled campaigns dynamically.",
        "Implemented smart pre-fetching and local caching using Room Database and ExoPlayer, ensuring continuous video/image playback even during prolonged network disruptions.",
        "Built a Spring Boot backend handling high-volume RESTful API requests, multi-part video uploads, and proof-of-play analytics tracking.",
        "Modern declarative UI built entirely with Jetpack Compose following MVI/MVVM principles."
      ],
      github: "https://github.com/RajBugalia",
      demo: null
    },
    {
      id: "smart-nutrition",
      title: "Smart Nutrition Tracking Application",
      category: "Mobile & AI",
      featured: true,
      badge: "AI Powered",
      period: "Jan 2026",
      shortDesc:
        "AI-enabled health & fitness Android application featuring real-time meal image recognition, automated macronutrient breakdown, and body-metric calculators.",
      longDesc:
        "An intelligent dietary companion that removes manual food logging friction. Users snap photos of their meals using Android CameraX; images are processed by a custom backend AI model, and the Edamam API automatically parses nutritional values (calories, protein, carbs, fats) to populate daily health dashboards.",
      stack: ["Java", "Android SDK", "CameraX API", "Retrofit", "Edamam API", "OkHttp", "Gson", "Material Design"],
      metrics: [
        { label: "Recognition", value: "Real-time AI Vision" },
        { label: "API Integration", value: "Edamam Nutrition" },
        { label: "UI Layer", value: "Material Design 3" }
      ],
      architectureHighlights: [
        "Integrated the CameraX API for seamless in-app camera capture and hardware-accelerated image preprocessing.",
        "Connected mobile client to custom backend AI vision model via Retrofit and OkHttp networking layer for real-time food recognition.",
        "Integrated Edamam API to retrieve precise macronutrient breakdowns (calories, protein, fats, carbohydrates) for recognized food items.",
        "Created an intuitive, human-centered UI with ConstraintLayout and Material Design, complete with BMI and BMR interactive calculators."
      ],
      github: "https://github.com/RajBugalia",
      demo: null
    },
    {
      id: "ticket-booking",
      title: "Ticket Booking Application",
      category: "Mobile & Full Stack",
      featured: true,
      badge: "Full Stack",
      period: "Dec 2026",
      shortDesc:
        "Android ticket-booking app allowing users to search, view, and book tickets for movies, flights, and events, with integrated payment processing.",
      longDesc:
        "A multi-category booking application architected to handle simultaneous reservations across entertainment and travel sectors. Features real-time seat availability updates, search and filter matrices, secure payment gateway simulation, and instant booking receipts.",
      stack: ["Java", "Android Studio", "Firebase", "MySQL", "XML", "REST APIs", "Payment Simulation"],
      metrics: [
        { label: "Services", value: "Movies, Flights, Events" },
        { label: "Database", value: "Firebase + MySQL" },
        { label: "Security", value: "Token Auth & Encrypted Pay" }
      ],
      architectureHighlights: [
        "Engineered end-to-end booking workflows with fast search, filtering, and seat selection matrices.",
        "Integrated dual-database architecture utilizing Firebase for real-time reactive updates and MySQL for transactional record persistence.",
        "Implemented secure payment processing simulation with ticket generation and instant digital receipt creation.",
        "Designed responsive XML layouts with clean Material Design components."
      ],
      github: "https://github.com/RajBugalia",
      demo: null
    },
    {
      id: "ml-spam-classifier",
      title: "Email Spam Classifier & ML Suite",
      category: "AI & Tools",
      featured: false,
      badge: "Machine Learning",
      period: "2025",
      shortDesc:
        "Natural language processing and machine learning pipeline for automated detection and classification of unsolicited and malicious communications.",
      longDesc:
        "A machine learning project leveraging Scikit-learn and Pandas for text tokenization, TF-IDF vectorization, and multi-model classification (Multinomial Naive Bayes, Support Vector Machines) to evaluate spam filtering accuracy.",
      stack: ["Python", "Scikit-Learn", "Pandas", "NLP", "TF-IDF", "Machine Learning"],
      metrics: [
        { label: "Pipeline", value: "TF-IDF + Naive Bayes" },
        { label: "Library", value: "Scikit-learn & Pandas" }
      ],
      architectureHighlights: [
        "Developed end-to-end data cleaning and text preprocessing pipeline (stop-word removal, stemming, vectorization).",
        "Trained and evaluated multiple classification models for precision, recall, and F1-score benchmarks.",
        "Built modular evaluation scripts for ongoing dataset validation."
      ],
      github: "https://github.com/RajBugalia",
      demo: null
    }
  ],

  skillCategories: [
    {
      id: "mobile",
      title: "Mobile (Android)",
      skills: [
        { name: "Kotlin", level: "Advanced", icon: "kotlin" },
        { name: "Java", level: "Expert", icon: "java" },
        { name: "Jetpack Compose", level: "Advanced", icon: "compose" },
        { name: "Android Studio", level: "Expert", icon: "android" },
        { name: "Room Database", level: "Advanced", icon: "database" },
        { name: "ExoPlayer", level: "Intermediate", icon: "player" },
        { name: "CameraX API", level: "Intermediate", icon: "camera" },
        { name: "Retrofit & OkHttp", level: "Advanced", icon: "network" },
        { name: "Hilt DI", level: "Intermediate", icon: "dependency" },
        { name: "XML Layouts", level: "Advanced", icon: "code" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Cloud",
      skills: [
        { name: "Spring Boot", level: "Advanced", icon: "spring" },
        { name: "RESTful APIs", level: "Advanced", icon: "api" },
        { name: "Firebase", level: "Advanced", icon: "firebase" },
        { name: "MySQL", level: "Advanced", icon: "mysql" },
        { name: "Database Design", level: "Advanced", icon: "schema" }
      ]
    },
    {
      id: "languages",
      title: "Languages",
      skills: [
        { name: "Java", level: "Expert", icon: "java" },
        { name: "Kotlin", level: "Advanced", icon: "kotlin" },
        { name: "Python", level: "Proficient", icon: "python" },
        { name: "C", level: "Intermediate", icon: "c" },
        { name: "SQL", level: "Advanced", icon: "sql" }
      ]
    },
    {
      id: "core",
      title: "Core CS & Tools",
      skills: [
        { name: "Data Structures (DSA)", level: "Rank 1 All-India", icon: "tree" },
        { name: "Algorithms", level: "Expert", icon: "cpu" },
        { name: "OOP & Clean Code", level: "Expert", icon: "layers" },
        { name: "Git & GitHub", level: "Advanced", icon: "git" },
        { name: "Postman", level: "Advanced", icon: "tool" },
        { name: "Scikit-Learn & Pandas", level: "Proficient", icon: "brain" }
      ]
    }
  ],

  education: [
    {
      institution: "Parul University",
      degree: "Integrated Master of Computer Applications (IMCA)",
      period: "2023 – 2027",
      location: "Vadodara, Gujarat",
      score: "CGPA: 8.34",
      scoreLabel: "Current CGPA",
      details: [
        "Advanced coursework in Data Structures, Object-Oriented Analysis, Database Systems, Web & Mobile Engineering, and Operating Systems.",
        "Active member of developer and technology clubs, building peer-mentored technical workshops."
      ]
    },
    {
      institution: "Prince Academy of Higher Education",
      degree: "Intermediate Examination (Class XII, CBSE Board)",
      period: "2022 – 2023",
      location: "Sikar, Rajasthan",
      score: "90.04%",
      scoreLabel: "Board Score",
      details: [
        "Focused in Science, Mathematics, and Computer Science fundamentals.",
        "Graduated in the top tier of the graduating cohort with academic distinction."
      ]
    }
  ],

  achievements: [
    {
      title: "NPTEL All-India Rank 1",
      subtitle: "Data Structures and Algorithms using Java",
      organization: "NPTEL / IIT",
      type: "Top 1% Academic Honor",
      desc: "Secured All-India Rank 1 in the competitive DSA examination, demonstrating mastery of algorithmic complexity, tree/graph traversal, and dynamic programming.",
      badge: "National Topper"
    },
    {
      title: "Campus Ambassador",
      subtitle: "Entrepreneurship Cell (E-Cell), IIT Kanpur",
      organization: "IIT Kanpur",
      period: "2025 – 2026",
      type: "Leadership & Community",
      desc: "Represented E-Cell IIT Kanpur at the collegiate level, spearheading entrepreneurship summits, student registrations, and tech-driven campus outreach.",
      badge: "Leadership"
    },
    {
      title: "Software Programming Using Java",
      subtitle: "Professional Certification",
      organization: "SimpliLearn",
      type: "Certification",
      desc: "Comprehensive certification covering advanced Java paradigms, multithreading, collections framework, and enterprise design patterns.",
      badge: "Certified"
    }
  ]
};
