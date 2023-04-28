import GuyWithBook from "../assets/images/guywithbook.svg";

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

const SignUpForm = () => {
  return (
    <div className="flex flex-col w-full">
      <input
        className="w-[80%] m-auto border-b"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-[80%] m-auto border-b mt-5"
        type="email"
        placeholder="Email Address"
      />
      <input
        className="w-[80%] m-auto border-b my-5"
        type="password"
        placeholder="Password"
      />
      <button className="mt-2 bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-2 border border-blue-200  rounded-lg">
        <h1>Create Account</h1>
      </button>
    </div>
  );
};

const RightContainer = () => {
  return (
    <div className="min-h-full border z-10 ml-[-1.5rem] rounded-3xl col-span-8 items-center bg-white flex flex-col justify-evenly">
      <h1 className="ml-[-10rem] text-3xl font-bold">Create Account</h1>
      <SocialButtons />
      <OrDivider />
      <SignUpForm />
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="min-h-[90vh] flex">
      <div className="w-[70%] min-h-[35rem] m-auto grid grid-flow-col grid-cols-12">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default SignUp;
