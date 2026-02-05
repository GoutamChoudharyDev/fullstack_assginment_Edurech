const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-semibold mb-4">
        Send Us a Message
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border px-4 py-2 rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
