import { useState } from "react";
import HowItWorkImg from "../assets/images/howItWorkImg.svg";
import howItWorkProfile from "../assets/images/howItWorkProfile.svg";
import { blackButton } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { toogleOption } from "../utils/workSlice";
import { howItWorksData } from "../utils/filterData";

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
    <div className="flex text-lg font-bold flex-row flex-wrap mt-[-4rem] justify-between w-[75%] m-auto ">
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
      <div className=" flex-1 flex flex-col justify-evenly mr-10">
        <div className="flex flex-row">
          <img className="w-[5rem] mr-5" src={howItWorkProfile} alt="" />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>

        <p className="text-secondary4 text-lg">{description}</p>
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
  const buttonClickedStatus = useSelector(
    (store) => store.toogleWork.buttonClicked
  );
  return (
    <div className="flex flex-wrap flex-row  ">
      <SectionWithButtons />
      <Working
        title={howItWorksData[buttonClickedStatus].title}
        description={howItWorksData[buttonClickedStatus].description}
        buttonText={howItWorksData[buttonClickedStatus].buttonText}
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
          className=" text-white  font-bold bg-primary1 px-10 py-4 border rounded-full ml-4"
        >
          How It Works
        </button>
      </div>
      <h1 className="text-center text-5xl font-extrabold mt-[-4rem] ">
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
