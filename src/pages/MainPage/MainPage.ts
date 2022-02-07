import {compile} from "pug";
import MainPageTemplate from "./MainPage.templ";

const compiledFunction = compile(MainPageTemplate);

export default function MainPage() {
  return compiledFunction()
}
