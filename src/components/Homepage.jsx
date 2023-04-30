import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Feature from "./Feature";
import First from "./First";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonal from "./Testimonal";

const Homepage = () => {
  return (
    <div className="mh-[90%]">
      <Hero />
      <Feature />
      <AboutUs />
      <HowItWorks />
      <Testimonal />
      <Pricing />
      <GetStarted />
      <Blog />
      <Footer />
    </div>
  );
};

/*
    First
        -Hero or -Login/Logout
    Feature
    AboutUs
    How It Works
    Testimonal
    Pricing
    Blog
    Footer
*/

export default Homepage;
