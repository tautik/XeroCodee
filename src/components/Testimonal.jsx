import { useState } from "react";
import testimonalImg from "../assets/images/testimonalImg.svg";
import Star from "../assets/images/Star.svg";

const UserInfo = ({ designation, name }) => {
  return (
    <div className="flex flex-col justify-between items-center mt-4">
      <img className="rounded-full" src={testimonalImg} alt="" />
      <h1 className="text-3xl bold">{name}</h1>
      <h1 className="">{designation}</h1>
      <img src={Star} alt="" />
    </div>
  );
};

// Feature component
const Review = ({ text }) => {
  return (
    <div className="flex flex-col justify-center  items-center w-[70%] m-auto mt-10">
      <p className="text-center text-lg italic">{text}</p>
      <UserInfo name="James Toriff" designation="Developer" />
    </div>
  );
};

// Home page component
const DyanmicContainer = () => {
  return (
    <div className="flex flex-wrap">
      <Review
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere
        quae perspiciatis doloribus sit fugit blanditiis debitis quo, ab nemo
        quod officia? Praesentium corrupti molestiae amet consectetur obcaecati
        eos temporibus!"
      />
    </div>
  );
};
const Testimonal = () => {
  const leftArr = "<";
  const rightArr = ">";
  return (
    <div className="min-h-[100vh] text-white bg-primary1 flex flex-col justify-evenly items-center">
      <div className="font-bold px-10 py-4 border rounded-full">
        Testimonial
      </div>
      <div className=" flex flex-col items-center">
        <h1 className="font-extrabold text-center  text-5xl">
          Trusted by millions of creators.
        </h1>
        <h1 className="text-6xl mt-10 font-extrabold">“</h1>
        <div className="flex w-[80%] m-auto">
          <div className="w-fit h-fit px-5 py-3 rounded-full hover:bg-[#4192FF] text-2xl font-bold">
            {leftArr}
          </div>
          <DyanmicContainer />
          <div className="w-fit h-fit px-5 py-3 rounded-full hover:bg-[#4192FF] text-2xl font-bold">
            {rightArr}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
