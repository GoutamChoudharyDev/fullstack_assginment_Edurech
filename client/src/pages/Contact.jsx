import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h1>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Info */}
          <div className="bg-cyan-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="mb-4 text-gray-300">
              We'd love to hear from you. Reach out to us using the details below.
            </p>

            <div className="space-y-3">
              <p>📧 <span className="ml-2">contact@nextech.com</span></p>
              <p>📞 <span className="ml-2">+91 98765 43210</span></p>
              <p>📍 <span className="ml-2">Indore, Madhya Pradesh, India</span></p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
