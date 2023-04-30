import getStartedImg from "../assets/images/getStartedImg.svg";

import { whiteButton } from "./button";

const GetStarted = () => {
  return (
    <div className="min-h-screen  flex  justify-center items-center">
      <div className="w-[70%] px-12  m-auto h-[30rem]  bg-gradient-to-r from-[#0C5BC6] to-[#4192FF] flex justify-between items-center rounded-[3rem]">
        <div className="flex-1 flex flex-col justify-evenly h-[55%] text-white">
          <h1 className="text-4xl font-extrabold">
            Automate Infrastructure on Any Cloud with XEROCODEE
          </h1>
          <form action="" className="flex flex-wrap">
            <input
              className="px-4 mr-4 py-3 w-[18rem] font-bold bg-[#4786DC] placeholder-white rounded-full"
              placeholder="your mail here..."
              type="text"
            />
            {whiteButton("Get Started")}
          </form>
        </div>
        <div className="flex-1 pl-4">
          <img src={getStartedImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
