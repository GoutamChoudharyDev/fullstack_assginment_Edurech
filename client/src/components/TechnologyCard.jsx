const TechnologyCard = ({ tech }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">

      {/* Icon */}
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-18 rounded-full h-18 mx-auto mb-4"
      />

      {/* Name */}
      <h3 className="text-xl font-semibold mb-2">
        {tech.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {tech.description}
      </p>
    </div>
  );
};

export default TechnologyCard;
