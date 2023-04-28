import heroImg from "../assets/images/heroLaptopImg.svg";
import { blueButton, blackButton } from "./button";
const Hero = () => {
  return (
    <div className="flex w-[80%] m-auto h-[90vh] ">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-6xl	">
          Build your <br /> audience and <br /> grow your brand
        </h1>
        <div className="left-0 py-4 ">
          <p className="text-lg">
            --no more, no less. Deploy from our single pane of
            <br /> glass, manage them with ease and scale up as
            <br /> fast as your workload grows.
          </p>
        </div>
        <div className="flex">
          {blueButton("Get Started")}
          <button className="ml-4 text-secondary3 bg-secondary1 px-6 py-4 border rounded-full">
            Watch Video
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img className="w-full" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
