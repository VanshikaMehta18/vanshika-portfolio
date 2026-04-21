import type { Resume } from './types';

export const resume: Resume = {
    name: 'Vanshika Mehal Mehta',
    locationLine: 'Jersey City, NJ',
    email: 'work.vanshikam@gmail.com',
    phone: '+1 551-331-8000',
    links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vanshika-mehal-mehta/' },
        { label: 'GitHub', url: 'https://github.com/VanshikaMehta18' },
        { label: 'Blogs', url: 'https://medium.com/@vanshika.mehta' },
        { label: 'Portfolio', url: 'https://VanshikaMehta18.github.io/vanshika-portfolio' }
    ],
    education: [
        {
            school: 'Stevens Institute of Technology',
            degree: 'MS Computer Science (Machine Learning/AI)',
            location: 'New Jersey, USA',
            achievements: 'Provost Master\'s Scholarship',
            start: 'Sep 2023',
            end: 'May 2025',
            gpa: '3.8 / 4'
        },
        {
            school: 'Gujarat Technological University',
            degree: 'BE Computer Engineering',
            location: 'Gujarat, India',
            achievements: '100% Merit Scholarship',
            start: 'Jul 2019',
            end: 'May 2023',
            gpa: '3.8 / 4'
        }
    ],
    skills: [
        {
            name: 'Gen AI & LLMOps',
            items: ['RAG', 'Agentic workflows (MCP-style)', 'RLHF', 'Prompt engineering', 'LangChain', 'Hugging Face', 'Vertex AI', 'Model evaluation']
        },
        {
            name: 'ML & Computer Vision',
            items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLO', 'CNNs', 'Fine-tuning', 'Inference optimization']
        },
        {
            name: 'Data & Cloud',
            items: ['GCP (Cloud Run, BigQuery, Vertex AI)', 'AWS (S3, EMR, Glue)', 'SQL', 'Vector DBs (Pinecone, Milvus)', 'Airflow', 'ETL/ELT']
        },
        {
            name: 'Modern Dev Tools',
            items: ['Cursor', 'Claude Code', 'GitHub Copilot', 'Python (Expert)', 'TypeScript', 'Swift', 'Docker', 'CI/CD']
        }
    ],
    experience: [
        {
            company: 'StorieTV',
            title: 'Founding AI Full Stack Engineer',
            location: 'San Francisco, CA (Remote)',
            start: 'Jun 2025',
            end: 'Present',
            category: 'Professional',
            skills: ['Next.js', 'Python', 'GCP', 'Swift', 'Pinecone', 'Vertex AI', 'Docker', 'MCP'],
            bullets: [
                'As a founding engineer, I built our AI web and mobile apps from scratch, scaling to 1k+ monthly users on iOS and 1k+ on web.',
                'I lead our end-to-end deployment on GCP and built a Pinecone-based retrieval system that cut search lag by 60%.',
                'I automated 75% of our content workflows by architecting agentic RAG pipelines using Vertex AI, Claude Code, and Cursor.'
            ]
        },
        {
            company: 'RWS Group',
            title: 'AI Specialist',
            location: 'East Hartford, CT (Remote)',
            start: 'Oct 2025',
            end: 'Present',
            category: 'Professional',
            skills: ['SQL', 'Cursor', 'RLHF', 'LLM Evaluation', 'Python', 'Dashboards'],
            bullets: [
                'I improve LLM reliability by auditing RLHF feedback loops and fixing hallucination patterns, boosting model performance by 15%.',
                'I used SQL and Cursor to build anomaly detection queries that catch data labeling errors, improving downstream model precision by 15%.',
                'I developed real-time monitoring dashboards that track reviewer accuracy and workflow bottlenecks over 6+ months to keep QA efficient.'
            ]
        },
        {
            company: 'MedAudit.ai',
            title: 'AI and Data Science Engineer',
            location: 'New Jersey, USA',
            start: 'May 2024',
            end: 'Aug 2024',
            category: 'Professional',
            skills: ['AWS EMR', 'Cohere LLM', 'SageMaker', 'React', 'Django', 'ETL'],
            bullets: [
                'I was the first of two engineers hired to build an end-to-end fraud detection system for insurance claims using React and Django.',
                'I migrated our big data pipelines to AWS EMR, which reduced our cloud infrastructure costs by a massive 92%.',
                'I integrated Cohere LLM APIs to extract insights from claims, jumping our extraction accuracy from 70% to 95%.'
            ]
        },
        {
            company: 'Stevens Institute of Technology',
            title: 'Lead AI Software Engineer',
            location: 'Hoboken, NJ',
            start: 'Nov 2023',
            end: 'May 2025',
            category: 'Research',
            skills: ['YOLO', 'OpenCV', 'CNN', 'React', 'Statistical Testing'],
            bullets: [
                'I led the development of a smart storage AI using YOLO and CNNs that achieved 92% accuracy, and showcased it at the university symposium.',
                'I designed a real-time tracking system using OpenCV and ArUco markers for vision-based navigation in the Stevens Integration Lab.',
                'I validated every model improvement using statistical t-tests and built a React dashboard to monitor ML metrics in real time.'
            ]
        },
        {
            company: 'Dots & Coms',
            title: 'Data Scientist',
            location: 'Gujarat, India',
            start: 'Jan 2022',
            end: 'May 2023',
            category: 'Professional',
            skills: ['Python', 'BigQuery', 'SQL', 'Tableau', 'A/B Testing'],
            bullets: [
                'I automated our manual data workflows with Python, saving the team 45% of their processing time each week.',
                'I optimized our BigQuery setup through clustering and partitioning, which cut our cloud storage costs by 25%.',
                'I built Tableau dashboards to track engagement and ran A/B tests to prove our automated pipelines were 60% more reliable.'
            ]
        },
        {
            company: 'Spark Innovations',
            title: 'Software Engineer Intern',
            location: 'Gujarat, India',
            start: 'Jan 2022',
            end: 'May 2022',
            category: 'Professional',
            skills: ['Python', 'AWS', 'Django', 'BMS Data'],
            bullets: [
                'I wrote Python scripts to fetch real-time data from Battery Management Systems and migrate it directly to the AWS Cloud.',
                'I built a Django dashboard from scratch to help the hardware team monitor performance metrics in real-time.'
            ]
        }
    ],
    projects: [
        {
            name: 'ReflectAI — Empathetic AI Journaling',
            description: 'A safe AI companion for mental health and reflection using guardrails for emotional safety.',
            tech: ['Python', 'Phi-3', 'NeMo Guardrails', 'Whisper', 'FastAPI'],
            detailedDescription: 'I built an empathetic journaling app that provides judgment-free reflection. It uses Phi-3 for conversation and NeMo Guardrails to ensure the AI stays within ethical boundaries.',
            results: [
                'Created a zero-violation safety framework for emotional AI using NeMo Guardrails.',
                'Used Whisper to enable natural voice-to-text reflection sessions.'
            ],
            links: [{ label: 'GitHub', url: 'https://github.com/VanshikaMehta18/ReflectAI' }]
        },
        {
            name: 'Azure-Databricks Sales Analyzer',
            description: 'A massive-scale sales data pipeline built with PySpark on Azure.',
            tech: ['PySpark', 'Databricks', 'Azure', 'SQL', 'Parquet'],
            detailedDescription: 'I built a pipeline to process over 1 million transactions. It cleans, transforms, and generates store performance metrics in a scalable cloud environment.',
            results: [
                'Reduced data processing time by 60% using optimized PySpark transformations.',
                'Used Parquet format to ensure fast, cost-efficient querying of large datasets.'
            ],
            links: [{ label: 'GitHub', url: 'https://github.com/VanshikaMehta18/Azure-Databricks-Sales-Analyzer' }]
        },
        {
            name: 'Ad Recommendation System',
            description: 'AI that suggests products in real-time based on what it sees through your camera.',
            tech: ['Python', 'GPT-4 Vision', 'OpenCV', 'OpenAI API'],
            detailedDescription: 'I built an API that identifies objects in a user’s live camera feed and uses GPT-4 Vision to suggest relevant products and advertisements.',
            results: [
                'Achieved 92% object recognition accuracy and sub-1-second latency.',
                'Increased simulated ad engagement by 35% through context-aware matching.'
            ],
            links: [{ label: 'GitHub', url: 'https://github.com/VanshikaMehta18/Ad-recommendation-system-using-GenAI' }]
        }
    ],
    recommendations: [
        {
            name: 'Mandeep Josan',
            title: 'Chief Information Officer at Copharix',
            relationship: 'Mandeep managed Vanshika directly',
            text: "I've known Vanshika for the last 7 months. She worked at Academy Dental as an AI/ML summer intern and her performance was outstanding. She outperformed her work on fine-tuning LLM's, leveraging ETL on AWS cloud services despite being unfamiliar to her. She consistently exceeded expectations, delivering high-quality work within tight deadlines."
        }
    ]
};