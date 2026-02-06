import { useState } from "react";
import api from "../services/api.js"

const ContactForm = () => {
  // useState
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  // handleSubmit 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!fullName || !email || !subject || !message) {
      alert("All fields are required");
      return;
    }

    try {
      await api.post("/api/contact",
        // payload
        {
          fullName,
          email,
          subject,
          message,
        }
      )

      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log("Error in form submit:", error);
      alert("Something went wrong while contact")
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-semibold mb-4">
        Send Us a Message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-cyan-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
