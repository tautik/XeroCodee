import { useState } from "react";
import HowItWorkImg from "../assets/images/howItWorkImg.svg";
import { blackButton } from "./button";

const SectionWithButtons = () => {
  const [buttonClicked, setButtonClicked] = useState("BUILD");
  const styleClicked = "text-white bg-primary1";
  const notClick = "text-black bg-secondary1";

  const updateButton = (value) => {
    setButtonClicked(value);
  };
  return (
    <div className="flex flex-row  mt-[-4rem] justify-between w-[60%] m-auto font-bold text-sm">
      <button
        className={` ${
          buttonClicked === "BUILD" ? styleClicked : notClick
        } px-20 py-4 border rounded-xl `}
        onClick={() => updateButton("BUILD")}
      >
        01. BUILD
      </button>
      <button
        className={` ${
          buttonClicked === "STANDARDIZE" ? styleClicked : notClick
        } px-20 py-4 border rounded-xl `}
        onClick={() => updateButton("STANDARDIZE")}
      >
        02. STANDARDIZE
      </button>
      <button
        className={` ${
          buttonClicked === "INNOVATE" ? styleClicked : notClick
        } px-20 py-4 border rounded-xl `}
        onClick={() => updateButton("INNOVATE")}
      >
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
    <div className="min-h-[100vh]  flex flex-col justify-evenly items-center">
      <div>
        <button
          disabled
          className=" text-white bg-primary1 px-10 py-4 border rounded-full ml-4"
        >
          How It Works
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
