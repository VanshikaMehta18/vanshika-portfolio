import type { Resume } from './types';

export const resume: Resume = {
    name: 'Vanshika Mehal Mehta',
    locationLine: 'New Jersey, USA',
    email: 'work.vanshikam@gmail.com',
    phone: '+1 551-331-8000',
    links: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/VanshikaMehta18' },
        { label: 'GitHub', url: 'https://github.com/VanshikaMehta18' },
        { label: 'Medium', url: 'https://medium.com/@vanshika.mehta' },
        { label: 'Portfolio', url: '#' }
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
            name: 'Languages & Core',
            items: ['Python', 'SQL', 'R', 'JavaScript', 'TypeScript']
        },
        {
            name: 'Frameworks',
            items: ['React', 'Next.js', 'LLMs/Prompt Engineering', 'LangChain', 'HuggingFace', 'NLP', 'CV']
        },
        {
            name: 'Data & Cloud',
            items: ['GCP', 'BigQuery', 'Vertex AI', 'Pub/Sub', 'Dataflow', 'Docker', 'Supabase']
        },
        {
            name: 'Tools',
            items: ['FastAPI', 'Flask', 'Tableau/Looker', 'Airflow', 'Spark/Dataproc', 'GitHub Actions', 'Git',
                'Vercel', 'Netlify', 'Postman', 'Jupyter', 'VS Code'
            ]
        },
        {
            name: 'AI & Machine Learning',
            items: ['Agentic AI', 'CrewAI', 'LangChain', 'Langflow', 'LangGraph', 'LLMs/Prompt Engineering',
                'Retrieval Augmented Generation', 'NLP', 'Computer Vision', 'PyTorch', 'TensorFlow',
                'HuggingFace', 'OpenAI', 'Gemini', 'Scikit-learn', 'Pandas', 'NumPy', 'SageMaker'
            ]
        }
    ],
    experience: [
        {
            company: 'StorieTV Inc.',
            title: 'AI and Data Science Engineer',
            location: 'Remote',
            start: 'Jun 2025',
            end: 'Present',
            category: 'Professional',
            skills: ['Next.js', 'React', 'Supabase', 'Docker', 'GCP', 'Python', 'Vertex AI', 'RAG'],
            bullets: [
                'Designed and deployed Next.js + React + Supabase + Docker platform on GCP Cloud Hosting.',
                'Built Python server with FFmpeg multi-threading, cutting upload time + server load by 90%.',
                'Hooked up compression + upload services with GCP Cloud Storage + Supabase, bringing video retrieval down to <200ms.',
                'Integrated Google Vertex AI (Veo-3) for video generation using RAG prompting, speeding up content creation by 75%.',
                'Connected APIs for Instagram, YouTube, and Twitter/X so users can share content in one click with verified posting.',
                'Built computer vision + audio pipelines to auto-generate highlight reels, boosting click-through by 15% and helping with retention on shorts.',
                'Designed interactive dashboards in Google Looker Studio to track engagement and spot friction points, making optimization more data-driven.',
                'Trained lightweight ML models on user behavior logs to detect binge-watch patterns and recommend smarter playlists.',    
            ]
        },

        {
            company: 'Stevens Institute of Technology',
            title: 'Lead Research Assistant',
            location: 'New Jersey, USA',
            start: 'Nov 2023',
            end: 'May 2025',
            category: 'Research',
            skills: ['OpenCV', 'YOLO', 'CNN', 'Object Detection', 'Computer Vision'],
            bullets: [
                'Developed object detection pipelines with OpenCV; calibrated cameras and improved accuracy by 32%.',
                'Built smart storage management using YOLO and CNN; integrated into campus systems.',
                'Managed university tech symposium and showcased champion object detection project.',
                'Successfully built an end-to-end ML pipeline for an insurance fraud detection system, ensuring scalable data ingestion and ETL workflows.',
                'Designed and deployed a robust MySQL database management system to handle insurance records, ensuring scalability and future-proof migrations.',
                'Designed ETL processes using Amazon S3 for storage, SageMaker for model development, and Glue for ETL, later migrating to running PySpark jobs on EMR, cutting pipeline costs by 70%.',
                'Integrated third-party data sources for verified insurance datasets, enabling reliable batch processing and improving fraud detection coverage.',
                'Enhanced fraud detection model performance by 20% using Cohere’s LLM, incorporating tokenization, few-shot prompting, LangChain, and AWS services for efficient orchestration.',
                'Trained compact ML models using Mistral-7B from HuggingFace to accurately distinguish insurance notes written by doctors from generic dental notes, improving classification precision by 88%.',
                'Orchestrated workflow automation with AWS tools, ensuring efficient data handling, faster retraining cycles, and reduced manual intervention by 60%.',
                'Built monitoring pipelines to track model drift and fraud detection accuracy, improving audit transparency and trust in predictions.',
                'Built AWS QuickSight dashboards for real-time visualization of fraud detection metrics, ETL performance, and model outcomes, enabling data-driven decision making for compliance and claims teams.',
                'Maintained HIPAA compliance across all ML workflows, securing sensitive medical and insurance data in transit and at rest.',
                'Collaborated with cross-functional teams to align AI development with business goals, ensuring fraud insights directly supported compliance officers and claims teams.'
            ]
        },
        {
            company: 'MedAudit.ai',
            title: 'AI and Data Science Intern',
            location: 'New Jersey, USA',
            start: 'May 2024',
            end: 'Aug 2024',
            category: 'Professional',
            skills: ['AWS', 'Machine Learning', 'ETL', 'Fraud Detection', 'Data Quality'],
            bullets: [
                'Implemented end-to-end ML pipeline on AWS for fraud detection; scaled ETL and training.',
                'Built monitoring pipelines for model drift and data quality; improved transparency and trust.'
            ]
        },
        {
            company: 'Dots & Coms',
            title: 'Full-Stack Developer Intern',
            location: 'Gujarat, India',
            start: 'Feb 2023',
            end: 'Apr 2023',
            category: 'Professional',
            skills: ['Full-Stack', 'Web Development', 'SQL', 'UX Enhancement'],
            bullets: [
                'Developed and maintained robust, scalable websites; improved standards and reduced bug rates by ~15%.',
                'Optimized queries and introduced review systems to enhance UX and resolution time.'
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


