const JobCard = ({ job, onApply }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <h2 className="text-xl font-semibold mb-2">
                {job.title}
            </h2>

            <p className="text-gray-600 mb-2">
                {job.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
                📍 {job.location} • 🕒 {job.type}
            </p>

            <button
                onClick={() => onApply(job)}
                className="bg-cyan-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;
