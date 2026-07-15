export const resumeData = {
  name: "Jatin Mallarapu",
  title: "Full Stack Java Developer & AI Engineer",
  location: "Lubbock, TX",
  phone: "(806)-544-0585",
  email: "mallarapujatin@gmail.com",
  linkedin: "https://www.linkedin.com/in/jatin-mallarapu-2ab3b9231/",
  github: "https://github.com/jatinmallarapu",
  leetcode: "https://leetcode.com/u/Jatin__2003/",
  summary: "Results-driven Full Stack Java Developer and AI Engineer skilled in building scalable web applications and microservices using Java, Spring Boot, React.js, Python, and FastAPI. Experienced in REST APIs, SQL databases, OOP, and deploying secure, maintainable solutions on AWS and Azure.",
  skills: {
    "Programming Languages": ["Java", "JavaScript", "TypeScript", "Python", "SQL", "R"],
    "Frameworks & Web": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "React.js", "Angular", "HTML5", "CSS", "Thymeleaf", "Streamlit"],
    "APIs & Architecture": ["RESTful APIs", "GraphQL", "J2EE", "JSP", "JDBC", "Microservices", "WebSockets"],
    "Messaging & Streaming": ["Apache Kafka", "ActiveMQ", "RabbitMQ"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Amazon RDS", "SQL Server", "ChromaDB"],
    "AI Technologies": ["Spring AI", "LangChain", "LLMs", "RAG Pipelines", "NLP", "Neural Networks", "Prompt Engineering", "HuggingFace", "GloVe Embeddings", "CNN-BiLSTM"],
    "Tools & DevOps": ["AWS", "Azure", "Docker", "Git/GitHub", "Jenkins", "Maven", "Redis", "Swagger", "Postman", "JUnit", "Mockito", "Testcontainers", "Jest", "Cypress", "Linux"]
  },
  experience: [
    {
      role: "Graduate Assistant",
      company: "TTU Health Sciences Center",
      location: "Lubbock, Texas, USA",
      period: "Aug 2024 -- Present",
      achievements: [
        "Improved the university student portal for 15,000+ users by building a responsive React.js frontend, reducing server calls by 40% via pagination and debouncing, and engineered 10+ Spring Boot and PostgreSQL backend features following the full SDLC.",
        "Designed and implemented 20+ secure RESTful APIs for authentication using Spring Security and JWT, applying core OOP principles and Java data structures to reduce code complexity by 25% and ensure clean, maintainable architecture.",
        "Containerized the application using Docker and automated 50+ Jenkins CI/CD pipelines for zero-downtime AWS deployments, monitored health via CloudWatch, and managed 100GB+ of structured data using JDBC and Amazon RDS PostgreSQL for reliable storage."
      ]
    },
    {
      role: "AI Intern",
      company: "AIR CENTER VIT AP",
      location: "Amaravati, Andhra Pradesh, India",
      period: "Jun 2022 -- July 2024",
      achievements: [
        "Developed a CNN-BiLSTM model with an Attention mechanism for toxic language detection, implementing a full NLP pipeline in Python with text preprocessing, tokenization, and GloVe embeddings.",
        "Engineered and optimized model architecture to achieve 99.41% accuracy, performing hyperparameter tuning and embedding refinements to enhance detection of nuanced toxic language in diverse datasets.",
        "Validated model performance against 5,000+ real-time user comments using JUnit test cases, identifying patterns, correcting errors, and iteratively reducing false positives by 15% for production readiness.",
        "Delivered a fully production-ready model integrated into the VIT-AP chatbot, enabling accurate real-time moderation and improving user experience through advanced toxic language detection capabilities."
      ]
    }
  ],
  projects: [
    {
      title: "SecureBot - Network Security Tutor & Quiz Bot",
      tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Google Gemini", "HuggingFace", "RAG Pipelines"],
      achievements: [
        "Developed an AI-powered tutoring system using Retrieval-Augmented Generation (RAG) architecture to provide accurate, citation-backed responses for Network Security education.",
        "Built a Tutor Agent for interactive Q&A and a Quiz Agent for generating multi-format practice quizzes using local PDF knowledge bases and Google Gemini.",
        "Integrated ChromaDB for vector-based document retrieval, DuckDuckGo for web search fallback, and Streamlit for an interactive user interface."
      ]
    },
    {
      title: "Identifying and Flagging Toxic Language Using Attention Mechanism",
      tech: ["Python", "NLP", "Neural Networks", "CNN-BiLSTM", "GloVe Embeddings"],
      achievements: [
        "Built a robust classification model to identify and flag toxic language in real-world scenarios using a CNN-BiLSTM model with an attention mechanism.",
        "Handled imbalanced text datasets and utilized pre-trained GloVe embeddings to normalize and tokenize comments for multi-class classification.",
        "Achieved an impressive 99.41% accuracy, providing a proactive approach for automated content moderation in online environments."
      ]
    },
    {
      title: "Scalable Multi-Vendor Microservices Delivery Platform",
      tech: ["Spring Boot", "Spring Cloud", "React.js", "TypeScript", "Kafka", "Docker", "AWS"],
      achievements: [
        "Architected and developed a scalable multi-vendor delivery platform using Spring Boot and Spring Cloud microservices architecture to independently manage restaurant, order, and delivery services, ensuring modularity and high scalability.",
        "Designed and implemented a responsive frontend using React.js and TypeScript, integrating WebSockets to enable real-time order tracking and seamless user experience across dynamic updates.",
        "Secured the platform using Spring Security with JWT authentication, role-based access control, and refresh tokens, ensuring robust authentication and authorization mechanisms across services.",
        "Enhanced system reliability and deployment by integrating Kafka for real-time notifications, implementing automated backend testing with JUnit and Mockito, containerizing services using Docker, and deploying via CI/CD pipelines on AWS and Azure."
      ]
    },
    {
      title: "AI-Powered Smart Healthcare Management System",
      tech: ["Spring Boot", "Spring AI", "FastAPI", "MySQL", "Azure", "Docker"],
      achievements: [
        "Built a healthcare platform using Spring Boot microservices integrated with Eureka and an API Gateway to streamline request routing and improve overall system efficiency.",
        "Incorporated a Spring AI RAG-based chatbot to deliver medical insights, along with a FastAPI microservice leveraging fine-tuned deep learning models for cancer detection.",
        "Handled structured patient data using MySQL and JDBC while maintaining clean version control practices through Git-based workflows.",
        "Deployed the platform on Azure by provisioning and configuring cloud resources to ensure high availability, stable system performance, efficient load handling, and reliable inter-service communication across distributed microservices."
      ]
    },
    {
      title: "Full-Stack Community Management System",
      tech: ["Spring Boot", "Spring Security", "JSP", "Thymeleaf", "WebSockets", "Docker"],
      achievements: [
        "Designed a unified resident platform using Spring Boot and Spring Security to centralize management of residents, events, and payment workflows in a streamlined system.",
        "Created interactive dashboards using JSP, Thymeleaf, and CSS, integrating WebSockets for real-time chat functionality while enforcing secure access across application routes.",
        "Implemented role-based access control and CSRF protection to ensure secure user interactions and maintain data integrity throughout the platform.",
        "Containerized the application using Docker for consistent deployment environments and coordinated version control and team workflows through Git."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      university: "Texas Tech University, Lubbock, Texas",
      period: "Aug 2024 - May 2026",
      gpa: "3.8/4.0"
    },
    {
      degree: "B.Tech in Computer Science and Engineering with Specialization in AI",
      university: "Vellore Institute of Technology, Amaravati, Andhra Pradesh",
      period: "Sept 2020 - Jun 2024",
      gpa: "8.75/10.0"
    }
  ],
  certifications: [
    {
      name: "Master Microservices with Spring Boot and Spring Cloud (udemy)",
      description: "Mastered designing and orchestrating scalable microservices using Spring Boot, Spring Cloud, Docker, and Kubernetes, implementing API Gateways, dynamic service discovery, Fault Tolerance, and distributed tracing."
    },
    {
      name: "Devops Tools and AWS for Java Microservice Developers (udemy)",
      description: "Gained expertise in deploying Java microservices using Docker, Kubernetes, Jenkins, and Git, alongside mastering AWS services including EC2, Elastic Beanstalk, Auto Scaling, and Elastic Load Balancer."
    }
  ],
  awards: [
    {
      name: "UWC Paul Whitfield Horn Graduate Fellowship",
      description: "Awarded in recognition of academic excellence and potential for professional growth, providing financial support and tuition waiver for the 2025-2026 academic year to encourage full-time graduate study and engagement in scholarly and professional development activities at Texas Tech University."
    },
    {
      name: "Department of Computer Science Scholarship",
      description: "Awarded by the Department of Computer Science at Texas Tech University in recognition of academic achievements, providing $1,000 in financial support, split evenly over the fall and spring semesters of the 2025-2026 academic year to encourage continued full-time graduate study and engagement in scholarly activities at Texas Tech University."
    },
    {
      name: "Engineering Clinics Certificate of Merit",
      description: "Awarded the \"Best Project Award\" for securing a position in the top 10 among 500 participating teams at VIT-AP University. Recognized for the successful demonstration of the project \"Driver Drowsiness Detection\" during the Winter 2022--23 semester, showcasing technical excellence in engineering innovation and collaborative project development."
    }
  ],
  publications: [
    {
      title: "Detecting Plastic Covers with Computer Vision and Raspberry Pi for the Protection of Cows",
      description: "Accepted for oral presentation at the 2nd International Conference on Algorithms and Computational Theory for Engineering Applications (ICACTEA 2025), organized by Aditya University. The study focuses on developing real-time embedded systems to enhance environmental safety and livestock protection."
    }
  ]
};
