import { CiDeliveryTruck } from "react-icons/ci";

const Category = () => {
    return (
        <div className="my-10">
            <h3 className="text-2xl my-5 font-bold">
                How it Works
            </h3>
            <div className="flex flex-col md:flex-row justify-around">
                <div className="bg-emerald-600 rounded-2xl p-7 my-3 md:my-0">
                    <span className="text-5xl"><CiDeliveryTruck /></span>
                    <h5 className="font-bold my-2">
                        Booking Pick & Drop
                    </h5>
                    <p>
                        From personal packages to <br /> business shipments — we deliver <br /> on time, every time.
                    </p>
                </div>
                <div className="bg-emerald-600 rounded-2xl p-7 my-3 md:my-0">
                    <span className="text-5xl"><CiDeliveryTruck /></span>
                    <h5 className="font-bold my-2">
                        Cash On Delivery
                    </h5>
                    <p>
                        From personal packages to <br /> business shipments — we deliver <br /> on time, every time.
                    </p>
                </div>
                <div className="bg-emerald-600 rounded-2xl p-7 my-3 md:my-0">
                    <span className="text-5xl"><CiDeliveryTruck /></span>
                    <h5 className="font-bold my-2">
                        Delivery Hub
                    </h5>
                    <p>
                        From personal packages to <br /> business shipments — we deliver <br /> on time, every time.
                    </p>
                </div>
                <div className="bg-emerald-600 rounded-2xl p-7 my-3 md:my-0">
                    <span className="text-5xl"><CiDeliveryTruck /></span>
                    <h5 className="font-bold my-2">
                        Booking SME & Corporate
                    </h5>
                    <p>
                        From personal packages to <br /> business shipments — we deliver <br /> on time, every time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Category;