import { useState } from "react";
import { useDispatch } from "react-redux";
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

export default SectionWithButtons;
