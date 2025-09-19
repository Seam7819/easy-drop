// ServicesSection.jsx
import ServiceCard from '../ServiceCard/ServiceCard';
import { FaTruck, FaMapMarkedAlt, FaBoxOpen, FaMoneyBillWave, FaBriefcase, FaUndoAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck />,
    title: 'Express & Standard Delivery',
    description: 'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
    highlighted: false,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Nationwide Delivery',
    description: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.',
    highlighted: true,
  },
  {
    icon: <FaBoxOpen />,
    title: 'Fulfillment Solution',
    description: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    highlighted: false,
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Cash on Home Delivery',
    description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    highlighted: false,
  },
  {
    icon: <FaBriefcase />,
    title: 'Corporate Service / Contract In Logistics',
    description: 'Customized corporate services which includes warehouse and inventory management support.',
    highlighted: false,
  },
  {
    icon: <FaUndoAlt />,
    title: 'Parcel Return',
    description: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section  className="bg-[#03373D] py-12 px-4 rounded-xl my-10" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-down" data-aos-duration="1200" className="text-3xl font-bold text-white mb-2 border-b-2 border-blue-500 inline-block pb-2">
          Our Services
        </h2>
        <p data-aos-delay="200"
          data-aos-duration="1200" className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;