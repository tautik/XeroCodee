import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../config/serverConfig";

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
    const response = await fetch(`${baseUrl}/v1/signup`, requestOptions);

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

export default SignUpForm;
