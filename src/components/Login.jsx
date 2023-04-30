import GuyWithBook from "../assets/images/guywithbook.svg";
import downArrowFade from "../assets/images/downArrowFade.png";
import SocialButtons from "./SocialButtons";
import LogInForm from "./LogInForm";

const LeftContainer = () => {
  return (
    <div className="bg-primary1 border rounded-l-3xl flex flex-col justify-evenly items-center col-span-5">
      <h1 className="text-4xl  text-white px-6 pt-10 font-ReemKufi">
        Welcome to XeroCodee DevOps Automation Platform.
      </h1>
      <img className="min-w-[32rem] ml-52" src={GuyWithBook} alt="" />
    </div>
  );
};

const OrDivider = () => {
  return (
    <h2 className="text-secondary4 w-fit mx-auto font-bold text-xl">- OR -</h2>
  );
};

const RightContainer = () => {
  return (
    <div className="min-h-full border z-10 ml-[-1.5rem] rounded-3xl col-span-8  bg-white flex flex-col justify-around items-start relative  ">
      <h1 className="ml-10 text-3xl font-Roboto font-bold">Log in Account</h1>
      <SocialButtons />
      <OrDivider />
      <LogInForm />
      <div className="absolute top-8 right-8 text-lg font-bold text-secondary4 flex justify-center items-center">
        <span className="pr-2"> English (IN)</span>
        <img src={downArrowFade} alt="" />
      </div>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="min-h-[90vh] flex font-[ro">
      <div className="w-[70%] min-h-[35rem] m-auto grid grid-flow-col grid-cols-12 ab">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};
