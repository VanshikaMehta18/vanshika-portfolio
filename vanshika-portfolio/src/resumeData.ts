import type { Resume } from './types';

export const resume: Resume = {
    name: 'Vanshika Mehal Mehta',
    locationLine: 'New Jersey, USA',
    email: 'work.vanshikamm@gmail.com',
    links: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/VanshikaMehta18' },
        { label: 'Medium', url: 'https://medium.com/@work.vanshikamm' },
        { label: 'Portfolio', url: '#' }
    ],
    education: [
        {
            school: 'Stevens Institute of Technology',
            degree: 'MS Computer Science (Machine Learning/AI)',
            location: 'New Jersey, USA',
            start: 'Sep 2023',
            end: 'May 2025',
            gpa: '3.8 / 4'
        },
        {
            school: 'Gujarat Technological University',
            degree: 'BE Computer Engineering',
            location: 'Gujarat, India',
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
            items: ['FastAPI', 'Flask', 'Tableau/Looker', 'Airflow', 'Spark/Dataproc', 'GitHub Actions']
        }
    ],
    experience: [
        {
            company: 'StorieTV Inc.',
            title: 'AI and Data Science Engineer',
            location: 'Remote',
            start: 'Jun 2025',
            end: 'Present',
            bullets: [
                'Designed and deployed Next.js + React + Supabase + Docker platform on GCP Cloud Hosting.',
                'Built Python server with FFmpeg multi-threading, cutting upload time + server load by 90%.',
                'Integrated Vertex AI (Veo-3) for video generation with RAG prompting, reducing content creation time by 75%.',
                'Built computer vision pipelines and dashboards in Looker/BigQuery to detect breaking patterns and recommend actions.'
            ]
        },
        {
            company: 'Stevens Institute of Technology',
            title: 'Lead Research Assistant',
            location: 'New Jersey, USA',
            start: 'Nov 2023',
            end: 'May 2025',
            bullets: [
                'Developed object detection pipelines with OpenCV; calibrated cameras and improved accuracy by 32%.',
                'Built smart storage management using YOLO and CNN; integrated into campus systems.',
                'Managed university tech symposium and showcased champion object detection project.'
            ]
        },
        {
            company: 'Meddaut.ai',
            title: 'AI and Data Science Intern',
            location: 'New Jersey, USA',
            start: 'May 2024',
            end: 'Aug 2024',
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
    ]
};


