import { useSelector } from "react-redux";
import { howItWorksData } from "../utils/filterData";

import Working from "./Working";
import SectionWithButtons from "./SectionWithButtons";
// Working component

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
