import HowItWorkImg from "../assets/images/howItWorkImg.svg";
import { blackButton } from "./button";
const SectionWithButtons = () => {
  return (
    <div className="flex flex-row  mt-[-4rem] justify-between w-[80%] m-auto">
      <button className="text-white bg-primary1 px-20 py-4 border rounded-xl">
        01. BUILD
      </button>
      <button className="text-white bg-primary1 px-20 py-4 border rounded-xl">
        02. STANDARDIZE
      </button>
      <button className="text-white bg-primary1 px-20 py-4 border rounded-xl">
        03. INNOVATE
      </button>
    </div>
  );
};

// Feature component
const Feature = ({ title, description, buttonText }) => {
  return (
    <div className="flex  w-[70%] m-auto mt-10 ">
      <div className=" flex-1 flex flex-col justify-evenly">
        <h1 className="text-4xl">{title}</h1>
        <p>{description}</p>
        <div className="max-w-fit">{blackButton(buttonText)}</div>
      </div>
      <div className="flex-1">
        <img src={HowItWorkImg} alt="" />
      </div>
    </div>
  );
};

// Home page component
const DyanmicContainer = () => {
  return (
    <div className="flex flex-wrap">
      <SectionWithButtons />
      <Feature
        title="Build Infrastructure Automation"
        description="Infrastructure automation process is used by IT operations and development teams to compose, collaborate, reuse, and provision infrastructure as code."
        buttonText="Get Started"
      />
    </div>
  );
};
const HowItWorks = () => {
  return (
    <div className="min-h-[100vh]  bg-gray-100 flex flex-col justify-evenly items-center">
      <div>
        <button className="text-white bg-primary1 px-10 py-4 border rounded-full ml-4">
          Features
        </button>
      </div>
      <h1 className="text-center mt-[-4rem] text-4xl">
        Work smarter <br />
        with easy deploys, manages & scales
      </h1>
      <div className=" flex flex-wrap   ">
        <DyanmicContainer />
      </div>
    </div>
  );
};

export default HowItWorks;
