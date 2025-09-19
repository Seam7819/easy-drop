
const FeaturedServices = () => {

    const LiveTrackingSVG = () => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M120 220C120 156.46 120 120 120 120L150 100L180 120L150 140L120 120"/>
      <path d="M120 120L90 140L60 120L90 100L120 120"/>
      <path d="M120 120L120 180"/>
      <path d="M180 120V180"/>
      <path d="M60 120V180"/>
      <path d="M60 180H180"/>
    </g>
    <g fill="#A7D2C0">
      <circle cx="120" cy="180" r="12" />
      <circle cx="60" cy="180" r="12" />
      <circle cx="180" cy="180" r="12" />
      <rect x="110" y="10" width="20" height="40" rx="10" />
      <rect x="50" y="10" width="20" height="40" rx="10" />
      <rect x="170" y="10" width="20" height="40" rx="10" />
    </g>
    <g stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M120 10L120 50"/>
      <path d="M50 30L10 30"/>
      <path d="M190 30L230 30"/>
    </g>
  </svg>
);

// Placeholder SVG for Safe Delivery
const SafeDeliverySVG = () => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M120 10C64.77 10 20 54.77 20 110V220H220V110C220 54.77 175.23 10 120 10Z"/>
      <path d="M120 50L120 170"/>
      <path d="M80 120H160"/>
    </g>
    <path d="M120 170L150 200L120 170L90 200L120 170" fill="#327376" stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="40" y="180" width="160" height="40" rx="10" fill="#A7D2C0" stroke="#A7D2C0" strokeWidth="6"/>
  </svg>
);

// Placeholder SVG for Call Center Support
const CallCenterSVG = () => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M120 220C120 156.46 120 120 120 120L150 100L180 120L150 140L120 120"/>
      <path d="M120 120L90 140L60 120L90 100L120 120"/>
      <path d="M120 120V180"/>
      <path d="M180 120V180"/>
      <path d="M60 120V180"/>
      <path d="M60 180H180"/>
    </g>
    <g fill="#A7D2C0">
      <circle cx="120" cy="180" r="12" />
      <circle cx="60" cy="180" r="12" />
      <circle cx="180" cy="180" r="12" />
    </g>
    <g stroke="#327376" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="70" y="40" width="100" height="50" rx="10"/>
      <path d="M120 90V120"/>
      <path d="M120 40L120 10"/>
    </g>
  </svg>
);


// Array of service data
const services = [
  {
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    icon: <LiveTrackingSVG />,
  },
  {
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <SafeDeliverySVG />,
  },
  {
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <CallCenterSVG />,
  },
];

    return (
        <div  className=" py-20 px-4 sm:px-6 lg:px-8">
            <h1 data-aos="fade-dp" className="text-2xl font-bold text-center mb-5 ">
                Why Choose Us
            </h1>
      {/* Container for the service cards with a max-width for better readability on large screens */}
      <div  className="max-w-7xl mx-auto">
        {/* Map over the services array to render each card */}
        <div  className="space-y-6">
          {services.map((service, index) => (
            // Each card item, with a light background, subtle shadow, and rounded corners
            // The layout is a flexbox row on medium screens and above, stacking vertically on mobile
            <div data-aos="fade-left"
              key={index}
              className="flex flex-col md:flex-row items-center justify-center p-6 bg-white rounded-xl shadow-md space-y-4 md:space-y-0 md:space-x-8"
            >
              {/* Illustration and text container */}
              <div className="flex flex-col md:flex-row items-center md:items-start w-full space-y-6 md:space-y-0 md:space-x-8">
                {/* SVG icon container with a fixed size and color */}
                <div className="w-24 h-24 flex-shrink-0">
                  {service.icon}
                </div>
                {/* Text content container */}
                <div className="text-center md:text-left">
                  {/* Title with a bold font and a slightly darker color */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  {/* Description with a slightly lighter gray color */}
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default FeaturedServices;