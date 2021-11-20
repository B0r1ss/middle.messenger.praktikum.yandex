const pug = require('pug');
import MainPage from './MainPage.templ.js';
import img from "../../images/avatar.svg"

const compiledFunction = pug.compile(MainPage);

export default function MainPage() {
  return compiledFunction({avatar:img})
}

