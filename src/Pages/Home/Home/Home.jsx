
import About from "../About/About";
import Adress from "../Address/Adress";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About> 
            <Services></Services>   
            <br />
            <Adress></Adress>   
        </div>
    );
};

export default Home;