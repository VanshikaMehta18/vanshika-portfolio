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
            gpa: '8.9 / 10'
        }
    ],
    skills: [
        {
            name: 'Gen AI & LLMOps',
            items: [
                'RAG',
                'Agentic workflows',
                'RLHF',
                'Prompt engineering',
                'LangChain',
                'Hugging Face',
                'Vertex AI',
                'Model evaluation & benchmarking',
            ]
        },
        {
            name: 'ML & Computer Vision',
            items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLO', 'CNNs', 'Fine-tuning', 'Inference optimization']
        },
        {
            name: 'Data & Cloud',
            items: [
                'GCP (BigQuery, Cloud Run, Vertex AI)',
                'AWS (S3, EMR, Glue)',
                'Airflow',
                'SQL',
                'Vector DBs (Pinecone, Milvus)',
                'ETL/ELT pipelines',
            ]
        },
        {
            name: 'Programming & Dev Environment',
            items: [
                'Python (expert)',
                'TypeScript',
                'JavaScript',
                'Swift',
                'Bash',
                'RESTful APIs',
                'GraphQL',
                'Docker',
                'Kubernetes',
                'GitHub Actions',
                'Cursor',
                'Claude Code',
                'GitHub Copilot',
            ]
        }
    ],
    experience: [
        {
            company: 'RWS Group',
            title: 'AI Specialist',
            location: 'East Hartford, CT (Remote)',
            start: 'Oct 2025',
            end: 'Present',
            category: 'Professional',
            skills: ['Labelbox', 'CVAT', 'Excel', 'SQL', 'Data Quality', 'NER', 'Dashboards'],
            bullets: [
                'Labeled and categorized text, images, and documents using Labelbox, CVAT, and Excel.',
                'Transcribed audio/video into clean text and applied NER tagging where needed.',
                'Developed SQL queries to detect labeling inconsistencies, improving downstream model performance by 15%.',
                'Built monitoring dashboards to track AI data quality over 6 months, reviewer accuracy, and workflow bottlenecks in real time.',
                'Leveraged tools like Cursor and Codex to streamline analysis, automate queries, and reduce repetitive manual work.',
            ]
        },
        {
            company: 'StorieTV',
            title: 'Founding AI Full Stack Engineer',
            location: 'San Francisco, CA (Remote)',
            start: 'Jun 2025',
            end: 'Present',
            category: 'Professional',
            skills: ['Next.js', 'Python', 'Supabase', 'Swift', 'GCP', 'Pinecone', 'Docker', 'GitHub Actions', 'RAG'],
            bullets: [
                'Developed and launched AI-powered website and iOS + Android apps using Next.js, Python, Supabase, Swift, and GCP.',
                'Architected a high-speed Pinecone vector database system enabling context-aware AI responses, reducing search latency by 60%.',
                'Automated workflows using Vertex AI, RAG, and agentic pipelines, reducing manual work hours by 75%.',
                'Used Claude Code, Cursor, and Antigravity to automate development tasks, reducing engineering effort and improving speed.',
                'Containerized services with Docker and built deployment pipelines via GitHub Actions to maintain 99.9% system uptime.',
                'Integrated Google Analytics to track user behavior and improve feature engagement and app growth.',
                'Recovered from a hacker attack and rebuilt secure backend services using GCP IAM + Secrets Manager; added monitoring via cloud logs and security triggers.',
            ]
        },
        {
            company: 'MedAudit.ai',
            title: 'AI and Data Science Intern',
            location: 'New Jersey, USA',
            start: 'May 2024',
            end: 'Aug 2024',
            category: 'Professional',
            skills: ['React', 'Django', 'AWS', 'Glue', 'S3', 'RDS', 'EMR', 'SageMaker', 'ETL', 'LLMs'],
            bullets: [
                'Led the design and delivery of a fraud detection system for dental insurance claims using React and Django.',
                'Architected end-to-end ETL pipelines on AWS for ~10GB data using Glue, S3 staging, and RDS storage; reduced costs by 92% by migrating to EMR.',
                'Integrated Cohere LLM APIs to extract features from insurance text, increasing model accuracy from 70% to 95% vs prior Llama-2 baselines.',
                'Developed and deployed fraud-detection algorithms on AWS SageMaker, ensuring high-speed processing and model monitoring.',
            ]
        },
        {
            company: 'Stevens Institute of Technology',
            title: 'Senior Software and AI Engineer',
            location: 'Hoboken, NJ',
            start: 'Nov 2023',
            end: 'May 2025',
            category: 'Research',
            skills: ['OpenCV', 'YOLO', 'CNN', 'Computer Vision', 'React', 'REST APIs', 'Statistical testing'],
            bullets: [
                'Increased AI detection accuracy to 92% using computer vision models (YOLO and CNN).',
                'Developed a real-time object tracking system for navigation using OpenCV and vision-based sensors (later showcased at university Expo).',
                'Built and hosted a React.js dashboard + REST API backend to monitor live ML metrics and debug bottlenecks in real time.',
                'Used statistical testing (two-tailed t-test, p-value analysis) to validate model updates and ensure reliability.',
            ]
        },
        {
            company: 'Dots & Coms',
            title: 'Software Engineer',
            location: 'Gujarat, India',
            start: 'May 2022',
            end: 'May 2023',
            category: 'Professional',
            skills: ['Python', 'BigQuery', 'SQL', 'A/B testing', 'Data pipelines'],
            bullets: [
                'Automated data cleaning tasks with Python, cutting manual processing time by 45%.',
                'Optimized BigQuery database performance, reducing cloud storage costs by 25%.',
                'Led A/B testing for automated workflows, resulting in 60% higher system reliability.',
            ]
        },
        {
            company: 'Spark Innovations',
            title: 'Software Engineer Intern',
            location: 'Gujarat, India',
            start: 'Jan 2022',
            end: 'May 2022',
            category: 'Professional',
            skills: ['Python', 'AWS', 'Django', 'Data ingestion', 'Dashboards'],
            bullets: [
                'Developed Python scripts to fetch real-time data from Battery Management Systems (BMS) and migrate it to AWS Cloud.',
                'Built a Django-based website to display hardware performance metrics.',
                'Designed marketing materials and technical assets using Adobe Photoshop and Canva to support product launches.',
            ]
        }
    ],
    projects: [
        {
            name: 'ReflectAI — Safe Space to Declutter Your Thoughts',
            description:
                'AI companion for journaling, reflection, and emotional awareness — safe, empathetic, and thoughtful.',
            tech: ['Python', 'FastAPI', 'React', 'Phi-3', 'NeMo Guardrails', 'Whisper', 'Streamlit'],
            detailedDescription: 'Developed an innovative mental wellness application that provides guided reflection sessions powered by AI. ReflectAI addresses the critical need for safe, judgment-free spaces for mental decluttering while maintaining strict ethical boundaries through advanced guardrails technology.',
            duration: '4 months',
            role: 'Full-Stack Developer & AI Safety Engineer',
            teamSize: 'Solo Project',
            features: [
                'Guided reflection sessions with thoughtful, structured questions',
                'Empathetic voice interaction using Whisper for speech-to-text',
                'Sentiment analysis and emotional trend tracking over time',
                'Strict ethical boundaries with NeMo Guardrails for safety',
                'Daily reflection prompts and mood timeline visualization',
                'Private, secure space for mental decluttering'
            ],
            challenges: [
                'Ensuring AI safety and preventing harmful advice generation',
                'Creating empathetic and natural conversation flows',
                'Implementing robust sentiment analysis for emotional tracking',
                'Balancing AI capabilities with ethical constraints'
            ],
            solutions: [
                'Implemented NeMo Guardrails with custom rules for emotional safety',
                'Used Phi-3 LLM with carefully crafted prompts for empathetic responses',
                'Built comprehensive sentiment analysis pipeline with trend visualization',
                'Applied strict redirection mechanisms for unsafe content'
            ],
            results: [
                'Created a fully compliant emotional AI system with zero safety violations',
                'Achieved 90% user satisfaction with reflection session quality',
                'Successfully processed 500+ reflection sessions with sentiment tracking',
                'Developed ethical AI framework for mental health applications'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/ReflectAI' }
            ]
        },
        {
            name: 'Azure-Databricks-Sales-Analyzer',
            description:
                'Sales analytics pipeline built on Databricks (Azure) using PySpark for large-scale data processing and insights.',
            tech: ['PySpark', 'Databricks', 'Azure', 'SQL', 'Parquet'],
            detailedDescription: 'Built a comprehensive sales analytics pipeline on Azure Databricks using PySpark to process and analyze large-scale sales data. The system handles data cleaning, transformation, and generates actionable business insights including store performance metrics and sales trends.',
            duration: '2 months',
            role: 'Data Engineer & Analytics Developer',
            teamSize: 'Solo Project',
            features: [
                'Large-scale data processing with PySpark on Azure Databricks',
                'Comprehensive data cleaning and standardization',
                'Sales and store data integration with advanced joins',
                'Performance metrics calculation (sales per store, per square foot)',
                'Yearly trend analysis and top-performing store identification',
                'Efficient data storage in Parquet format for fast querying'
            ],
            challenges: [
                'Handling missing values and data inconsistencies at scale',
                'Optimizing PySpark jobs for large datasets',
                'Creating meaningful business metrics from raw transactional data',
                'Ensuring data quality and accuracy across multiple sources'
            ],
            solutions: [
                'Implemented robust data cleaning pipelines with duplicate removal',
                'Used efficient PySpark transformations for data processing',
                'Created comprehensive data validation and quality checks',
                'Optimized storage format with Parquet for better performance'
            ],
            results: [
                'Processed 1M+ sales transactions across multiple stores',
                'Generated actionable insights for 50+ store locations',
                'Reduced data processing time by 60% using optimized PySpark jobs',
                'Created scalable analytics framework for ongoing business intelligence'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/Azure-Databricks-Sales-Analyzer' }
            ]
        },
        {
            name: 'NutrAI-Personalized-Nutrition-Assistant',
            description:
                'Mobile app for personalized nutrition recommendations using health metrics and dietary preferences.',
            tech: ['React Native', 'Firebase', 'OpenAI API', 'JavaScript'],
            detailedDescription: 'Developed a comprehensive mobile nutrition assistant that provides personalized meal plans and dietary recommendations. The app analyzes user health data, preferences, and meal history to suggest optimal nutrition choices while integrating with third-party food delivery services.',
            duration: '4 months',
            role: 'Mobile Developer & ML Engineer',
            teamSize: '4 members',
            features: [
                'Personalized nutrition plans based on health metrics and preferences',
                'Meal tracking with manual entry and image upload capabilities',
                'Integration with third-party food delivery APIs (Uber, Grubhub)',
                'AI-powered food recommendations using OpenAI API',
                'Grocery store locator and nearby restaurant suggestions',
                'Comprehensive profile management and health goal tracking'
            ],
            challenges: [
                'Integrating multiple third-party APIs for food delivery services',
                'Creating accurate nutrition recommendations with limited data',
                'Handling diverse dietary restrictions and preferences',
                'Optimizing mobile app performance with real-time data processing'
            ],
            solutions: [
                'Implemented robust API integration layer for food services',
                'Used OpenAI API for intelligent meal recommendations',
                'Built comprehensive user preference learning system',
                'Applied efficient data caching for improved mobile performance'
            ],
            results: [
                'Achieved 78% user satisfaction with nutrition recommendations',
                'Successfully integrated 3+ food delivery service APIs',
                'Processed 10,000+ meal entries with nutritional analysis',
                'Reduced meal planning time by 60% for users'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/NutrAI-Personalized-Nutrition-Assistant' }
            ]
        },
        {
            name: 'RAG Powered Coursework Bot',
            description:
                'GPT-powered chatbot with prompt engineering and API integration for contextual Q&A.',
            tech: ['Python', 'FastAPI', 'LangChain', 'LLM'],
            detailedDescription: 'Developed an intelligent coursework assistance bot that leverages Retrieval Augmented Generation (RAG) to provide contextual answers to student questions. The system processes course materials, lecture notes, and assignments to deliver accurate, context-aware responses.',
            duration: '3 months',
            role: 'Full-Stack Developer & AI Engineer',
            teamSize: 'Solo Project',
            features: [
                'Contextual Q&A system using RAG architecture',
                'Real-time document processing and indexing',
                'Intelligent prompt engineering for better responses',
                'RESTful API with FastAPI for seamless integration',
                'Vector database for efficient similarity search',
                'Multi-format document support (PDF, DOCX, TXT)'
            ],
            challenges: [
                'Managing large document corpora efficiently',
                'Optimizing response time for real-time queries',
                'Ensuring accuracy of generated responses',
                'Handling diverse question types and contexts'
            ],
            solutions: [
                'Implemented chunking strategies for optimal document processing',
                'Used vector embeddings for semantic similarity matching',
                'Applied prompt engineering techniques for better context understanding',
                'Built robust error handling and fallback mechanisms'
            ],
            results: [
                'Achieved 85% accuracy in contextual question answering',
                'Reduced response time to under 2 seconds',
                'Successfully processed 1000+ course documents',
                'Improved student engagement by 40%'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/RAG_Powered_Coursework_Bot' }
            ]
        },
        {
            name: 'Payroll SalaryDashboard',
            description:
                'DAX-driven dashboard analyzing AI/ML salaries based on 12 metrics with Power Query.',
            tech: ['PowerBI', 'DAX'],
            detailedDescription: 'Developed a comprehensive salary analytics dashboard for the AI/ML industry using Power BI and DAX. The dashboard provides insights into salary trends, geographic variations, and skill-based compensation across different roles and experience levels.',
            duration: '2 months',
            role: 'Data Analyst & Dashboard Developer',
            teamSize: 'Solo Project',
            features: [
                'Interactive salary trend analysis across 12 key metrics',
                'Geographic salary heat maps and comparisons',
                'Skill-based compensation analysis',
                'Experience level vs salary correlation',
                'Industry sector salary comparisons',
                'Real-time data refresh capabilities'
            ],
            challenges: [
                'Handling large datasets with complex relationships',
                'Creating meaningful visualizations for diverse metrics',
                'Ensuring data accuracy and consistency',
                'Optimizing dashboard performance for large datasets'
            ],
            solutions: [
                'Implemented efficient DAX formulas for complex calculations',
                'Used Power Query for data transformation and cleaning',
                'Applied advanced filtering and drill-down capabilities',
                'Optimized data model for better performance'
            ],
            results: [
                'Analyzed 50,000+ salary records across multiple sources',
                'Created 15+ interactive visualizations',
                'Reduced data analysis time by 70%',
                'Provided actionable insights for career planning'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/PowerBI_SalaryDashboard' }
            ]
        },
        {
            name: 'AI-powered Ad Recommendation System',
            description:
                'OpenAI\'s image-search based recommendation API for product recommendations from real-time user camera feeds.',
            tech: ['Python', 'OpenAI', 'CV'],
            detailedDescription: 'Built an innovative advertising recommendation system that uses computer vision and OpenAI\'s image analysis capabilities to provide real-time product recommendations based on user camera feeds. The system identifies objects, scenes, and contexts to suggest relevant advertisements and products.',
            duration: '3 months',
            role: 'AI Engineer & Computer Vision Specialist',
            teamSize: '3 members',
            features: [
                'Real-time image analysis using computer vision',
                'OpenAI GPT-4 Vision integration for context understanding',
                'Dynamic ad recommendation engine',
                'Multi-object detection and classification',
                'Context-aware product matching',
                'Real-time API response system'
            ],
            challenges: [
                'Achieving real-time processing with high accuracy',
                'Handling diverse lighting and image quality conditions',
                'Ensuring privacy and data security',
                'Optimizing API costs while maintaining performance'
            ],
            solutions: [
                'Implemented efficient image preprocessing pipelines',
                'Used lightweight models for initial object detection',
                'Applied context-aware filtering for better recommendations',
                'Built caching mechanisms to reduce API calls'
            ],
            results: [
                'Achieved 92% accuracy in object recognition',
                'Reduced recommendation latency to under 1 second',
                'Increased ad engagement rates by 35%',
                'Processed 1000+ images per hour'
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/Ad-recommendation-system-using-GenAI' }
            ]
        },
        {
            name: 'check_the_tag',
            description: 'Mobile app that identifies products from any input stream and compares grocery prices across nearby stores and the web.',
            tech: ['JavaScript', 'Computer Vision', 'Product Matching', 'APIs'],
            detailedDescription:
                'A product-identification and price-comparison experience designed for fast, practical shopping decisions. The system focuses on recognizing items quickly and surfacing comparable prices across sources.',
            duration: 'In progress',
            role: 'Builder (AI + product engineering)',
            teamSize: 'Team project',
            features: [
                'Product identification from input streams',
                'Price comparisons across stores and online sources',
                'Fast matching for common grocery items',
            ],
            results: [
                'Shipped a working end-to-end prototype focused on speed and utility.',
            ],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/check_the_tag' }],
        },
        {
            name: 'Gen-AI-Intensive-Project (Google Sponsored)',
            description: 'Google-sponsored GenAI intensive project exploring modern LLM workflows and applied experimentation.',
            tech: ['Python', 'Jupyter', 'LLMs', 'Prompting', 'RAG'],
            detailedDescription:
                'An applied GenAI project focused on hands-on experimentation with LLM prompting, evaluation, and end-to-end workflows. The repository captures iterative exploration, learnings, and reproducible artifacts.',
            duration: 'Project-based',
            role: 'GenAI Engineer',
            teamSize: 'Solo project',
            features: [
                'Experimentation notebooks and reproducible runs',
                'Applied prompting and evaluation loops',
                'End-to-end workflow exploration (from data to outputs)',
            ],
            links: [{ label: 'GitHub Repository', url: 'https://github.com/VanshikaMehta18/Gen-AI-Intensive-Project-Google-Sponsored' }],
        }
    ],
    recommendations: [
        {
            name: 'Mandeep Josan',
            title: 'Chief Information Officer at Copharix',
            relationship: 'Mandeep managed Vanshika directly',
            text: "I've known Vanshika for the last 7 months. She worked at Academy Dental as an AI/ML summer intern and her performance was outstanding. She outperformed her work on fine-tuning LLM's, leveraging ETL on AWS cloud services despite being unfamiliar to her. She consistently exceeded expectations, delivering high-quality work within tight deadlines. Vanshika's innovative approach infused our company with a fresh, creative approach that caught everyone's attention and left a memorable mark."
        },
        {
            name: 'Louis Oh',
            title: 'SES Lab manager and researcher at Stevens Institute of Technology. Business owner of Lumos Integration.',
            relationship: 'Louis managed Vanshika directly',
            text: "Vanshika’s work under me has been commendable. From the time she joined us, she managed to adapt, learn and implement the work given very quickly. Her dedication towards her work and disciplined nature makes her a valuable asset to our team. I am confident that Vanshika will excel in any endeavor she chooses to pursue, and I highly recommend her for any future opportunities."
        }
    ]
};


