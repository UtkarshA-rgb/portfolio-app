// Mock data for Utkarsh's Portfolio

//backend logos
import javaLogo from '../assets/icons/java.svg';
import pythonLogo from '../assets/icons/python.svg';
import springBootLogo from '../assets/icons/springboot.svg';
import microservicesLogo from '../assets/icons/microservice.png'; // Placeholder, find a suitable generic icon
import restApiLogo from '../assets/icons/restfulapi.png'; // Placeholder, find a suitable generic icon
import graphqlLogo from '../assets/icons/graphql.png';
import gitHubCopilotLogo from '../assets/icons/githubcopilot.svg';
import aimlLogo from '../assets/icons/aiml.png';
//frontend logos
import reactLogo from '../assets/icons/react.png';
import angularLogo from '../assets/icons/angular.png';
import typescriptLogo from '../assets/icons/typescript.png';
import javascriptLogo from '../assets/icons/javascript.png';
import reduxLogo from '../assets/icons/redux.png';
import materialUiLogo from '../assets/icons/materialui.png';
import htmlLogo from '../assets/icons/html.png';
import cssLogo from '../assets/icons/css.png';

//cloud/devops logos
import awsLogo from '../assets/icons/aws.png';
import azureLogo from '../assets/icons/azure.png';
import dockerLogo from '../assets/icons/docker.png';
import kubernetesLogo from '../assets/icons/kubernetes.svg';
import terraformLogo from '../assets/icons/terraform.svg';
import kafkaLogo from '../assets/icons/kafka.png';
import jenkinsLogo from '../assets/icons/jenkins.png';
import gcpLogo from '../assets/icons/gcp.png';

//database logos
import postgresqlLogo from '../assets/icons/postgresql.svg';
import mongodbLogo from '../assets/icons/mongodb.png';
import cassandraLogo from '../assets/icons/cassandra.png';
import dynamodbLogo from '../assets/icons/dynamodb.png';
import azureCosmosLogo from '../assets/icons/azureCosmosdb.png';


export const personalInfo = {
  name: "Utkarsh ",
  title: "Full Stack Developer",
  subtitle: "Java • React • Cloud • AI Integration",
  phone: "(346) 219-4972",
    email: "amin.utkarsh01798@gmail.com",
    location: "Jersey City, NJ",
  linkedin: "",
  github: "https://github.com/utkarsh-a",
  bio: "Experienced Full Stack Developer with 4+ years of expertise in building scalable microservices, optimizing performance, and integrating cutting-edge AI solutions. Proven track record of improving system performance by 40% and handling 500K+ daily requests with 99.9% uptime.",
};

export const skills = {
    // This backend section is based on your screenshot
    backend: [
        { name: "Java", level: 95, years: "4+", logo: javaLogo },
        { name: "Python", level: 70, years: "2+", logo: pythonLogo },
        { name: "Spring Boot", level: 90, years: "4+", logo: springBootLogo },
        { name: "Microservice", level: 85, years: "3+", logo: microservicesLogo },
        { name: "REST APIs", level: 90, years: "4+", logo: restApiLogo },
        { name: "GraphQL", level: 75, years: "2+", logo: graphqlLogo },
        { name: "GitHub Copilot", level: 80, years: "3+", logo: gitHubCopilotLogo },
        { name: "AI/ML", level: 75, years: "2+", logo: aimlLogo },
    ],
    // These sections are based on the code you provided
    frontend: [
        { name: "React", level: 85, years: "3+", logo: reactLogo },
        { name: "Angular", level: 80, years: "3+", logo: angularLogo },
        { name: "TypeScript", level: 85, years: "3+", logo: typescriptLogo },
        { name: "JavaScript", level: 90, years: "4+", logo: javascriptLogo },
        { name: "Redux", level: 75, years: "2+", logo: reduxLogo },
        { name: "Material UI", level: 80, years: "2+", logo: materialUiLogo },
        { name: "HTML", level: 90, years: "2+", logo: htmlLogo },
        { name: "CSS", level: 90, years: "2+", logo: cssLogo },
    ],
    cloud: [
        { name: "AWS", level: 85, years: "3+", logo: awsLogo },
        { name: "Azure", level: 75, years: "2+", logo: azureLogo },
        { name: "GCP", level: 70, years: "2+", logo: gcpLogo },
        { name: "Docker", level: 80, years: "3+", logo: dockerLogo },
        { name: "Kubernetes", level: 75, years: "2+", logo: kubernetesLogo },
        { name: "Terraform", level: 70, years: "2+", logo: terraformLogo },
        { name: "Kafka", level: 85, years: "3+", logo: kafkaLogo },
        { name: "Jenkins", level: 80, years: "2+", logo: jenkinsLogo },
    ],
    databases: [
        { name: "PostgresSQL", level: 85, years: "3+", logo: postgresqlLogo },
        { name: "MongoDB", level: 80, years: "3+", logo: mongodbLogo },
        { name: "Cassandra", level: 75, years: "2+", logo: cassandraLogo },
        { name: "DynamoDB", level: 70, years: "2+", logo: dynamodbLogo },
        { name: "Azure Cosmos DB", level: 70, years: "2+", logo: azureCosmosLogo },
    ]
};

export const projects = [
  {
    id: 1,
    title: "MicroServ Optimizer",
    subtitle: "Performance Optimization Platform",
    description: "A comprehensive microservices performance monitoring and optimization platform that analyzes API response times, identifies bottlenecks, and provides actionable insights for performance improvements.",
    longDescription: "Built with Java 21 and Spring Boot 3.x, this platform implements advanced monitoring algorithms that reduced average API response times by 40% across multiple services. Features real-time performance dashboards, automated scaling recommendations, and predictive performance analytics.",
    technologies: ["Java 21", "Spring Boot 3.x", "React 18", "PostgreSQL", "Redis", "AWS ECS", "Prometheus", "Grafana"],
    features: [
      "Real-time performance monitoring",
      "Automated bottleneck detection",
      "Predictive scaling recommendations",
      "Custom alerting system",
      "Performance analytics dashboard"
    ],
    metrics: {
      "Performance Improvement": "40%",
      "Daily Requests Handled": "500K+",
      "System Uptime": "99.9%",
      "Response Time": "<200ms"
    },
    githubUrl: "https://github.com/utkarsh-a/microserv-optimizer",
    liveUrl: "https://microserv-optimizer.demo.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Backend",
    status: "Production"
  },
  {
    id: 2,
    title: "AI Document Processor",
    subtitle: "LLM-Powered Document Analysis",
    description: "An intelligent document processing system that leverages OpenAI and Azure AI APIs to extract, analyze, and categorize documents with 25% improved accuracy over traditional methods.",
    longDescription: "This system integrates multiple LLM providers including OpenAI GPT-4 and Azure AI services to process various document types. Features include intelligent text extraction, sentiment analysis, automated categorization, and real-time processing with response streaming.",
    technologies: ["Python", "FastAPI", "OpenAI API", "Azure AI", "React", "TypeScript", "MongoDB", "Docker", "Kubernetes"],
    features: [
      "Multi-format document support",
      "Real-time text extraction",
      "Sentiment analysis",
      "Automated categorization",
      "Batch processing capabilities"
    ],
    metrics: {
      "Accuracy Improvement": "25%",
      "Processing Speed": "3x faster",
      "Document Types": "15+",
      "Success Rate": "97%"
    },
    githubUrl: "https://github.com/utkarsh-a/ai-document-processor",
    liveUrl: "https://ai-doc-processor.demo.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    category: "AI/ML",
    status: "Production"
  },
  {
    id: 3,
    title: "StreamFlow Platform",
    subtitle: "Real-time Event Streaming Dashboard",
    description: "A scalable event streaming platform built with Apache Kafka that handles millions of events per day with real-time processing and monitoring capabilities.",
    longDescription: "Enterprise-grade streaming platform that processes real-time events from multiple sources. Built with Kafka 3.x, Spring Cloud Stream, and React, it provides comprehensive event monitoring, filtering, and analytics with support for complex event processing patterns.",
    technologies: ["Apache Kafka", "Spring Cloud Stream", "React", "WebSockets", "PostgreSQL", "Docker", "AWS EKS", "Helm"],
    features: [
      "Real-time event processing",
      "Multi-source data ingestion",
      "Custom event filtering",
      "Visual stream monitoring",
      "Scalable architecture"
    ],
    metrics: {
      "Events Per Day": "2M+",
      "Processing Latency": "<50ms",
      "Throughput": "10K events/sec",
      "Availability": "99.95%"
    },
    githubUrl: "https://github.com/utkarsh-a/streamflow-platform",
    liveUrl: "https://streamflow.demo.com",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    category: "Data Engineering",
    status: "Production"
  },
  {
    id: 4,
    title: "CloudOps Manager",
    subtitle: "Infrastructure Management Dashboard",
    description: "A comprehensive cloud infrastructure management platform that automates deployment, monitoring, and scaling across AWS and Azure environments using Infrastructure as Code.",
    longDescription: "Built with modern DevOps principles, this platform provides unified management of cloud resources across multiple providers. Features include automated CI/CD pipelines, infrastructure provisioning with Terraform, and comprehensive monitoring with custom alerting.",
    technologies: ["Terraform", "AWS CloudFormation", "Azure DevOps", "Jenkins", "Docker", "Kubernetes", "Python", "React"],
    features: [
      "Multi-cloud resource management",
      "Automated CI/CD pipelines",
      "Infrastructure as Code",
      "Cost optimization insights",
      "Security compliance monitoring"
    ],
    metrics: {
      "Deployment Time": "75% faster",
      "Infrastructure Costs": "30% reduced",
      "Deployment Success": "98%",
      "MTTR": "<15 minutes"
    },
    githubUrl: "https://github.com/utkarsh-a/cloudops-manager",
    liveUrl: "https://cloudops-manager.demo.com",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "DevOps",
    status: "Production"
  },
  {
    id: 5,
    title: "TelecomPortal Pro",
    subtitle: "Customer Management System",
    description: "A modern telecom customer portal with intelligent search capabilities, built using Angular and Spring Boot with advanced caching strategies that improved user engagement by 20%.",
    longDescription: "Comprehensive customer management system for telecom operations featuring modular Angular components, secure authentication, and optimized database queries. Implemented advanced search with early-stage LLM integration and reduced query response times by 35%.",
    technologies: ["Angular 12", "Spring Boot 2.x", "MySQL", "Azure Cosmos DB", "Spring Security", "JWT", "Bootstrap"],
    features: [
      "Advanced customer search",
      "Secure authentication system",
      "Real-time data synchronization",
      "Mobile-responsive design",
      "Analytics dashboard"
    ],
    metrics: {
      "User Engagement": "+20%",
      "Query Response Time": "35% faster",
      "Customer Satisfaction": "4.8/5",
      "Active Users": "50K+"
    },
    githubUrl: "https://github.com/utkarsh-a/telecom-portal-pro",
    liveUrl: "https://telecom-portal.demo.com",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    category: "Full Stack",
    status: "Production"
  }
];

export const experience = [
  {
    company: "Verisk",
    position: "Full Stack Developer",
    duration: "Dec 2023 – Present",
    location: "Jersey City, NJ",
    type: "Full-time",
    description: "Leading full-stack development of enterprise applications using Java 17/21 and Spring Boot 3.x+, building secure microservices that handle 500K+ daily requests with 99.9% uptime.",
    achievements: [
      "Optimized Spring Boot microservices, reducing average API response time by 40%",
      "Developed dynamic React interfaces with modern UI/UX principles",
      "Integrated Apache Kafka 3.x for real-time event streaming",
      "Collaborated with data science teams to integrate OpenAI and Azure AI APIs",
      "Implemented robust CI/CD pipelines using AWS CodePipeline and Jenkins"
    ],
    technologies: ["Java 21", "Spring Boot 3.x", "React 18", "AWS", "Kafka", "PostgreSQL", "MongoDB", "Kubernetes"]
  },
  {
    company: "Airtel",
    position: "Full Stack Developer",
    duration: "Aug 2019 – Aug 2021",
    location: "India",
    type: "Full-time",
    description: "Led full-stack development of telecom portal features using Angular and Java with Spring Boot, focusing on performance optimization and user experience improvements.",
    achievements: [
      "Built Spring Boot APIs for intelligent search with early-stage LLM integration",
      "Developed modular Angular components with Bootstrap 4.6",
      "Improved user engagement by 20% through optimized UI/UX design",
      "Reduced query response times by 35% through database optimization",
      "Automated CI/CD pipelines using Azure DevOps and Kubernetes"
    ],
    technologies: ["Java 14", "Spring Boot 2.x", "Angular 12", "Azure", "MySQL", "Cosmos DB", "Kubernetes"]
  }
];

export const education = [
  {
    degree: "Master of Science (M.S.)",
    field: "Computer Science",
    school: "University of Houston Clear Lake",
    year: "2023",
    location: "Houston, TX"
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialUrl: "/AWS Certified Cloud Practitioner certificate.pdf"
  },
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialUrl: "https://aws.amazon.com/certification/"
  }
];


export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Performance Improvement", value: "40%" },
  { label: "System Uptime", value: "99.9%" }
];
