export const PORTFOLIO_DATA = {
    personal: {
        name: "Yogendra Bisht",
        role: "Full-Stack Engineer",
        age: "20",
        location: "India",
        tagline: "A pre-final year undergraduate engineering student at Graphic Era Hill University, Dehradun.",
        availability: "Available for new opportunities",
        email: "workforrhody7@gmail.com",
        secondaryEmail: "YOGENDRASINGHBISHT.230112820@gehu.ac.in",
        photo: "/profile.jpg",
        resume: "/yogiresume.pdf",
        about:
            "a pre-final year Computer Science undergraduate passionate about technology and constantly curious about how things work beneath the surface. I'm self-motivated with a can-do attitude, thriving in challenging and dynamic environments. I'm actively seeking opportunities where I can enhance my technical and problem-solving skills while contributing meaningfully to a forward-thinking organization.",
        stats: [
            { label: "Aggregate CGPA", value: "7+" },
            { label: "Projects Completed", value: "5+" },
        ],
    },

    socials: [
        { platform: "GitHub", url: "https://github.com/bhanuxbisht", username: "bhanuxbisht" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/yogendra-bisht/", username: "yogendra-bisht" },
        { platform: "LeetCode", url: "https://leetcode.com/u/bhanuxbisht/", username: "bhanuxbisht" },
    ],

    education: [
        {
            id: "1",
            institution: "Graphic Era Hill University",
            degree: "B.Tech in Computer Science",
            period: "2023 - 2027",
            status: "Pursuing",
            score: "7 CGPA",
        },
        {
            id: "2",
            institution: "St. Edmund's School",
            degree: "Senior Secondary (XII)",
            period: "2023",
            status: "Completed",
            score: "72%",
        },
        {
            id: "3",
            institution: "St. Edmund's School",
            degree: "Secondary (X)",
            period: "2021",
            status: "Completed",
            score: "74%",
        },
    ],

    skills: {
        Frontend: ["React/Next.js", "Tailwind CSS"],
        Backend: ["Node.js", "FastAPI", "REST API", "PostgreSQL", "SQL", "Flask", "API Integration"],
        Languages: ["TypeScript", "JavaScript", "Python", "C++", "C", "Java"],
        DevOps: ["Docker", "Git", "GitHub", "CI/CD", "AWS", "Vercel", "AI-Assisted Development"],
        "AI/ML": [
            "AI & LLM",
            "AI Agents",
            "ML",
            "NLP",
            "OCR",
            "Computer Vision",
            "Generative AI",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Prompt Engineering",
        ],
        "CS Fundamentals": ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
    },

    projects: [
        {
            id: "1",
            title: "AI Assignment Checker",
            description:
                "An intelligent grading system that automates assignment evaluation using a multi-model AI approach. Features a robust OCR pipeline for handwritten submissions and uses Gemini 2.0 Flash with Llama 3.3 fallback for fair, unbiased scoring.",
            techStack: ["Python", "Flask", "Gemini 2.0", "Groq API", "Pytest", "OpenCV", "Tesseract OCR", "PostgreSQL", "Docker"],
            githubUrl: "https://github.com/bhanuxbisht/ai-assignment-checker",
            liveUrl: "https://aichecker-hcr7.onrender.com/",
            thumbnail: "/p1.png",
            category: "AI/ML",
            date: "2025",
        },
        {
            id: "2",
            title: "C++ Roulette Game",
            description:
                "A hybrid console-GUI application combining a robust CLI for betting logic with Windows API-based graphical interface for realistic wheel spin animations and Inter-Process Communication via file I/O.",
            techStack: ["C++", "Windows API (GDI)", "IPC", "Game Physics", "MinGW"],
            githubUrl: "https://github.com/bhanuxbisht/roulette-game",
            category: "Systems",
            date: "2024",
        },
        {
            id: "3",
            title: "Saarthi — AI Workplace Assistant",
            description:
                "An AI-powered accessibility super-app built in 24 hours at a national hackathon. Features Llama 3.1 powered smart AI Agent for workflow automation through voice commands and intelligent job matching via TensorFlow.js.",
            techStack: ["React", "Groq API", "Llama 3.1", "TensorFlow.js", "Web Speech API", "Framer Motion"],
            githubUrl: "https://github.com/bhanuxbisht/saarthi",
            category: "Web",
            date: "2025",
        },
        {
            id: "4",
            title: "Facial Recognition System",
            description:
                "A modern facial recognition pipeline built with DeepFace and OpenCV. Supports face detection, alignment, verification, and attribute analysis with multiple state-of-the-art models like VGG-Face, FaceNet, and ArcFace.",
            techStack: ["Python", "OpenCV", "DeepFace", "TensorFlow", "Keras", "Pandas"],
            githubUrl: "https://github.com/bhanuxbisht/Facial-Recognisation",
            category: "AI/ML",
            date: "2024",
        },
    ],

    experience: [
        {
            id: "1",
            role: "Finalist",
            company: "Sarthi 2025 — National Hackathon",
            location: "Graphic Era Hill University",
            period: "2025",
            description: [
                "Finalist in a 24-hour national level hackathon held at Graphic Era Hill University.",
                "Competed against top teams to build innovative solutions within a limited timeframe.",
            ],
        },
    ],
};
