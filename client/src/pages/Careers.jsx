import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import JobApplyForm from "../components/JobApplyForm";

const jobs = [
  {
    title: "Frontend Developer",
    description: "Build modern UI using React and Tailwind CSS.",
    location: "Indore",
    type: "Full Time",
  },
  {
    title: "Backend Developer",
    description: "Develop scalable APIs using Node.js and MongoDB.",
    location: "Remote",
    type: "Full Time",
  },
  {
    title: "Full Stack Developer",
    description: "Work on both frontend and backend technologies.",
    location: "Indore",
    type: "Internship",
  },
  {
    title: "Cloud Manager",
    description: "Manage cloud infrastructure, deployments, and monitoring using AWS and DevOps tools.",
    location: "Indore",
    type: "Internship",
  }

];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-600">
          Join Our Team
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onApply={setSelectedJob}
            />
          ))}
        </div>
      </div>

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
