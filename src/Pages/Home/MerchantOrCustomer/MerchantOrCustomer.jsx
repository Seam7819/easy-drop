import merchant from "../../../assets/brands/location-merchant.png"
const MerchantOrCustomer = () => {
    return (
        <div data-aos="fade-dp" className="hero  my-5 rounded-2xl bg-[#03373D]">
            <div className="hero-content my-5 flex-col lg:flex-row-reverse ">
                <img
                    src={merchant}
                    className=" rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
                    </p>
                    <div className="space-x-4">
                        <button className="btn mb-4 md:mb-0 rounded-full bg-emerald-600">Become a Merchant</button>
                    <button className="btn text-emerald-600 rounded-full outline">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantOrCustomer;