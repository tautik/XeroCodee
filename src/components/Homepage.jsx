import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Feature from "./Feature";
import First from "./First";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonal from "./Testimonal";

const Homepage = () => {
  return (
    <div className="mh-[90%]">
      <First />
      <Feature />
      <AboutUs />
      <HowItWorks />
      <Testimonal />
      <Pricing />
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
