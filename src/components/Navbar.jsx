import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mt-5 grid col-span-12 items-center h-16  rounded-3xl w-[80%] m-auto">
      <div className="col-start-2 col-end-4">
        <h1>XeroCodee </h1>
      </div>
      <div className=" bg-blue-200 py-4 ml-4  bg-opacity-25 text-white   col-start-4 col-end-7  rounded-3xl ">
        <ul className="flex justify-evenly  ">
          <Link to="/">Home</Link>
          <Link to=" ">About</Link>
          <Link to=" ">Features</Link>
          <Link to=" ">Pages</Link>
          <Link to=" ">Blogs</Link>
          <Link to=" ">Carts</Link>
        </ul>
      </div>
      <div className="col-start-8 col-span-1">
        <button className="bg-white px-10 py-4 border rounded-full">
          <Link to="/signin">Sign In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
