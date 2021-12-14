import pug from "pug";
import MainPageTemplate from "./MainPage.templ";

const compiledFunction = pug.compile(MainPageTemplate);

export default function MainPage() {
  return compiledFunction()
}
