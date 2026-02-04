import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white px-6">
        <div className="text-center max-w-3xl">

          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            NexTech Solutions
          </h1>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-yellow-400 mb-4">
            Innovating Technology. Empowering Business.
          </h2>

          {/* Short Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            NexTech Solutions is a professional IT services company delivering
            scalable, secure, and high-performance digital solutions to help
            businesses grow in the modern digital world.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/services"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
