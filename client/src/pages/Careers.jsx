import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import JobApplyForm from "../components/JobApplyForm";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build modern UI using React and Tailwind CSS.",
    location: "Indore",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Develop scalable APIs using Node.js and MongoDB.",
    location: "Remote",
    type: "Full Time",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Work on both frontend and backend technologies.",
    location: "Indore",
    type: "Internship",
  },
  {
    id: 4,
    title: "Cloud Manager",
    description:
      "Manage cloud infrastructure, deployments, and monitoring using AWS and DevOps tools.",
    location: "Indore",
    type: "Internship",
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-600">
          Join Our Team
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}
        </div>
      </section>

      {selectedJob && (
        <JobApplyForm
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
};

export default Careers;
