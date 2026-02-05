import Navbar from "../components/Navbar";
import TechnologyCard from "../components/TechnologyCard";

const technologies = [
    {
        name: "React",
        icon: "/react.jpg",
        description:
            "A powerful JavaScript library for building fast and interactive user interfaces.",
    },
    {
        name: "Node.js",
        icon: "/node.jpg",
        description:
            "A scalable runtime environment for building fast backend applications.",
    },
    {
        name: "JavaScript",
        icon: "/js.jpg",
        description:
            "The core language of the web used for dynamic and interactive applications.",
    },
    {
        name: "MongoDB",
        icon: "/mongodb.jpg",
        description:
            "A NoSQL database designed for scalability and flexibility.",
    },
    {
        name: "AWS",
        icon: "/aws.jpg",
        description:
            "Cloud platform offering scalable infrastructure and services.",
    },
    {
        name: "Docker",
        icon: "/docker.jpg",
        description:
            "Containerization platform to build, ship, and run applications efficiently.",
    },
];

const Technologies = () => {
    return (
        <>
            <Navbar />

            <div className="pt-32 px-6 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-cyan-600">
                    Technologies We Use
                </h1>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {technologies.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Technologies;
