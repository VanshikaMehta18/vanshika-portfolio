import type { Resume } from './types';

export const resume: Resume = {
    name: 'Vanshika Mehal Mehta',
    locationLine: 'New Jersey, USA',
    email: 'work.vanshikamm@gmail.com',
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
            name: 'RAG Powered Coursework Bot',
            description:
                'GPT-powered chatbot with prompt engineering and API integration for contextual Q&A.',
            tech: ['Python', 'FastAPI', 'LangChain', 'LLM']
        },
        {
            name: 'NutriAI',
            description:
                'Recipe app recommending personalized diet plans using user health metrics and preferences.',
            tech: ['Python', 'ML', 'Flask']
        },
        {
            name: 'Payroll SalaryDashboard',
            description:
                'DAX-driven dashboard analyzing AI/ML salaries based on 12 metrics with Power Query.',
            tech: ['PowerBI', 'DAX']
        },
        {
            name: 'AI-powered Ad Recommendation System',
            description:
                'OpenAI’s image-search based recommendation API for product recommendations from real-time user camera feeds.',
            tech: ['Python', 'OpenAI', 'CV']
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


