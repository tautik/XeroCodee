import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleLogin } from "../utils/loginSlice";
import { Link } from "react-router-dom";
import { baseUrl } from "../config/serverConfig";
const LogInForm = () => {
  const status = useSelector((state) => state.loginStatus.loginStatus);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sendData = async (data) => {
    const requestOptions = {
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      credentials: "include", //to accepts cookies in your frontend
      body: new URLSearchParams({
        email: data.email,
        password: data.password,
      }),
    };
    const response = await fetch(`${baseUrl}/v1/signin`, requestOptions);
    const json = await response.json();
    console.log(json);
    dispatch(toogleLogin(json.success));
    if (json.success === false) {
      alert(json.err + ", Enter correct detail.");
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setEmail("");
    setPassword("");
    if (status == true) alert("Already LogedIn, Please Logout first");
    else sendData(data);
  };

  return (
    <div className="flex flex-col w-full ">
      <form className=" w-full" action="" onSubmit={submitForm} method="post ">
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
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />

        <button className="mt-2  block bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-4 border border-blue-200  rounded-lg">
          <h1>Log In</h1>
        </button>
        <h1 className="w-[80%] block m-auto pt-2">
          Don't have an account?
          <Link className="text-primary1" to="/signup">
            <span> Sign Up</span>
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default LogInForm;
