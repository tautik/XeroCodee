import AboutUsImg from "../assets/images/aboutUsImg.svg";
import scaleIcon from "../assets/images/scaleIcon.svg";
import costIcon from "../assets/images/costIcon.svg";
import { blueButton, blackButton } from "./button";
const AboutUs = () => {
  return (
    <div className="flex h-[100vh] bg-white ">
      <div className="flex w-[90%] m-auto h-[80vh]">
        <div className="w-[55%] h-[90%] relative  px-10 py-5 bg-secondary1 rounded-3xl flex flex-col justify-evenly ">
          <h1 className="text-6xl	">
            Powerful and easy to use saas deploy platform
          </h1>

          <p className="text-lg left-0">
            Effortlessly deploy your saas with a powerful platform that
            simplifies the process and maximizes your potential.
          </p>
          <div className="flex flex-row w-[80%] ">
            <img className="h-[5rem]" src={costIcon} alt="" />
            <div className="ml-3 bold">
              <h2 className="text-2xl">Cost Effective</h2>
              <p className="text-lg">
                Deploy your applications in the cloud with cost-effective
                solutions that optimize your budget and performance.
              </p>
            </div>
          </div>
          <div className="flex flex-row ">
            <img className="h-[5rem]" src={costIcon} alt="" />
            <img className="ml-2 h-[3rem]" src={scaleIcon} alt="" />
            <div className="ml-3 bold">
              <h2 className="text-2xl">Scale Anywhere</h2>
              <p className="text-lg">
                Scale your application automatically and seamlessly across any
                infrastructure with ease and efficiency.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[50%] bg-red-50 flex justify-center"> */}
        <img
          className=" absolute z-10 right-0  w-[50%]"
          src={AboutUsImg}
          alt=""
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
