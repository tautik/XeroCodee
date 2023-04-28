import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import background from "./assets/images/background.svg";

function App() {
  return (
    <>
      <div className="relative ">
        <img
          className="absolute top-0 right-0  w-[75%] -z-10 mt-[-1.25rem] "
          src={background}
          alt=""
        />
        <div>
          <Navbar />
          <Homepage />
        </div>
      </div>
    </>
  );
}

export default App;
