import GuyWithBook from "../assets/images/guywithbook.svg";
import { useEffect, useState } from "react";

const WelcomeText = () => {
  return (
    <h1 className="text-4xl text-white">
      Welcome to XeroCodee <br />
      DevOps Automation <br /> Platform.
    </h1>
  );
};

const LeftContainer = () => {
  return (
    <div className="bg-primary1 border rounded-l-3xl flex flex-col justify-evenly items-center col-span-5">
      <WelcomeText />
      <img className="min-w-[32rem] ml-52" src={GuyWithBook} alt="" />
    </div>
  );
};

const SocialButtons = () => {
  return (
    <div className="flex justify-betweenw-[70%] mt-[-3rem]">
      <button className="px-1 w-56 py-2 border border-blue-200  rounded-lg">
        Sign in with Google
      </button>
      <button className="ml-4 px-1 w-56 py-2 border border-blue-200  rounded-lg">
        Sign in with Github
      </button>
    </div>
  );
};

const OrDivider = () => {
  return <h2 className="">-OR-</h2>;
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (data) => {
    const requestOptions = {
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      body: new URLSearchParams({
        email: data.email,
        password: data.password,
      }),
    };
    const response = await fetch(
      "http://localhost:3009/api/v1/signin",
      requestOptions
    );
    return response;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setEmail("");
    setPassword("");
    const response = await sendData(data);
    console.log(response);
  };

  return (
    <div className="flex flex-col w-full ">
      <form className=" w-full" action="" onSubmit={submitForm} method="post ">
        {/* <input
            className="w-[80%] block m-auto border-b"
            type="text"
            placeholder="Name"
          /> */}
        <input
          className="w-[80%] block m-auto border-b mt-5"
          type="string"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email Address"
        />
        <input
          className="w-[80%] block m-auto border-b my-5"
          type="string"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />

        <button className="mt-2 block bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-2 border border-blue-200  rounded-lg">
          <h1>Log In</h1>
        </button>
      </form>
    </div>
  );
};

const RightContainer = () => {
  return (
    <div className="min-h-full border z-10 ml-[-1.5rem] rounded-3xl col-span-8 items-center bg-white flex flex-col justify-evenly">
      <h1 className="ml-[-10rem] text-3xl font-bold">Log in Account</h1>
      <SocialButtons />
      <OrDivider />
      <LoginForm />
    </div>
  );
};

export const Login = () => {
  return (
    <div className="min-h-[90vh] flex">
      <div className="w-[70%] min-h-[35rem] m-auto grid grid-flow-col grid-cols-12">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};
