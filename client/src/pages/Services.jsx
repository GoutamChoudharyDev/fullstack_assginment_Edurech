import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Web Development",
    image: "/web-development.jpg",
    description:
      "We build fast, responsive, and scalable web applications for modern businesses.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    benefits: [
      "High performance websites",
      "Responsive design",
      "Better user engagement",
    ],
  },
  {
    title: "Mobile App Development",
    image: "/app_development.jpg",
    description:
      "Custom mobile applications delivering seamless experiences across platforms.",
    technologies: ["React Native", "Flutter", "Firebase"],
    benefits: [
      "Cross-platform solutions",
      "Increased customer reach",
      "Scalable mobile apps",
    ],
  },
  {
    title: "Full Stack Development",
    image: "/full_stack.jpg",
    description:
      "Complete application development covering frontend, backend, and databases.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    benefits: [
      "End-to-end development",
      "Faster time to market",
      "Cost-effective solutions",
    ],
  },
  {
    title: "Cloud Services",
    image: "/cloud.jpg",
    description:
      "Secure and scalable cloud infrastructure for modern business needs.",
    technologies: ["AWS", "Docker", "Kubernetes"],
    benefits: [
      "High availability",
      "Scalable infrastructure",
      "Reduced operational costs",
    ],
  },
  {
    title: "AI / ML Solutions",
    image: "/ai_ml.jpg",
    description:
      "Intelligent solutions powered by AI and ML to automate and optimize operations.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    benefits: [
      "Automation",
      "Smarter decisions",
      "Data-driven insights",
    ],
  },
  {
    title: "Data Analytics",
    image: "/data_analytics.jpg",
    description:
      "Advanced analytics solutions to extract meaningful insights from data.",
    technologies: ["Python", "Power BI", "SQL"],
    benefits: [
      "Better business insights",
      "Improved decision making",
      "Performance tracking",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-600">
          Our Services
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
