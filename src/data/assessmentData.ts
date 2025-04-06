
import { Question, AssessmentCategory, Recommendation } from "@/types/assessment";

export const CATEGORIES: Record<AssessmentCategory, { label: string, description: string, icon: string }> = {
  dataReadiness: {
    label: "Data Readiness",
    description: "The quality, quantity, and accessibility of your data for AI systems",
    icon: "database"
  },
  technicalCapability: {
    label: "Technical Capability",
    description: "Your organization's infrastructure and tools to support AI",
    icon: "server"
  },
  skillsAndExpertise: {
    label: "Skills & Expertise",
    description: "The knowledge and capabilities of your team to work with AI",
    icon: "graduation-cap"
  },
  strategicAlignment: {
    label: "Strategic Alignment",
    description: "How well AI initiatives align with business goals",
    icon: "target"
  },
  governanceAndRisk: {
    label: "Governance & Risk",
    description: "Policies and procedures for responsible AI use",
    icon: "shield"
  }
};

export const QUESTIONS: Question[] = [
  // Data Readiness Questions
  {
    id: "q1",
    text: "How would you rate the quality and quantity of data available in your organization?",
    category: "dataReadiness",
    options: [
      { value: 1, label: "Poor quality or insufficient data for basic analytics" },
      { value: 2, label: "Some usable data but significant gaps or quality issues" },
      { value: 3, label: "Moderate quality data with some gaps in key areas" },
      { value: 4, label: "Good quality data across most business areas" },
      { value: 5, label: "Excellent quality, well-structured data across all key areas" }
    ]
  },
  {
    id: "q2",
    text: "How accessible is your organization's data for analysis and AI applications?",
    category: "dataReadiness",
    options: [
      { value: 1, label: "Data is siloed and difficult to access" },
      { value: 2, label: "Limited access to data with significant barriers" },
      { value: 3, label: "Moderate access with some systems integrated" },
      { value: 4, label: "Good access with most systems integrated" },
      { value: 5, label: "Fully accessible data with comprehensive integration" }
    ]
  },
  {
    id: "q3",
    text: "Does your organization have effective data governance policies and procedures?",
    category: "dataReadiness",
    options: [
      { value: 1, label: "No formal data governance" },
      { value: 2, label: "Basic data governance with limited enforcement" },
      { value: 3, label: "Moderate data governance in some areas" },
      { value: 4, label: "Good data governance across most of the organization" },
      { value: 5, label: "Comprehensive data governance framework" }
    ]
  },
  
  // Technical Capability Questions
  {
    id: "q4",
    text: "What level of IT infrastructure does your organization have to support AI initiatives?",
    category: "technicalCapability",
    options: [
      { value: 1, label: "Basic IT infrastructure with limited processing capabilities" },
      { value: 2, label: "Some modern infrastructure but not optimized for AI" },
      { value: 3, label: "Moderate infrastructure that could support some AI use cases" },
      { value: 4, label: "Advanced infrastructure suitable for most AI applications" },
      { value: 5, label: "State-of-the-art infrastructure optimized for AI workloads" }
    ]
  },
  {
    id: "q5",
    text: "How would you describe your organization's technical ability to deploy and maintain AI systems?",
    category: "technicalCapability",
    options: [
      { value: 1, label: "No capability to deploy or maintain AI systems" },
      { value: 2, label: "Limited capability, would require significant external support" },
      { value: 3, label: "Moderate capability for simple AI deployments" },
      { value: 4, label: "Good capability to deploy and maintain most AI systems" },
      { value: 5, label: "Excellent capability to independently deploy and maintain complex AI systems" }
    ]
  },
  {
    id: "q6",
    text: "What tools and platforms does your organization currently use that could support AI initiatives?",
    category: "technicalCapability",
    options: [
      { value: 1, label: "Basic business tools with no AI capabilities" },
      { value: 2, label: "Some modern tools with limited AI features" },
      { value: 3, label: "Standard industry tools with some AI capabilities" },
      { value: 4, label: "Advanced tools and platforms with good AI support" },
      { value: 5, label: "Comprehensive suite of AI-ready tools and platforms" }
    ]
  },
  
  // Skills and Expertise Questions
  {
    id: "q7",
    text: "What level of AI expertise exists within your organization?",
    category: "skillsAndExpertise",
    options: [
      { value: 1, label: "No AI expertise" },
      { value: 2, label: "Limited understanding of AI concepts" },
      { value: 3, label: "Some team members with basic AI knowledge" },
      { value: 4, label: "Good AI expertise in key roles" },
      { value: 5, label: "Strong AI expertise across multiple teams" }
    ]
  },
  {
    id: "q8",
    text: "How would you rate your organization's ability to recruit or develop AI talent?",
    category: "skillsAndExpertise",
    options: [
      { value: 1, label: "Significant challenges in recruiting or developing AI talent" },
      { value: 2, label: "Difficulty attracting or developing adequate AI skills" },
      { value: 3, label: "Moderate ability to recruit or develop basic AI skills" },
      { value: 4, label: "Good ability to recruit or develop needed AI talent" },
      { value: 5, label: "Excellent ability to attract top AI talent or develop expertise internally" }
    ]
  },
  {
    id: "q9",
    text: "How AI-literate are your organization's leaders and decision-makers?",
    category: "skillsAndExpertise",
    options: [
      { value: 1, label: "No understanding of AI concepts or applications" },
      { value: 2, label: "Limited awareness of basic AI concepts" },
      { value: 3, label: "Moderate understanding of AI potential and limitations" },
      { value: 4, label: "Good understanding of AI and its strategic implications" },
      { value: 5, label: "Deep understanding of AI capabilities and strategic applications" }
    ]
  },
  
  // Strategic Alignment Questions
  {
    id: "q10",
    text: "How aligned are potential AI initiatives with your organization's strategic goals?",
    category: "strategicAlignment",
    options: [
      { value: 1, label: "No clear alignment between AI and strategic goals" },
      { value: 2, label: "Limited alignment with a few potential use cases" },
      { value: 3, label: "Moderate alignment with several identified use cases" },
      { value: 4, label: "Good alignment with strategic priorities" },
      { value: 5, label: "Perfect alignment with core strategic objectives" }
    ]
  },
  {
    id: "q11",
    text: "Does your organization have a clear AI strategy or roadmap?",
    category: "strategicAlignment",
    options: [
      { value: 1, label: "No AI strategy or roadmap" },
      { value: 2, label: "Basic ideas but no formal strategy" },
      { value: 3, label: "Partial strategy covering some aspects of AI adoption" },
      { value: 4, label: "Comprehensive strategy but may need refinement" },
      { value: 5, label: "Clear, detailed AI strategy aligned with business goals" }
    ]
  },
  {
    id: "q12",
    text: "How supportive is your organization's leadership of AI initiatives?",
    category: "strategicAlignment",
    options: [
      { value: 1, label: "No support for AI initiatives" },
      { value: 2, label: "Limited support with significant skepticism" },
      { value: 3, label: "Moderate support but competing priorities" },
      { value: 4, label: "Strong support from most leadership" },
      { value: 5, label: "Full commitment and championing of AI initiatives" }
    ]
  },
  
  // Governance and Risk Questions
  {
    id: "q13",
    text: "How well does your organization understand the ethical implications of AI?",
    category: "governanceAndRisk",
    options: [
      { value: 1, label: "No awareness of AI ethics" },
      { value: 2, label: "Limited awareness of basic ethical concerns" },
      { value: 3, label: "Moderate understanding of key ethical issues" },
      { value: 4, label: "Good understanding with some policies in place" },
      { value: 5, label: "Comprehensive understanding with robust ethical frameworks" }
    ]
  },
  {
    id: "q14",
    text: "What level of processes does your organization have for monitoring and governing AI systems?",
    category: "governanceAndRisk",
    options: [
      { value: 1, label: "No processes for AI governance" },
      { value: 2, label: "Basic processes with significant gaps" },
      { value: 3, label: "Moderate processes covering main risk areas" },
      { value: 4, label: "Good processes for most aspects of AI governance" },
      { value: 5, label: "Comprehensive AI governance framework" }
    ]
  },
  {
    id: "q15",
    text: "How prepared is your organization to address risks related to AI implementation?",
    category: "governanceAndRisk",
    options: [
      { value: 1, label: "Not prepared to address AI risks" },
      { value: 2, label: "Limited preparation for obvious risks" },
      { value: 3, label: "Moderate preparation for major risk categories" },
      { value: 4, label: "Good preparation with risk mitigation strategies" },
      { value: 5, label: "Fully prepared with comprehensive risk management" }
    ]
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  // Data Readiness Recommendations
  {
    category: "dataReadiness",
    scoreRange: [0, 33],
    title: "Build Data Foundation",
    description: "Your organization needs to establish fundamental data practices before pursuing AI initiatives.",
    actions: [
      "Conduct a data audit to identify key data sources and gaps",
      "Implement basic data governance policies",
      "Start collecting and storing relevant data systematically",
      "Invest in basic data cleaning and organization processes"
    ]
  },
  {
    category: "dataReadiness",
    scoreRange: [34, 66],
    title: "Enhance Data Quality and Access",
    description: "You have some data assets but need to improve quality, integration, and accessibility.",
    actions: [
      "Develop data quality metrics and improvement processes",
      "Create a data integration strategy to break down silos",
      "Implement master data management practices",
      "Expand data collection in key business areas"
    ]
  },
  {
    category: "dataReadiness",
    scoreRange: [67, 100],
    title: "Optimize Data for AI",
    description: "You have strong data foundations and are ready to optimize specifically for AI applications.",
    actions: [
      "Implement advanced data labeling and annotation processes",
      "Develop synthetic data capabilities for training AI systems",
      "Create real-time data pipelines for AI systems",
      "Establish continuous data quality monitoring specifically for AI applications"
    ]
  },
  
  // Technical Capability Recommendations
  {
    category: "technicalCapability",
    scoreRange: [0, 33],
    title: "Build Technical Foundation",
    description: "Your organization needs to establish fundamental technical infrastructure before pursuing AI initiatives.",
    actions: [
      "Assess current infrastructure limitations and requirements for basic AI",
      "Develop a cloud strategy to support data and compute needs",
      "Implement basic development and deployment environments",
      "Train IT staff on fundamental AI infrastructure needs"
    ]
  },
  {
    category: "technicalCapability",
    scoreRange: [34, 66],
    title: "Enhance Technical Capabilities",
    description: "You have some technical capabilities but need to strengthen them for more advanced AI applications.",
    actions: [
      "Upgrade computing resources for AI workloads",
      "Implement DevOps practices for AI deployment",
      "Develop integration capabilities between AI systems and business applications",
      "Create scalable infrastructure for handling AI processing needs"
    ]
  },
  {
    category: "technicalCapability",
    scoreRange: [67, 100],
    title: "Optimize Technical Infrastructure for AI",
    description: "You have strong technical foundations and are ready to optimize for advanced AI capabilities.",
    actions: [
      "Implement specialized hardware for AI (GPUs, TPUs, etc.)",
      "Develop automated MLOps/AIOps capabilities",
      "Create advanced monitoring systems for AI performance",
      "Establish technical architecture for enterprise-wide AI integration"
    ]
  },
  
  // Skills and Expertise Recommendations
  {
    category: "skillsAndExpertise",
    scoreRange: [0, 33],
    title: "Develop Basic AI Knowledge",
    description: "Your organization needs to build fundamental AI knowledge and skills.",
    actions: [
      "Provide basic AI awareness training for all staff",
      "Identify key roles that would benefit from deeper AI knowledge",
      "Partner with external experts for initial AI projects",
      "Develop a talent strategy for acquiring basic AI skills"
    ]
  },
  {
    category: "skillsAndExpertise",
    scoreRange: [34, 66],
    title: "Build Specialized AI Capabilities",
    description: "You have some AI knowledge but need to develop deeper expertise in key areas.",
    actions: [
      "Create specialized training programs for technical teams",
      "Develop an AI center of excellence with dedicated experts",
      "Implement knowledge sharing systems for AI best practices",
      "Establish AI career paths to retain and develop talent"
    ]
  },
  {
    category: "skillsAndExpertise",
    scoreRange: [67, 100],
    title: "Cultivate Advanced AI Expertise",
    description: "You have strong AI skills and are ready to develop cutting-edge capabilities.",
    actions: [
      "Establish advanced AI research capabilities within the organization",
      "Develop partnerships with academic institutions for talent and research",
      "Create specialized teams for emerging AI technologies",
      "Implement cross-functional AI innovation programs"
    ]
  },
  
  // Strategic Alignment Recommendations
  {
    category: "strategicAlignment",
    scoreRange: [0, 33],
    title: "Develop AI Strategic Foundation",
    description: "Your organization needs to establish how AI aligns with business goals.",
    actions: [
      "Conduct an AI opportunity assessment across business functions",
      "Educate leadership on AI potential and limitations",
      "Identify 1-2 high-value pilot projects aligned with business goals",
      "Develop metrics to measure AI pilot success"
    ]
  },
  {
    category: "strategicAlignment",
    scoreRange: [34, 66],
    title: "Align AI with Business Strategy",
    description: "You have some strategic alignment but need stronger connection between AI and business objectives.",
    actions: [
      "Develop a formal AI strategy with clear business objectives",
      "Create an AI prioritization framework for selecting initiatives",
      "Implement governance structures for AI strategic decisions",
      "Establish KPIs that link AI initiatives to business outcomes"
    ]
  },
  {
    category: "strategicAlignment",
    scoreRange: [67, 100],
    title: "Drive Transformation through AI",
    description: "You have strong strategic alignment and are ready to use AI for business transformation.",
    actions: [
      "Integrate AI strategy into overall business strategy",
      "Develop AI-driven business model innovations",
      "Create competitive differentiation through proprietary AI capabilities",
      "Build a culture of AI-enabled innovation"
    ]
  },
  
  // Governance and Risk Recommendations
  {
    category: "governanceAndRisk",
    scoreRange: [0, 33],
    title: "Establish AI Governance Foundations",
    description: "Your organization needs to build basic governance and risk management for AI.",
    actions: [
      "Develop basic AI ethics guidelines",
      "Create an inventory of AI-related risks relevant to your industry",
      "Establish governance roles and responsibilities for AI initiatives",
      "Implement basic monitoring for AI system performance"
    ]
  },
  {
    category: "governanceAndRisk",
    scoreRange: [34, 66],
    title: "Strengthen AI Governance",
    description: "You have some governance structures but need more robust processes for responsible AI.",
    actions: [
      "Develop comprehensive AI ethics policies",
      "Implement bias detection and mitigation processes",
      "Create AI transparency and explainability standards",
      "Establish formal AI risk assessment processes"
    ]
  },
  {
    category: "governanceAndRisk",
    scoreRange: [67, 100],
    title: "Lead in Responsible AI",
    description: "You have strong governance foundations and are ready to lead in responsible AI practices.",
    actions: [
      "Implement advanced AI explainability and fairness tools",
      "Develop industry-leading AI ethics standards",
      "Create continuous monitoring systems for AI ethics and performance",
      "Establish stakeholder engagement processes for AI governance"
    ]
  }
];
