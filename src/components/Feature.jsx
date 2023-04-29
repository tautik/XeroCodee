import featureImg1 from "../assets/images/featureImg.svg";
import featureImg2 from "../assets/images/featureImg2.svg";
import featureImg3 from "../assets/images/featureImg3.svg";

// Card component for each feature
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="py-4 hover:bg-yellow-50 border-black w-[20rem] flex justify-center items-center flex-col">
      <img src={imageSrc} alt="" />
      <h2 className="text-2xl">{title}</h2>
      <p className="py-4">{description}</p>
      <a href="">Learn More</a>
    </div>
  );
};

// Feature list data
const featureList = [
  {
    imageSrc: featureImg1,
    title: "Any Developer Happier",
    description:
      "Context switches are used often, whether you're a DevOps engineer or a full stack developer. To 1000x the developer experience, we're here.",
  },
  {
    imageSrc: featureImg2,
    title: "Another Cool Feature",
    description:
      "This feature makes your life easier in so many ways. You'll wonder how you lived without it!",
  },
  {
    imageSrc: featureImg3,
    title: "Last but Not Least",
    description:
      "Here's our final feature. It's amazing and will blow your mind.",
  },
];

// Feature page component
const Feature = () => {
  return (
    <div className="min-h-[100vh] text-center bg-gray-100 flex flex-col justify-evenly items-center">
      <div>
        <button
          disabled
          className=" text-white bg-primary1 px-6 py-4 border rounded-full ml-4"
        >
          Features
        </button>
      </div>
      <div>
        <h1 className="text-3xl">
          Save 10000s of expensive <br />
          coder hours
        </h1>
      </div>
      <div className="text-center flex flex-wrap">
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
