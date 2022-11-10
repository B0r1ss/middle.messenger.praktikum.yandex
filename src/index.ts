import "./index.scss";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import Router from "./utills/Router/Router";

const router = new Router("root");

router
  .use("/sign-up", Register)
  .use("/", Login)
  .use("/settings", Profile)
  .use("/messenger", MainPage)
  .use("/500", Error)
  .use("/404", NotFound)
  .start();
