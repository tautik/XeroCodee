export const blueButton = (text) => {
  return (
    <div className="text-white text-center bg-primary1 px-6 py-4 border rounded-full">
      {text}
    </div>
  );
};
export const blackButton = (text) => {
  return (
    <div className="text-white bg-secondary3 px-6 py-4 border rounded-full">
      {text}
    </div>
  );
};
export const whiteButton = (text) => {
  return (
    <button className=" text-secondary3 bg-white px-6 py-4 border rounded-full">
      {text}
    </button>
  );
};
export const fadeWhite = (text) => {
  return (
    <button className=" text-secondary3 bg-secondary1 px-6 py-4 border rounded-full">
      {text}
    </button>
  );
};
