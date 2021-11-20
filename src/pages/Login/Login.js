import pug from "pug";
import LoginTemplate from "./Login.templ.js";

const compiledFunction = pug.compile(LoginTemplate);

export default function Login() {
  return compiledFunction()
}
