import { useState } from "react";
import { featureList } from "../utils/filterData";
// Card component for each feature
const Card = ({ imageSrc, title, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="transform transition duration-300 hover:scale-125 pt-4 hover:bg-secondary1 p-6 hover:z-10 border-black w-[20rem] flex justify-evenly items-center flex-col"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        <img className="w-[319.984px] h-[238.539px]" src={imageSrc} alt="" />
        <h2 className="text-2xl font-bold  mb-6">{title}</h2>
      </div>
      <p className="text-secondary4">{description}</p>
      <a className={`pt-4 underline ${hover ? "text-primary1" : ""}`} href="">
        Learn More
      </a>
    </div>
  );
};

// Feature page component
const Feature = () => {
  return (
    <div className="min-h-[100vh] text-center  flex flex-col justify-evenly items-center">
      <div>
        <button
          disabled
          className=" text-white font-bold bg-primary1 px-6 py-4 border rounded-full ml-4"
        >
          Features
        </button>
      </div>
      <div>
        <h1 className=" mt-4 text-5xl font-extrabold">
          Save 10000s of expensive <br />
          coder hours
        </h1>
      </div>
      <div className="text-center flex flex-wrap  w-[80%] m-auto justify-evenly">
        {featureList.map((feature) => (
          <Card
            key={feature.title}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
