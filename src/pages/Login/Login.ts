import pug from "pug";
import LoginTemplate from "./Login.templ.js";

interface FormElements {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

class LoginInput {
  constructor(form: HTMLFormElement) {
      let elements: FormElements = <FormElements>(<any> form.elements); 
      this.email = elements.email;
      this.password = elements.password;
  }
}

const compiledFunction = pug.compile(LoginTemplate);
const forms: HTMLCollection = document.forms

const formLogin: any = forms
const a: any = new LoginInput(formLogin)
console.log(a)

export default function Login() {
  return compiledFunction()
}
