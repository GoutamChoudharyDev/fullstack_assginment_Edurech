import { useState } from "react";
import api from "../services/api.js"

const JobApplyForm = ({ job, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !reason) {
      alert("All fields are required");
      return;
    }

    try {
      await api.post("/api/jobs/apply", {
        jobId: job.id,
        fullName,
        email,
        phone,
        reason,
      });

      alert("Job apply successfull")
      onClose();
    } catch (error) {
      console.log("job apply error:", error);
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Apply for {job.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            placeholder="Why should we hire you?"
            rows="3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 cursor-pointer rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-cyan-600 text-white cursor-pointer px-4 py-2 rounded-lg"
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
