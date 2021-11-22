import "./index.scss";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile.js";
import Register from "./pages/Register/Register";


const root = document.querySelector("#root");

const path = window.location.pathname;
console.log(path)

switch (path) {
    case '/authorize':
        root.innerHTML = authorize();
        break;
    case '/profile':
        root.innerHTML = Profile();
        break;
    case '/register':
        root.innerHTML = Register();
        break;
    case '/chat':
        root.innerHTML = MainPage();
        break;
    case '/500':
        root.innerHTML = error({code: "500", message: "Мы уже фиксим"});
        break;
    default:
        root.innerHTML = NotFound();

} 