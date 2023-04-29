import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import background from "./assets/images/background.svg";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import Cookies from "js-cookie";

const App = () => {
  const cookie = Cookies.get("Value");
  console.log(cookie);
  // const sendData = async (data) => {
  //   const requestOptions = {
  //     method: "GET",
  //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //     credentials: "include", //to accepts cookies in your frontend
  //     headers: new URLSearchParams({

  //     }),
  //   };
  //   const response = await fetch(
  //     "http://localhost:3009/api/v1/signin",
  //     requestOptions
  //   );
  //   const json = await response.json();
  //   console.log(json);
  //   dispatch(toogleLogin(json.success));
  // };

  // const submitForm = async (e) => {
  //   sendData(data);
  // };
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="relative ">
          <img
            className="absolute top-0 right-0  w-[75%] -z-10 mt-[-1.25rem] "
            src={background}
            alt=""
          />
          <Navbar />
          <Outlet />
        </div>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default App;
