// ServiceCard.jsx

const ServiceCard = ({ icon, title, description, highlighted }) => {
    return (
        <div data-aos-delay="200" data-aos="fade-right" className={`card shadow-xl transition-all duration-300 ease-in-out ${highlighted ? 'bg-lime-300 text-teal-900 hover:bg-green-400' : 'bg-white text-teal-900 hover:bg-green-100'} hover:scale-105 hover:shadow-2xl`}>
      <div className="card-body items-center text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="card-title text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
    );
};

export default ServiceCard;