import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CompanyLogos from "../CompanyLogos/CompanyLogos";
import CustomerReview from "../CustomerReview/CustomerReview";
import FaqSection from "../FaqSection/FaqSection";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import MerchantOrCustomer from "../MerchantOrCustomer/MerchantOrCustomer";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServicesSection></ServicesSection>
            <CompanyLogos></CompanyLogos>
            <FeaturedServices></FeaturedServices>
            <MerchantOrCustomer></MerchantOrCustomer>
            <CustomerReview></CustomerReview>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;