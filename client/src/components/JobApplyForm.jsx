const JobApplyForm = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Apply for {job.title}
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            placeholder="Why should we hire you?"
            className="w-full border px-4 py-2 rounded-lg"
            rows="3"
          ></textarea>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
