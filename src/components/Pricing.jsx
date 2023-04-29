import { blackButton, blueButton } from "./button";
import UpiCard from "../assets/images/upiCard.svg";
const PricingContent = () => {
  return (
    <div className="w-[20rem] h-[30rem] flex flex-col justify-evenly pr-8">
      <div className="w-32">{blueButton("pricing")}</div>
      <h1 className="text-4xl">
        Simple and <br /> flexible pricing
      </h1>
      <p>
        It is a long established fact that a reader the will be distracted by
        the readable content of a page from when looking at it layout.{" "}
      </p>
      <h2 className="text-xl">Accepted Payment Methods</h2>
      <img src={UpiCard} alt="" />
    </div>
  );
};

const BusinessCard = () => {
  return (
    <div className="bg-secondary1 border border-black w-[20rem] h-[30rem] flex flex-col justify-evenly divide-y  divide-black mr-4">
      <div className="flex pl-5 items-center  justify-around ">
        <h1 className="text-4xl">Buisness</h1>
        <h3>Save 30%</h3>
      </div>
      <div className="text-center pt-4">
        <h1 className="font-semibold">
          <span className=" text-3xl">$49.99</span> / month
        </h1>
        <div>
          <h3 className="rounded-full mt-2 bg-[#FFEECC] text-[#C68A15] w-60 m-auto">
            Billed as $549.99 per year
          </h3>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-evenly h-80">
        <h1>
          <span className="font-bold">5+ Kubernetes</span> Cluster
        </h1>
        <h1>
          <span className="font-bold">API</span> Gateway
        </h1>
        <h1>Analytics & Security</h1>
        <h1>
          <span className="font-bold">SSH</span> key management
        </h1>
        <h1>VPC Peering</h1>
        <div className="w-44 text-center mt-4 ">
          {blackButton("Get Started")}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <div>
        <PricingContent />
      </div>
      <div>
        <BusinessCard />
      </div>
      <div>
        <BusinessCard />
      </div>
    </div>
  );
};

export default Pricing;
