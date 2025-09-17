import React from 'react';
import FastMarquee from 'react-fast-marquee';

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const CompanyLogos = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-xl text-teal-700 font-semibold mb-6">We've helped thousands of sales teams</h2>
        <FastMarquee speed={50} direction="right" gradient={false} pauseOnHover={true} className="overflow-hidden">
          <div className="flex space-x-6">
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo3} alt="Casio" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo1} alt="Amazon" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo4} alt="Moonstar" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo7} alt="Start" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo6} alt="Start People" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center w-36 h-20  shadow-md">
              <img src={logo5} alt="Randstad" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </FastMarquee>
      </div>
    </section>
  );
};

export default CompanyLogos;