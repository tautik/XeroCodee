import HowItWorkImg from "../assets/images/howItWorkImg.svg";
import howItWorkProfile from "../assets/images/howItWorkProfile.svg";
import { blackButton } from "./button";

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

export default Working;
