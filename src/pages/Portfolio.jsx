import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectDetail from '../components/ProjectDetail'

const portfolioItems = [
  {
    id: 1,
    title: 'AI Resume & Job Match Scoring System',
    subtitle: 'NLP & Semantic Analysis',
    status: 'Published',
    description:
      'An intelligent system that analyzes CVs and job descriptions to provide match scores, missing skills identification, and personalized improvement recommendations.',
    tags: ['NLP', 'Embeddings', 'FastAPI', 'React'],
    category: 'Natural Language Processing',
    overview:
      'The AI Resume & Job Match Scoring System is a comprehensive solution that addresses a critical challenge in modern hiring: efficiently matching candidates with job opportunities. By leveraging advanced natural language processing and semantic similarity techniques, the system provides actionable insights to both job seekers and recruiters.',
    whyImpressive:
      'This project directly solves a real-world hiring problem that affects millions of job seekers and employers daily. It demonstrates practical application of NLP, embeddings, and hybrid reasoning systems that combine rule-based logic with machine learning to deliver accurate, interpretable results.',
    coreConcepts: [
      'Text Embeddings',
      'Semantic Similarity',
      'NLP Preprocessing',
      'Cosine Similarity',
      'Hybrid ML Logic'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'Sentence Transformers',
      'React',
      'TypeScript'
    ],
    features: [
      'Automated CV and job description analysis',
      'Match percentage calculation using semantic similarity',
      'Missing skills identification and gap analysis',
      'Personalized improvement recommendations',
      'RESTful API for easy integration',
      'Interactive web interface for real-time analysis'
    ],
    problemStatement:
      'Job seekers struggle to understand why their applications are rejected, while recruiters spend excessive time manually screening resumes. There\'s a critical need for an automated system that can objectively assess candidate-job fit and provide actionable feedback.',
    approach:
      'The system uses transformer-based embeddings to convert CVs and job descriptions into high-dimensional vectors. By calculating cosine similarity between these vectors, we determine semantic match scores. Additional rule-based logic analyzes specific skills, experience levels, and qualifications to provide comprehensive matching and gap analysis.',
    deliverables: [
      'Web application with intuitive user interface',
      'REST API with comprehensive documentation',
      'GitHub repository with detailed README explaining scoring logic',
      'Model evaluation metrics and performance benchmarks',
      'Deployment guide for production environments'
    ],
    limitations:
      'Current limitations include handling non-standard CV formats and understanding context-specific industry requirements. Future improvements will incorporate domain-specific embeddings, multi-language support, and integration with popular job boards and ATS systems.',
    images: [
      "/ai-resume/ai-resume1.jpg",
      "/ai-resume/ai-resume2.jpg",
      "/ai-resume/ai-resume3.jpg",
      "/ai-resume/ai-resume4.jpg",
      "/ai-resume/ai-resume5.jpg",
      "/ai-resume/ai-resume6.jpg",
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Intelligent AI Study Planner',
    subtitle: 'Adaptive Learning Agent',
    status: 'Published',
    description:
      'An AI-powered adaptive learning system that creates personalized study plans and dynamically adjusts them based on user progress and feedback.',
    tags: ['AI Agent', 'Vector DB', 'LLM', 'Next.js'],
    category: 'Adaptive Learning Systems',
    overview:
      'The Intelligent AI Study Planner represents a breakthrough in personalized education technology. It combines advanced AI reasoning with long-term memory systems to create and adapt study plans that evolve with the learner\'s progress, preferences, and goals.',
    whyImpressive:
      'This project showcases true agent-like behavior with memory and personalization capabilities. Unlike static study guides, this system demonstrates how AI can maintain context over time, make intelligent decisions, and adapt strategies based on user feedback—key capabilities for next-generation educational tools.',
    coreConcepts: [
      'Prompt Engineering',
      'Long-term Memory',
      'Vector Databases',
      'Decision Trees',
      'LLM Reasoning',
      'User Profiling'
    ],
    techStack: [
      'Python',
      'Pinecone / FAISS',
      'FastAPI',
      'OpenAI API',
      'React / Next.js',
      'PostgreSQL'
    ],
    features: [
      'Personalized study plan generation based on goals and constraints',
      'Adaptive plan updates based on weekly progress feedback',
      'Long-term memory of user preferences and learning patterns',
      'Dynamic difficulty adjustment',
      'Progress visualization and analytics',
      'Multi-goal support with priority management'
    ],
    problemStatement:
      'Traditional study planning tools are static and don\'t adapt to individual learning styles, pace, or changing circumstances. Learners need intelligent systems that can understand their unique needs and continuously optimize their learning journey.',
    approach:
      'The system uses a combination of vector databases for storing user profiles and learning history, LLM reasoning for generating personalized plans, and decision trees for adaptive logic. User feedback is processed weekly to update the vector embeddings and refine future recommendations.',
    deliverables: [
      'Interactive user onboarding flow',
      'Dynamic plan generation and update system',
      'Before vs After progress visualization dashboard',
      'API for plan management and progress tracking',
      'Comprehensive documentation and user guides'
    ],
    limitations:
      'Current system focuses on structured learning goals. Future enhancements will include support for unstructured learning, integration with learning management systems, collaborative study groups, and advanced analytics for learning pattern recognition.',
    images: [
      "/ai-study/ai-study1.jpg",
      "/ai-study/ai-study1.jpg",
      "/ai-study/ai-study2.jpg",
      "/ai-study/ai-study3.jpg",
      "/ai-study/ai-study4.jpg",
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'AI Customer Support Chatbot with RAG',
    subtitle: 'Retrieval Augmented Generation',
    status: 'Published',
    description:
      'An intelligent chatbot powered by RAG technology that answers customer queries using only company-specific knowledge from FAQs, PDFs, and website content.',
    tags: ['RAG', 'LangChain', 'Vector Search', 'Chat UI'],
    category: 'Conversational AI',
    overview:
      'This AI Customer Support Chatbot leverages Retrieval Augmented Generation (RAG) to provide accurate, context-aware responses by grounding its answers in company-specific documentation. It eliminates hallucinations by strictly adhering to provided knowledge sources.',
    whyImpressive:
      'RAG-based chatbots represent one of the most demanded real-world AI applications today. This project demonstrates mastery of document processing, vector search, and controlled generation—critical skills for enterprise AI solutions. The ability to cite sources and prevent hallucinations makes it production-ready.',
    coreConcepts: [
      'Retrieval Augmented Generation (RAG)',
      'Document Chunking',
      'Vector Embeddings',
      'Semantic Search',
      'Hallucination Control',
      'Source Citation'
    ],
    techStack: [
      'Python',
      'LangChain / LlamaIndex',
      'FAISS / Chroma',
      'OpenAI API',
      'React',
      'FastAPI'
    ],
    features: [
      'Document upload and processing system',
      'Intelligent document chunking and embedding',
      'Semantic search across knowledge base',
      'Source citation in every response',
      'Hallucination prevention mechanisms',
      'Multi-format document support (PDF, DOCX, TXT)',
      'Real-time chat interface with conversation history'
    ],
    problemStatement:
      'Traditional chatbots often provide generic or incorrect information because they lack access to company-specific knowledge. Customer support teams need AI assistants that can accurately answer questions using only verified company documentation.',
    approach:
      'The system processes uploaded documents by chunking them into semantically meaningful segments, generating embeddings, and storing them in a vector database. When a user asks a question, the system retrieves relevant chunks, provides them as context to an LLM, and generates responses with source citations.',
    deliverables: [
      'Web-based document upload interface',
      'RAG-powered chat interface with source citations',
      'Knowledge base management system',
      'Live demo with sample documentation',
      'API documentation for integration',
      'Performance benchmarks and accuracy metrics'
    ],
    limitations:
      'Current implementation handles primarily text-based documents. Future improvements will include support for images, tables, and structured data, multi-language support, fine-tuning capabilities, and integration with popular CRM and helpdesk platforms.',
    images: [
      'https://via.placeholder.com/800x400/ef4444/ffffff?text=RAG+Chatbot',
      'https://via.placeholder.com/600x400/dc2626/ffffff?text=Document+Upload',
      'https://via.placeholder.com/600x400/b91c1c/ffffff?text=Chat+Interface',
      'https://via.placeholder.com/600x400/991b1b/ffffff?text=Source+Citations'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'AI Social Media Content Generator & Analyzer',
    subtitle: 'Content Intelligence Platform',
    status: 'Published',
    description:
      'An AI-powered platform that generates social media content, predicts engagement scores, and provides optimization suggestions for captions and hashtags.',
    tags: ['Content Generation', 'Sentiment Analysis', 'NLP', 'Analytics'],
    category: 'Content Intelligence',
    overview:
      'The AI Social Media Content Generator & Analyzer combines content creation with predictive analytics to help brands optimize their social media strategy. It generates brand-aligned content and provides data-driven insights on potential performance.',
    whyImpressive:
      'This project uniquely combines generation and analytics—two capabilities rarely found together in portfolios. It demonstrates understanding of both creative AI applications and data-driven decision making, showing how AI can be used end-to-end in content marketing workflows.',
    coreConcepts: [
      'Prompt Engineering',
      'Sentiment Analysis',
      'Heuristic Scoring',
      'NLP Classification',
      'Content Optimization',
      'Engagement Prediction'
    ],
    techStack: [
      'Python',
      'Hugging Face Models',
      'OpenAI API',
      'React',
      'FastAPI',
      'Pandas / NumPy'
    ],
    features: [
      'Brand tone-aware content generation',
      'Engagement score prediction using ML models',
      'Hashtag suggestion and optimization',
      'Caption improvement recommendations',
      'Multi-platform content adaptation',
      'Content performance analytics dashboard',
      'A/B testing suggestions for content variations'
    ],
    problemStatement:
      'Social media managers struggle to create engaging content consistently while understanding what drives performance. They need tools that can both generate quality content and predict its potential success before publishing.',
    approach:
      'The system uses fine-tuned language models for content generation based on brand guidelines. A separate ML model analyzes historical engagement data to predict performance scores. Sentiment analysis and NLP techniques are used to optimize captions and suggest relevant hashtags.',
    deliverables: [
      'Content generation interface with brand customization',
      'Engagement prediction dashboard with score explanations',
      'Side-by-side comparison of multiple content variations',
      'Hashtag and caption optimization tools',
      'Analytics dashboard with performance insights',
      'API for programmatic content generation'
    ],
    limitations:
      'Current predictions are based on general engagement patterns. Future enhancements will include platform-specific models, real-time trend integration, competitor analysis, and advanced A/B testing frameworks with statistical significance testing.',
    images: [
      'https://via.placeholder.com/800x400/f59e0b/ffffff?text=Content+Generator',
      'https://via.placeholder.com/600x400/d97706/ffffff?text=Engagement+Prediction',
      'https://via.placeholder.com/600x400/b45309/ffffff?text=Content+Analytics',
      'https://via.placeholder.com/600x400/92400e/ffffff?text=Optimization+Tools'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    title: 'AI Fraud & Anomaly Detection System',
    subtitle: 'Unsupervised Learning',
    status: 'Published',
    description:
      'An advanced ML system that detects unusual transactions and user behavior patterns in datasets, identifying potential fraud and anomalies in real-time.',
    tags: ['ML', 'Anomaly Detection', 'Unsupervised Learning', 'Streamlit'],
    category: 'Machine Learning Engineering',
    overview:
      'The AI Fraud & Anomaly Detection System demonstrates serious machine learning engineering capabilities by identifying suspicious patterns in transaction data. It uses unsupervised learning techniques to detect anomalies without requiring labeled fraud examples.',
    whyImpressive:
      'This project showcases deep understanding of real-world ML challenges and production-ready engineering. Anomaly detection is a critical capability in finance, security, and e-commerce, making this highly relevant for enterprise applications.',
    coreConcepts: [
      'Unsupervised Learning',
      'Isolation Forest',
      'Autoencoders',
      'Feature Engineering',
      'Data Normalization',
      'Anomaly Scoring'
    ],
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas / NumPy',
      'Streamlit',
      'Matplotlib / Plotly',
      'FastAPI'
    ],
    features: [
      'Real-time anomaly detection in transaction streams',
      'Visual anomaly plots and heatmaps',
      'Configurable sensitivity thresholds',
      'Model evaluation with precision/recall metrics',
      'Support for both synthetic and real datasets',
      'Feature importance analysis',
      'Batch and streaming processing modes'
    ],
    problemStatement:
      'Financial institutions and e-commerce platforms face constant threats from fraudulent activities. Traditional rule-based systems are easily circumvented, while supervised learning requires extensive labeled data that may not exist for emerging fraud patterns.',
    approach:
      'The system employs Isolation Forest algorithms to identify outliers in high-dimensional feature spaces. Autoencoders are used for complex pattern detection. Features are engineered from transaction metadata, user behavior patterns, and temporal sequences. The system outputs anomaly scores that can be thresholded for alerts.',
    deliverables: [
      'Interactive Streamlit dashboard with visual anomaly plots',
      'Model evaluation reports with detailed metrics',
      'Documentation explaining detection methodology',
      'Support for synthetic dataset generation',
      'Real-time detection API',
      'Performance benchmarks on standard datasets'
    ],
    limitations:
      'Current system requires careful feature engineering and threshold tuning. Future improvements will include adaptive thresholding, ensemble methods combining multiple algorithms, real-time model retraining, and integration with fraud investigation workflows.',
    images: [
      "/ai-fruad/ai-fruad1.jpg",
      "/ai-fruad/ai-fruad1.jpg",
      "/ai-fruad/ai-fruad2.jpg",
      "/ai-fruad/ai-fruad3.jpg",
      "/ai-fruad/ai-fruad4.jpg",
      "/ai-fruad/ai-fruad5.jpg",
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    title: 'AI Voice Assistant for Task Management',
    subtitle: 'Multimodal AI System',
    status: 'Published',
    description:
      'A voice-enabled AI assistant that accepts spoken commands, creates and manages tasks, and provides audio reminders—demonstrating multimodal AI capabilities.',
    tags: ['Speech-to-Text', 'Voice AI', 'NLP', 'Task Management'],
    category: 'Multimodal AI',
    overview:
      'The AI Voice Assistant for Task Management showcases the integration of speech recognition, natural language understanding, and text-to-speech technologies to create a hands-free productivity solution.',
    whyImpressive:
      'This project demonstrates multimodal AI capabilities—combining speech, text, and audio output. Voice interfaces are becoming increasingly important, and this project shows practical application of cutting-edge speech AI technologies.',
    coreConcepts: [
      'Speech-to-Text (STT)',
      'Intent Detection',
      'Text-to-Speech (TTS)',
      'Context Handling',
      'Natural Language Understanding',
      'Task Parsing'
    ],
    techStack: [
      'Python',
      'Whisper / SpeechRecognition',
      'OpenAI API',
      'Web Speech API',
      'React',
      'FastAPI'
    ],
    features: [
      'Voice input for task creation and management',
      'Natural language task parsing',
      'Audio reminders and notifications',
      'Conversation context maintenance',
      'Multi-task operations support',
      'Cross-platform compatibility',
      'Offline voice recognition capability'
    ],
    problemStatement:
      'Users often need to quickly capture tasks while on the go or in situations where typing is inconvenient. Traditional task management apps require manual input, which can interrupt workflow and reduce productivity.',
    approach:
      'The system uses Whisper for accurate speech-to-text conversion, processes the transcribed text through an intent classification model to understand user commands, and manages tasks through a structured database. Text-to-speech provides audio feedback and reminders.',
    deliverables: [
      'Voice input interface with real-time transcription',
      'Intent classification system with high accuracy',
      'Task persistence and management system',
      'Audio reminder and notification system',
      'Web and mobile-compatible interface',
      'API documentation for voice command integration'
    ],
    limitations:
      'Current system works best in quiet environments and requires internet connectivity for optimal performance. Future improvements will include offline operation, multi-language support, voice biometric authentication, and integration with popular calendar and productivity apps.',
    images: [
      'https://via.placeholder.com/800x400/06b6d4/ffffff?text=Voice+Assistant',
      'https://via.placeholder.com/600x400/0891b2/ffffff?text=Voice+Input',
      'https://via.placeholder.com/600x400/0e7490/ffffff?text=Task+Management',
      'https://via.placeholder.com/600x400/155e75/ffffff?text=Audio+Reminders'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 7,
    title: 'AI Business Insight Generator',
    subtitle: 'Data-Driven Decision Making',
    status: 'Published',
    description:
      'An intelligent system that analyzes uploaded CSV data to generate executive-level business insights, detect trends, and provide actionable recommendations.',
    tags: ['Data Analysis', 'LLM Reasoning', 'Business Intelligence', 'Visualization'],
    category: 'Business Intelligence',
    overview:
      'The AI Business Insight Generator transforms raw data into strategic business intelligence. By combining data analysis with LLM reasoning, it produces executive-level insights that help decision-makers understand trends and opportunities.',
    whyImpressive:
      'This project demonstrates how AI can bridge the gap between raw data and strategic decision-making. The ability to turn complex datasets into plain-language insights is highly valued in business contexts, making this a practical and impressive application.',
    coreConcepts: [
      'Data Analysis',
      'LLM-Based Reasoning',
      'Automated Insight Generation',
      'Trend Detection',
      'Statistical Analysis',
      'Natural Language Summarization'
    ],
    techStack: [
      'Python',
      'Pandas',
      'OpenAI API',
      'Plotly',
      'Streamlit',
      'NumPy'
    ],
    features: [
      'CSV upload and automatic data type detection',
      'Automated insight generation from data patterns',
      'Trend detection and visualization',
      'Business recommendation engine',
      'Executive summary generation',
      'Interactive charts and graphs',
      'Downloadable insight reports'
    ],
    problemStatement:
      'Business leaders often receive raw data reports that require significant time and expertise to interpret. They need tools that can automatically identify key insights, trends, and actionable recommendations from business data.',
    approach:
      'The system performs statistical analysis on uploaded data to identify patterns, trends, and anomalies. These findings are then processed through an LLM that generates natural language insights and recommendations. Visualizations are created to support the insights.',
    deliverables: [
      'Intuitive data upload interface',
      'Automated insight report generation',
      'Interactive visualization dashboard',
      'Downloadable PDF/HTML reports',
      'API for programmatic insight generation',
      'Support for multiple data formats and structures'
    ],
    limitations:
      'Current system works best with structured, clean data. Future enhancements will include support for unstructured data sources, predictive analytics, automated report scheduling, integration with popular business tools (Salesforce, Google Analytics), and custom insight templates for different industries.',
    images: [
            "/ai-business/ai-business1.jpg",
      "/ai-business/ai-business2.jpg",
      "/ai-business/ai-business3.jpg",
      "/ai-business/ai-business4.jpg",
      "/ai-business/ai-business5.jpg",
      "/ai-business/ai-business6.jpg",
      "/ai-business/ai-business7.jpg",
      "/ai-business/ai-business8.jpg",
      "/ai-business/ai-business9.jpg",
      "/ai-business/ai-business11.jpg",
      "/ai-business/ai-business12.jpg",
      "/ai-business/ai-business13.jpg",
      "/ai-business/ai-business14.jpg",
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 8,
    title: 'Smart Provision Shop Management System',
    subtitle: 'AI-Powered Retail Assistant',
    status: 'Published',
    description:
      'A comprehensive web-based shop management system with AI-powered insights that helps small retailers track sales, manage inventory, and make data-driven restocking decisions.',
    tags: ['AI Assistant', 'Inventory Management', 'Sales Analytics', 'React'],
    category: 'Retail Technology',
    overview:
      'The Smart Provision Shop Management System is designed to digitize and optimize small retail operations. It combines traditional inventory management with AI-powered insights to help shop owners understand their business better and make informed decisions.',
    whyImpressive:
      'This project addresses real-world needs of small business owners who lack access to sophisticated business intelligence tools. It demonstrates how AI can be democratized to help everyday entrepreneurs, making advanced analytics accessible through simple interfaces.',
    coreConcepts: [
      'Sales Trend Analysis',
      'Predictive Analytics',
      'Inventory Optimization',
      'Natural Language Processing',
      'Business Intelligence',
      'Chat Interface'
    ],
    techStack: [
      'React / Next.js',
      'Python',
      'FastAPI',
      'PostgreSQL / SQLite',
      'OpenAI API',
      'Pandas'
    ],
    features: [
      'Simple sales recording interface',
      'Real-time stock level tracking',
      'Low-stock alerts and notifications',
      'Profit and sales summary dashboard',
      'AI-powered shop assistant chat interface',
      'Smart restock recommendations',
      'Business insight generation',
      'Mobile-friendly responsive design'
    ],
    problemStatement:
      'Small shop owners typically manage their businesses using paper records or basic spreadsheets, making it difficult to track inventory, understand sales patterns, and make informed restocking decisions. They need affordable, easy-to-use tools that provide actionable insights.',
    approach:
      'The system records sales transactions and automatically updates inventory levels. An AI component analyzes sales patterns, stock levels, and historical data to generate insights and recommendations. A chat interface allows natural language queries about business performance.',
    deliverables: [
      'Web application with mobile-responsive design',
      'Sales recording and inventory management system',
      'AI chat assistant for business queries',
      'Dashboard with visual analytics',
      'Restock recommendation engine',
      'Profit and loss reporting',
      'Deployment guide for cloud hosting'
    ],
    limitations:
      'Current version focuses on single-shop operations. Future improvements will include multi-user support, WhatsApp integration for daily summaries, receipt generation, voice input for sales recording, and integration with supplier systems for automated ordering.',
    images: [
      "/ai-shop/ai-shop1.jpg",
      "/ai-shop/ai-shop1.jpg",
      "/ai-shop/ai-shop2.jpg",
      "/ai-shop/ai-shop3.jpg",
      "/ai-shop/ai-shop4.jpg",
    ],
    github: 'https://github.com/hexkoda23/AI-Powered-smart-shop-manager',
    demo: 'https://ai-powered-smart-shop-manager-2l9n.vercel.app/'
  }
  ,
  {
    id: 9,
    title: '23 — Fashion Platform & Brand Experience',
    subtitle: 'E‑commerce, Lookbook & Outfit Generator',
    status: 'Published',
    description:
      'A polished brand experience for 23 that blends shopping, storytelling and an outfit generator — built as a platform that inspires greatness, not just a storefront.',
    tags: ['E‑commerce', 'Fashion UX', 'React', 'Tailwind', 'Outfit Generator'],
    category: 'Digital Product & Frontend',
    overview:
      '23 is more than a clothing website — it is an avenue for greatness. The experience is designed to move beyond a catalogue into a living brand platform that showcases craft, culture and community. Visitors explore a cinematic lookbook, shop curated releases, and use an outfit generator to style pieces with confidence. The result is a product that elevates the brand narrative while making conversion paths clear and delightful.',
    whyImpressive:
      'This project fuses brand storytelling with product utility. It demonstrates design systems thinking, performance‑first front‑end engineering, and an interaction model (the outfit generator) that turns browsing into creation — deepening engagement and affinity for the 23 brand.',
    coreConcepts: [
      'UX for conversion & community',
      'Component‑driven design system',
      'Accessible, responsive layouts',
      'Stateful interactions',
      'AI‑style outfit suggestions'
    ],
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router'
    ],
    features: [
      'Hero narrative that frames 23 as a movement',
      'Lookbook gallery with editorial‑style imagery',
      'Shop grid for new drops and capsules',
      'Outfit generator with wardrobe panels and drag‑to‑style flow',
      'Persistent cart and quick view interactions',
      'Search, filters and structured product info',
      'FAQ and contact touchpoints for trust and support',
      'Performance‑minded image loading and error fallbacks'
    ],
    problemStatement:
      'The brand needed more than a basic store. 23 required a digital home that communicates ethos, showcases design craft and gives people tools to style and belong — a path from admiration to participation.',
    approach:
      'I built a modular, component‑driven UI that keeps the aesthetic consistent across Lookbook, Shop and Generator. The outfit generator mirrors a creative studio: a personal wardrobe rail on the left, a styling canvas on the right, and guided suggestions. Information architecture clarifies journeys from discovery to purchase, while micro‑copy and CTAs continually reinforce the brand’s call to greatness.',
    deliverables: [
      'Responsive website with lookbook, shop and generator',
      'Reusable design‑system components and tokens',
      'Product detail templates and merchandising layouts',
      'Empty‑state, loading and error experiences',
      'Deployment and performance budget'
    ],
    limitations:
      'Demo content uses sample inventory and screenshots. Next steps include integrating live inventory, payments and personalization models for the generator.',
    images: [
     "/23/23-1.jpg",
      "/23/23-2.jpg",
      "/23/23-3.jpg",
      "/23/23-4.jpg",
      "/23/23-5.jpg",
      "/23/23-6.jpg",
      "/23/23-7.jpg",
      "/23/23-8.jpg",
      "/23/23-9.jpg",
    ],
    github: 'https://github.com/hexkoda23/23-web',
    demo: 'https://23-web.vercel.app/'
  }
]

export default function Portfolio () {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section className='max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <p className='section-label'>AI & Machine Learning Projects</p>
          <h1 className='mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white'>
            Innovative AI Solutions Solving Real-World Problems
          </h1>
          <p className='mt-3 text-slate-500 dark:text-slate-400'>
            A collection of AI-powered projects demonstrating expertise in natural language processing, 
            machine learning, and intelligent system design. Each project addresses real challenges 
            with practical, deployable solutions.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {portfolioItems.map(item => (
            <ProjectCard
              key={item.id}
              {...item}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
