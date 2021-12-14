import pug from "pug";
import RegisterTemplate from "./Register.templ";

const compiledFunction = pug.compile(RegisterTemplate);

export default function Register() {
  return compiledFunction()
}
