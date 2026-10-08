export const profile = {
  name: 'Jaganath',
  fullName: 'Dakkata Jaganath',
  email: 'jaganathdakkata514@gmail.com',
  phone: '+91-9492635852',
  github: 'https://github.com/djstarz09',
  linkedin: 'https://www.linkedin.com/in/dakkata-jaganath', // TODO: verify/replace with exact LinkedIn URL
  instagram: 'https://www.instagram.com/pearlsandjewels', // TODO: replace with exact Pearls and Jewels Instagram URL
  locations: 'Hyderabad · Bengaluru · Chennai · Pune',
  resume: '/resume.pdf'
}

export const projects = [
  {
    id: 'rag-document-qa', title: 'RAG-Based Document Q&A System', category: 'GenAI', featured: true,
    description: 'Document-grounded question answering workflow designed around retrieval, context and API-based inference.',
    problem: 'Users need answers from their own documents without relying on unsupported model memory.',
    approach: 'Upload documents, index chunks in a vector store, retrieve relevant context and return grounded answers through an API.',
    result: 'A recruiter-facing GenAI project concept that demonstrates RAG architecture and deployment thinking.',
    tech: ['LangChain', 'ChromaDB', 'FastAPI', 'RAG'],
    demo: '#', github: 'https://github.com/djstarz09',
    todo: 'TODO: add the real repository and deployed demo URL when available.'
  },
  {
    id: 'digit-recognition', title: 'Handwritten Digit Recognition Web App', category: 'ML', featured: true,
    description: 'Interactive handwritten-digit classifier with a Flask backend and browser drawing canvas.',
    problem: 'Turn a freehand digit sketch into a fast, understandable ML prediction in the browser.',
    approach: 'Canvas input → image preprocessing → tuned Random Forest trained with GridSearchCV on MNIST → Flask inference.',
    result: 'End-to-end ML application pattern connecting a frontend interaction to a deployed model API.',
    tech: ['Python', 'Random Forest', 'GridSearchCV', 'Flask', 'MNIST'],
    demo: '#', github: 'https://github.com/djstarz09',
    todo: 'TODO: add the real repository and deployed demo URL when available.'
  },
  {
    id: 'spam-detection', title: 'Email Spam Detection', category: 'ML',
    description: 'Supervised learning application for classifying email messages as spam or non-spam.',
    problem: 'Identify unwanted email reliably from message text.',
    approach: 'Python notebook/model pipeline with a persisted classifier and vectorizer, plus an application script.',
    result: 'The resume reports 95% classification accuracy during the Edunet internship project.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'NLP'],
    demo: '#', github: 'https://github.com/djstarz09/Spam-Detection'
  },
  {
    id: 'wildfire-detection', title: 'Wildfire Detection using Deep Learning', category: 'ML',
    description: 'Neural-network classification project using environmental and sensor data for wildfire detection.',
    problem: 'Use environmental readings to identify wildfire occurrence earlier and more reliably.',
    approach: 'Preprocess and scale sensor features, then train a Dense Neural Network with dropout and evaluate classification metrics.',
    result: 'A complete deep-learning classification workflow documented in the public repository.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
    demo: '#', github: 'https://github.com/djstarz09/Wildfire-Detection'
  },
  {
    id: 'glaucoma-detection', title: 'Glaucoma Detection System', category: 'ML',
    description: 'Computer-vision project for retinal image preprocessing, feature extraction and glaucoma classification.',
    problem: 'Classify retinal images to support automated glaucoma screening research.',
    approach: 'OpenCV-based preprocessing and feature extraction followed by machine-learning classification and a Flask inference API.',
    result: 'The resume describes a real-time Flask prediction workflow; the GitHub repository contains the project notebook.',
    tech: ['Python', 'OpenCV', 'Scikit-learn', 'Flask', 'Computer Vision'],
    demo: '#', github: 'https://github.com/djstarz09/Glaucoma-Detection'
  },
  {
    id: 'house-price', title: 'House Price Prediction', category: 'Web',
    description: 'Supervised learning project structured with client, model and server/application layers.',
    problem: 'Estimate house prices from property attributes such as area, rooms and location.',
    approach: 'ML workflow with dataset processing, model artifacts and a client/server structure documented in the repository.',
    result: 'The repository includes a complete project scaffold and documents example evaluation values; replace with measured metrics before publishing.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    demo: '#', github: 'https://github.com/djstarz09/House-Price-Prediction',
    todo: 'TODO: replace example README metrics with verified test-set metrics.'
  }
]

export const skillGroups = [
  ['Classical ML', ['Scikit-learn', 'XGBoost', 'CatBoost', 'TensorFlow', 'PyTorch']],
  ['GenAI / NLP', ['LLM Fundamentals', 'Prompt Engineering', 'RAG', 'LangChain', 'FAISS', 'ChromaDB', 'Sentence-Transformers']],
  ['Backend', ['Flask', 'FastAPI', 'REST APIs', 'Model Inference']],
  ['Data / CV', ['Pandas', 'NumPy', 'OpenCV', 'EDA', 'Feature Engineering']],
  ['Tools', ['Git', 'GitHub Actions', 'n8n', 'Streamlit', 'Power BI', 'VS Code']],
  ['Languages', ['Python', 'Java', 'SQL', 'HTML', 'CSS']]
]

export const experience = [
  { role: 'AI & ML Intern', company: 'Aenexz Tech Private Limited', date: 'Mar 2026 – Jun 2026', bullets: ['Built a telecom customer churn prediction solution using customer usage data.', 'Performed preprocessing, EDA, feature engineering and feature selection; evaluated Logistic Regression, Decision Tree, Random Forest, SVM and KNN using Accuracy and ROC-AUC.', 'Used RFE, SHAP and Partial Dependence Plots for model interpretability.'] },
  { role: 'BCG X – GenAI Job Simulation', company: 'Virtual Experience', date: 'Feb 2026 – Mar 2026', bullets: ['Performed data extraction and initial analysis in a GenAI-focused financial technology simulation.', 'Developed an AI-powered financial chatbot based on assigned business requirements.'] },
  { role: 'Machine Learning Intern', company: 'Edunet Foundation', date: 'Nov 2024 – Dec 2024', bullets: ['Built an email spam detection application using Python, Flask and supervised ML, achieving 95% classification accuracy.', 'Handled preprocessing, feature engineering, training, testing, debugging and evaluation.'] }
]
