import featureImg1 from "../assets/images/featureImg.svg";
import featureImg2 from "../assets/images/featureImg2.svg";
import featureImg3 from "../assets/images/featureImg3.svg";

// const Card = (data) => {
//   const { img, head, body } = data;
//   return (

//   );
// };

const data = [
  {
    img: featureImg1,
    head: "Any Developer Happier",
    body: "Context switches are used often, whether you're a DevOps engineer or a full stack developer. To 1000x the developer experience, we're here.",
  },
];

const Feature = () => {
  return (
    <div className="min-h-[100vh] text-center bg-gray-100 flex flex-col justify-evenly items-center">
      <div>
        <button className="text-white bg-primary1 px-6 py-4 border rounded-full ml-4">
          Features
        </button>
      </div>
      <div>
        <h1 className="text-3xl">
          Save 10000s of expensive <br />
          coder hours
        </h1>
      </div>
      <div className="text-center flex flex-wrap   ">
        <div className=" py-4 hover:bg-yellow-50 border-black w-[20rem]  flex justify-center items-center flex-col">
          <img src={featureImg1} alt="" />
          <h2 className="text-2xl">Any Developer Happier</h2>
          <p className="py-4">
            Context switches are used often,
            <br /> whether you're a DevOps engineer or <br /> a full stack
            developer. To 1000x the <br /> developer experience, we're here.
          </p>
          <a href="">Learn More</a>
        </div>

        <div className=" py-4 hover:bg-yellow-50 border-black w-[20rem]  flex justify-center items-center flex-col">
          <img src={featureImg1} alt="" />
          <h2 className="text-2xl">Any Developer Happier</h2>
          <p className="py-4">
            Context switches are used often,
            <br /> whether you're a DevOps engineer or <br /> a full stack
            developer. To 1000x the <br /> developer experience, we're here.
          </p>
          <a href="">Learn More</a>
        </div>
        <div className=" py-4 hover:bg-yellow-50 border-black w-[20rem]  flex justify-center items-center flex-col">
          <img src={featureImg1} alt="" />
          <h2 className="text-2xl">Any Developer Happier</h2>
          <p className="py-4">
            Context switches are used often,
            <br /> whether you're a DevOps engineer or <br /> a full stack
            developer. To 1000x the <br /> developer experience, we're here.
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
