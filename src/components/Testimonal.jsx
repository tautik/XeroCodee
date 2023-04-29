import { useState } from "react";
import testimonalImg from "../assets/images/testimonalImg.svg";
import Star from "../assets/images/Star.svg";

const UserInfo = ({ designation, name }) => {
  return (
    <div className="flex flex-col justify-between items-center mt-4">
      <img className="rounded-full" src={testimonalImg} alt="" />
      <h1 className="text-2xl bold">{name}</h1>
      <img src={Star} alt="" />
    </div>
  );
};

// Feature component
const Review = ({ text }) => {
  return (
    <div className="flex flex-col justify-center  items-center w-[70%] m-auto mt-10">
      <p className="text-center">{text}</p>
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
  return (
    <div className="min-h-[100vh] text-white bg-primary1 flex flex-col justify-evenly items-center">
      <div>
        <button className=" bg-primary1 px-10 py-4 border rounded-full ml-4">
          Testimonial
        </button>
      </div>
      <h1 className="text-center mt-[-4rem] text-4xl">
        Trusted by millions of creators.
      </h1>
      <div className=" flex flex-col flex-wrap items-center justify-center w-[80%] mx-auto  ">
        <h1 className="text-3xl font-extrabold">"</h1>
        <div className="flex ">
          <button>left</button>
          <DyanmicContainer />
          <button>right</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
