// Single source of truth for site content — mirrors public/resume.pdf.

export interface Experience {
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  dates: string;
  logo: string; // Font Awesome class
  bullets: string[];
  tags: string[];
}

export interface Project {
  name: string;
  stack: string[];
  dates: string;
  highlight: string;
  bullets: string[];
}

export interface Award {
  title: string;
  date: string;
  icon: string;
  url?: string;
}

export const contact = {
  email: 'neelgajare@berkeley.edu',
  linkedin: 'https://www.linkedin.com/in/neel-gajare',
  github: 'https://github.com/ngajare',
  resume: 'resume.pdf',
};

export const experience: Experience[] = [
  {
    role: 'ML Intern',
    org: 'Apple',
    orgUrl: 'https://www.apple.com',
    location: 'Santa Clara, CA',
    dates: 'May 2026 – Aug 2026',
    logo: 'fab fa-apple',
    bullets: [
      'Developed agentic AI systems and trained neural network models such as GNNs to accelerate and optimize physical design workflows — placement & routing and timing path diagnosis — for next-generation Apple silicon.',
    ],
    tags: ['GNNs', 'Agentic AI', 'Physical Design', 'EDA'],
  },
  {
    role: 'AI Researcher',
    org: 'Berkeley AI Research Lab (BAIR) & Sky Computing Lab',
    orgUrl: 'https://sky.cs.berkeley.edu/',
    location: 'Berkeley, CA',
    dates: 'Feb 2024 – Present',
    logo: 'fas fa-brain',
    bullets: [
      'Sky Computing Lab: Working under Professor Alvin Cheung on LLM-driven kernel optimization for tensor accelerators — a beam search over LLM-generated optimization plans, pruned by correctness tests and cycle-accurate performance feedback. Achieved 1.4× to 3× speedups over expert hand-tuned schedules on TPU v6.',
      'Previously used thought trees to predict reasoning models’ accuracy on coding tasks. Paper published in COLM.',
      'BAIR: Worked under Professor Kurt Keutzer on generative AI for low-resource machine translation and linguistic segmentation. Built efficient RAG over a billion-token corpus with LangChain, Chroma, and Milvus; integrated the vector DB into a FastAPI backend; implemented agentic paragraph-segmentation workflows to improve retrieval.',
    ],
    tags: ['LLMs', 'TPU v6', 'Kernels', 'RAG', 'LangChain', 'Milvus', 'FastAPI'],
  },
  {
    role: 'SWE Intern',
    org: 'Amazon',
    orgUrl: 'https://www.amazon.com',
    location: 'Sunnyvale, CA',
    dates: 'May 2025 – Aug 2025',
    logo: 'fab fa-amazon',
    bullets: [
      'Designed low-latency traffic analysis workflows to detect and identify unique non-volumetric and agentic bot signatures affecting Amazon’s retail websites and backend services.',
      'Used Athena, SageMaker AI, CloudWatch, EC2, and internal tools to automate traffic-spike investigations — cutting on-call investigation time by >90% and compute costs by >85% on average.',
    ],
    tags: ['AWS', 'Athena', 'SageMaker', 'Bot Detection'],
  },
  {
    role: 'Stanford Research Intern',
    org: 'Crustal Deformation Lab, Stanford University',
    orgUrl: 'https://pangea.stanford.edu/research/CDFM/paul/',
    location: 'Palo Alto, CA',
    dates: 'May 2022 – Feb 2024',
    logo: 'fas fa-mountain',
    bullets: [
      'Worked under Professor Paul Segall researching complex basaltic magma chamber geometries using AI.',
      '1st author of an abstract published in the American Geophysical Union (AGU) conference proceedings and presented at the AGU Fall Meeting.',
      'Used Gmsh for 3-D mesh generation of magma chambers, MATLAB for surface-deformation simulation, and Bayesian optimization.',
    ],
    tags: ['MATLAB', 'Gmsh', 'Bayesian Optimization'],
  },
];

export const agu = {
  abstract: 'https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1069186',
  poster:
    'https://agu2022fallmeeting-agu.ipostersessions.com/default.aspx?s=09-E0-A3-22-69-19-B2-32-BA-E1-8A-22-20-10-77-6E',
};

export const education = {
  school: 'University of California, Berkeley',
  url: 'https://eecs.berkeley.edu/',
  degree: 'B.S. Electrical Engineering & Computer Science',
  location: 'Berkeley, CA',
  grad: 'Dec 2026',
  gpa: '3.9',
  coursework: [
    'Scalable AI',
    'Advanced Topics in Computer Systems',
    'Advanced Algorithms',
    'Computer Architecture',
    'Machine Learning',
    'Operating Systems',
    'Computer Security',
    'Database Management',
    'Quantum Computing',
    'Optimization Models in Eng',
    'Circuit Design',
    'Discrete Math & Probability',
    'Electricity & Magnetism',
    'Mechanics',
    'Competitive Programming',
    'Digital Design & Integrated Circuits',
    'FPGA Lab',
    'Advanced LLM Agents',
  ],
  societies: [
    'Space Technology @ Cal',
    'Cloud Computing @ Cal',
    'Codify',
    'Eta Kappa Nu (EECS Honor Society)',
    'Sky Computing Lab',
  ],
};

export const awards: Award[] = [
  { title: 'Apple FPGA Digital Design Contest — 1st Place', date: 'May 2025', icon: 'fas fa-trophy' },
  {
    title: 'NVIDIA National Merit Scholarship',
    date: 'April 2023',
    icon: 'fas fa-medal',
    url: 'https://patch.com/california/cupertino/3-cupertino-students-receives-2023-natl-merit-scholarships',
  },
  { title: 'St. Francis de Assisi Volunteering Award', date: 'May 2022', icon: 'fas fa-hands-helping' },
];

export const projects: Project[] = [
  {
    name: 'RISC-V CPU on FPGA',
    stack: ['Verilog', 'Vivado', 'FPGA'],
    dates: 'Jan 2025 – May 2025',
    highlight: '125 MHz · 1.06 CPI · 1st place',
    bullets: [
      'Implemented a 5-stage pipelined RISC-V CPU on FPGA with UART tethering, BIOS functionality, and synchronous memories.',
      'Hit a 125 MHz clock and 1.06 average CPI across benchmarks by resolving pipeline hazards and designing a pipelined hybrid Gshare branch predictor + branch target buffer + return address stack.',
      'Achieved the highest figure-of-merit score in Berkeley’s Apple-sponsored digital design competition.',
    ],
  },
  {
    name: 'IntrospectAI',
    stack: ['React', 'Three.js', 'Flask', 'Claude', 'Supabase'],
    dates: 'Jun 2025',
    highlight: 'Your AI chats as a 3D galaxy',
    bullets: [
      'Real-time 3D visualization that turns ChatGPT and Claude conversation histories into interactive, AI-labeled semantic clusters using Voyage embeddings and Claude Sonnet 4 for topic detection and RAG.',
      'High-performance React + Three.js frontend with GPU-accelerated WebGL shaders; Flask backend with multi-user support, live API updates, pgvector semantic search, and dynamic clustering.',
      'Resilient NLP pipeline with SpaCy, UMAP, KMeans, and Claude auto-labeling; cross-platform chat parsing and smooth filtering, zooming, and exploration.',
    ],
  },
];

export const skills = {
  Languages: ['Python', 'C', 'C++', 'Verilog', 'SQL', 'RISC-V Assembly', 'JavaScript'],
  'ML & Systems': [
    'PyTorch', 'JAX', 'CUDA', 'Triton', 'Pallas', 'vLLM', 'SGLang', 'TensorRT',
    'NSight Systems/Compute', 'Keras', 'OpenCV', 'NumPy', 'HuggingFace', 'OpenAI',
  ],
  'Agents & Data': ['LangGraph', 'LangChain', 'Chroma', 'Milvus', 'MongoDB', 'FastAPI', 'Firebase', 'Streamlit'],
  'Cloud & Infra': ['AWS EC2', 'Athena', 'SageMaker AI', 'Trainium', 'Docker', 'Kubernetes'],
  'Hardware & Debug': ['Vivado', 'PrimeTime', 'Gmsh', 'GDB', 'Valgrind'],
};
