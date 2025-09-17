import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CompanyLogos from "../CompanyLogos/CompanyLogos";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServicesSection></ServicesSection>
            <CompanyLogos></CompanyLogos>
        </div>
    );
};

export default Home;