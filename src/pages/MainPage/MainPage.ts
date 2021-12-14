import pug from "pug";
import MainPageTemplate from "./MainPage.templ.js";

const compiledFunction = pug.compile(MainPageTemplate);

export default function MainPage() {
  return compiledFunction()
}
