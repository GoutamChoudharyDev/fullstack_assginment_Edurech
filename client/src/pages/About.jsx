import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-6xl mx-auto text-gray-800">

        {/* Company Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-cyan-600 text-center">About NexTech Solutions</h1>
          <p className="text-gray-600 leading-relaxed">
            NexTech Solutions is a forward-thinking IT services company focused on
            delivering innovative, scalable, and secure digital solutions.
            We help businesses transform their ideas into powerful software
            products using modern technologies.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3 ">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses by delivering reliable, high-quality, and
              future-ready technology solutions that drive growth and innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To become a globally recognized IT services provider known for
              excellence, innovation, and customer-centric solutions.
            </p>
          </div>

        </section>

        {/* Why Choose NexTech */}
        <section>
          <h2 className="text-3xl font-bold mb-8 ">Why Choose NexTech?</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our skilled professionals bring deep technical expertise and
                industry experience to every project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                We design solutions that grow with your business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-gray-600">
                We prioritize transparency, collaboration, and long-term success.
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default About;
