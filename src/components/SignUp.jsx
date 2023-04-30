import { useEffect, useState } from "react";
import GuyWithBook from "../assets/images/guywithbook.svg";
import SocialButtons from "./SocialButtons";
import { Link } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="bg-primary1 border rounded-l-3xl flex flex-col justify-evenly items-center col-span-5">
      <h1 className="text-4xl  text-white px-6 pt-10 font-ReemKufi">
        Welcome to XeroCodee DevOps Automation Platform.
      </h1>
      <img className="min-w-[32rem] ml-52" src={GuyWithBook} alt="" />
    </div>
  );
};

const OrDivider = () => {
  return (
    <h2 className="text-secondary4 w-fit mx-auto font-bold text-xl">- OR -</h2>
  );
};

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (data) => {
    const requestOptions = {
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      credentials: "include",
      body: new URLSearchParams({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    };
    const response = await fetch(
      "http://localhost:3009/api/v1/signup",
      requestOptions
    );
    const json = await response.json();
    if (json.success === false) {
      alert("Unable to create user, Please enter new email and password");
    } else {
      alert(" Account created succesfully");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = { name: name, email: email, password: password };
    setEmail("");
    setPassword("");
    sendData(data);
  };

  return (
    <div className="flex flex-col w-full ">
      <form className=" w-full" action="" onSubmit={submitForm} method="post ">
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b mt-5"
          type="string"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b mt-5"
          type="string"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email Address"
        />
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b my-5"
          type="string"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />

        <button className="mt-2  block bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-4 border border-blue-200  rounded-lg">
          <h1>Create Account</h1>
        </button>
        <h1 className="w-[80%] block m-auto pt-2">
          Already have an account?
          <Link className="text-primary1" to="/signin">
            <span> Login</span>
          </Link>
        </h1>
      </form>
    </div>
  );
};
const RightContainer = () => {
  return (
    <div className="min-h-full border z-10 ml-[-1.5rem] rounded-3xl col-span-8  bg-white flex flex-col justify-around items-start">
      <h1 className="ml-10 text-3xl font-Roboto font-bold">Create Account</h1>
      <SocialButtons />
      <OrDivider />
      <SignUpForm />
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="min-h-[90vh] flex font-[ro">
      <div className="w-[70%] min-h-[35rem] m-auto grid grid-flow-col grid-cols-12">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default SignUp;
