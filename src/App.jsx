import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import background from "./assets/images/background.svg";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
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
        <div className="relative font-[Nunito]">
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
