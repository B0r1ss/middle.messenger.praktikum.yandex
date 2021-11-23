import "./index.scss";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile.js";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import NotFound from "./pages/NotFound/NotFound";


const root = document.querySelector("#root");

const path = window.location.pathname;

switch (path) {
    case "/authorize":
        root.innerHTML = Login();
        break;
    case "/profile":
        root.innerHTML = Profile();
        break;
    case "/register":
        root.innerHTML = Register();
        break;
    case "/chat":
        root.innerHTML = MainPage();
        break;
    case "/500":
        root.innerHTML = Error({code: "500", message: "Мы уже фиксим"});
        break;
    default:
        root.innerHTML = NotFound();

} 