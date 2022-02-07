import "./index.scss";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";


const root: HTMLElement | null = document.querySelector("#root");

const path = window.location.pathname;

if(root) {
  switch (path) {
    case "/authorize":
        root.appendChild(new Login().getContent());
        break;
    case "/profile":
        root.innerHTML = Profile();
        break;
    case "/register":
        root.appendChild(new Register().getContent());
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
}
