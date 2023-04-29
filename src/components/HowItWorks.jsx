import { useState } from "react";
import HowItWorkImg from "../assets/images/howItWorkImg.svg";
import howItWorkProfile from "../assets/images/howItWorkProfile.svg";
import { blackButton } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { toogleOption } from "../utils/workSlice";

const SectionWithButtons = () => {
  //useSelector to access store data and from there slice initialstate

  const [buttonClicked, setButtonClicked] = useState("BUILD");
  const styleClicked = "text-white bg-primary1";
  const notClick = "text-black bg-secondary1";
  const dispatch = useDispatch();
  const updateButton = (value) => {
    dispatch(toogleOption(value));
    setButtonClicked(value);
  };
  return (
    <div className="flex flex-row flex-wrap mt-[-4rem] justify-between w-[60%] m-auto font-bold text-sm">
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

// Working component
const Working = ({ title, description, buttonText }) => {
  return (
    <div className="flex  w-[70%] m-auto mt-10 ">
      <div className=" flex-1 flex flex-col justify-evenly">
        <div className="flex flex-row">
          <img className="w-[5rem] mr-5" src={howItWorkProfile} alt="" />
          <h1 className="text-4xl">{title}</h1>
        </div>

        <p>{description}</p>
        <div className="max-w-fit">{blackButton(buttonText)}</div>
      </div>
      <div className="flex-1">
        <img src={HowItWorkImg} alt="" />
      </div>
    </div>
  );
};
const data = {
  BUILD: {
    title: "Build Infrastructure Automation",
    description:
      "Infrastructure automation process is used by IT operations and development teams to compose, collaborate, reuse, and provision infrastructure as code.",
    buttonText: "Get Started",
  },
  STANDARDIZE: {
    title: "Standardize Infrastructure Automation ",
    description:
      "Using access controls, policy enforcement, and audit, the infrastructure automation workflow offers possibilities for cost, compliance, and security management.",
    buttonText: "Get Started",
  },
  INNOVATE: {
    title: "Innovate Infrastructure Automation  ",
    description:
      "With self-service infrastructure as code and integration with VCS, ITSM, and CI/CD, infrastructure automation process is extended to all teams inside the organisation.",
    buttonText: "Get Started",
  },
};

// Home page component
const DyanmicContainer = () => {
  const buttonClickedStatus = useSelector(
    (store) => store.toogleWork.buttonClicked
  );
  console.log(buttonClickedStatus);
  return (
    <div className="flex flex-wrap flex-row  ">
      <SectionWithButtons />
      <Working
        title={data[buttonClickedStatus].title}
        description={data[buttonClickedStatus].description}
        buttonText={data[buttonClickedStatus].buttonText}
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
