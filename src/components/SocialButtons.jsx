import githubIcon from "../assets/images/githubIcon.svg";
import googleIcon from "../assets/images/googleIcon.svg";
const SocialButtons = () => {
  return (
    <div className="flex flex-row  justify-evenly w-[95%]  flex-wrap">
      <button className="px-1 text-lg flex flex-row justify-evenly items-center  w-[15rem] py-2 border border-blue-200  rounded-lg">
        <img className="" src={googleIcon} alt="" />
        <span className="w-48">Sign in with Google</span>
      </button>

      <button className="px-1 text-lg flex flex-row justify-evenly items-center w-[15rem] py-2 border border-blue-200  rounded-lg">
        <img className="" src={githubIcon} alt="" />
        <span className="w-48">Sign Up with Github</span>
      </button>
    </div>
  );
};

export default SocialButtons;
