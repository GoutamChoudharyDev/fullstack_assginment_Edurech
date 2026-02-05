const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

            {/* Image */}
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-6">

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-3">
                    {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                    {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Business Benefits */}
                <div>
                    <h3 className="font-semibold mb-2">Business Benefits</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {service.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;
