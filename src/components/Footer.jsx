import mailLogo from "../assets/images/mail.svg";
import phoneLogo from "../assets/images/phone-call.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import linkdin from "../assets/images/linkdin.svg";
import { blackButton, blueButton, fadeWhite } from "./button";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="  text-lg w-[20rem] h-[25rem] flex flex-col ">
      <h1 className="text-primary2 text-2xl font-extrabold  h-[20%] flex flex-col justify-end">
        XeroCodee
      </h1>
      <div className="flex flex-col  h-[80%] justify-evenly ">
        <p>
          You get just what you need to run your cloud workloads--no more, no
          less. Deploy from our single pane of glass, manage them with ease and
          scale up as fast as your workload grows
        </p>
        <div className="flex flex-row justify-start items-start">
          <div>
            <img src={mailLogo} alt="" />
          </div>
          <div className="ml-4 ">
            <h2>hello@xerocodee.com</h2>
            <h2>xerocodee@gmail.com</h2>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={phoneLogo} alt="" />
          </div>
          <h2 className="ml-4">+91 966747501</h2>
        </div>
      </div>
    </div>
  );
};
const Pages = () => {
  return (
    <div className="  text-lg w-[10rem] h-[25rem] flex flex-col justify-around ">
      <h1 className="text-primary2 text-2xl font-bold  h-[20%] flex flex-col justify-end">
        Pages
      </h1>
      <div className="border-b-black border mt-3 "></div>
      <div className=" flex flex-col  h-[80%] justify-evenly ">
        <h2 className="hover:text-[#5236FF] cursor-pointer">Home</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">About Us</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Integrations</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Pricing</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Features</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Contact Us</h2>
      </div>
    </div>
  );
};
const Utility = () => {
  return (
    <div className="  text-lg w-[10rem] h-[25rem] flex flex-col justify-around ">
      <h1 className="text-primary2 text-2xl font-bold  h-[20%] flex flex-col justify-end">
        Utility Pages
      </h1>
      <div className="border-b-black border mt-3 "></div>
      <div className=" flex flex-col  h-[80%] justify-evenly">
        <h2 className="hover:text-[#5236FF] cursor-pointer">Password</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Protected</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">404 Not Found</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Style Guide</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Licenses</h2>
        <h2 className="hover:text-[#5236FF] cursor-pointer">Changelog</h2>
      </div>
    </div>
  );
};

const Integration = () => {
  return (
    <div className=" bg-secondary1 flex flex-col justify-center w-[24rem] h-[20rem] border rounded-3xl pl-6">
      <p className="text-[#5236FF]">Getting started</p>
      <h1 className="text-primary2 font-extrabold mt-2 text-2xl 	">
        Infrastructure Automation & Compliance
      </h1>
      <div className="left-0 py-4 ">
        <p className="text-lg">
          With a few clicks, you can integrate your preferred DevOps tools to
          enable Single Pane of Glass DevOps
        </p>
      </div>
      <div className="flex ">
        {blackButton("Google")}
        <div className="ml-3">{fadeWhite("Github ")}</div>
      </div>
    </div>
  );
};

const UpperFooter = () => {
  return (
    <div className="flex justify-evenly w-[80%] m-auto items-center h-[90vh] ">
      <Contact />
      <Pages />
      <Utility />
      <Integration />
    </div>
  );
};
const BottomFooter = () => {
  return (
    <div>
      <div className=" mb-5 border-t grid col-span-12 items-center h-16 w-[80%] m-auto">
        <div className="col-start-1 col-end-3 ">
          <h1>Copyright © XeroCodee | Designed by Arya Soni </h1>
        </div>

        <div className="col-start-8 col-span-1 flex flex-row justify-evenly">
          <Link to="/signin">
            <img src={facebook} alt="" />
          </Link>
          <Link to="/signin">
            <img src={twitter} alt="" />
          </Link>
          <Link to="/signin">
            <img src={linkdin} alt="" />
          </Link>
          <Link to="/signin">
            <img src={instagram} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="min-h-screen text-secondary4">
      <UpperFooter />

      <BottomFooter />
    </div>
  );
};

export default Footer;
