import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-red-500">Nex</span>Tech
          </h2>
          <p className="text-sm">
            NexTech is a technology-driven company delivering innovative
            software solutions to help businesses grow digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Full Stack Development</li>
            <li>Cloud Services</li>
            <li>AI / ML Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📧 contact@nextech.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Indore, Madhya Pradesh</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} NexTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
