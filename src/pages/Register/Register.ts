import {compile} from "pug";
import RegisterTemplate from "./Register.templ";

import Block from "../../utills/Block/Block";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { validateInput } from "../../utills/validation";


export default class Register extends Block {
  constructor() {
    super("div", {
      emailInput: new Form({
        name: "email",
        label: "Почта",
        type: "email",
      }),
      loginInput: new Form({
        name: "login",
        label: "Логин",
        type: "chatName",
      }),
      firstNameInput: new Form({
        name: "firstName",
        label: "Имя",
        type: "name",
      }),
      secondNameInput: new Form({
        name: "secondName",
        label: "Фамилия",
        type: "name",
      }),
      phoneNumberInput: new Form({
        name: "phone",
        label: "Телефон",
        type: "phone",
      }),
      passwordInput: new Form({
        name: "password",
        label: "Пароль",
        type: "password",
      }),
      rePasswordInput: new Form({
        name: "rePassword",
        label: "Пароль (ещё раз)",
        type: "password",
      }),
      registerButton: new Button({
        id: "authorizeButton",
        text: "Зарегистрироваться",
        type: "submit",
        style: "register__submit-button",
      }),
      authorizeButton: new Button({
        id: "registerButton",
        text: "Войти",
        type: "button",
      }),
      events: {
        click: (event: Event) => this.clickHandler(event),
        focusout: (event: Event) => this.validateOnBlur(event),
      },
    });
  }

  validateOnBlur(event: Event) {
    const eventTarget = <HTMLInputElement>event.target;
    if (eventTarget.nodeName === "INPUT") {
      validateInput({
        value: eventTarget.value,
        type: eventTarget.name,
        errorMsgSelecor: `${eventTarget.name}ErrMessage`,
      });
    }
  }

  clickHandler(event: Event) {
    event.preventDefault();
    if (
      event.target ===
      document.getElementById(this.props.authorizeButton.props.id)
    ) {
      const form = document.forms.namedItem("formLogin");
      const formData: { [key: string]: string } = {};
      const formDataArray = Array.from(form!.elements) as HTMLInputElement[];
      formDataArray.forEach((element) => {
        validateInput({
          value: element.value,
          type: element.name,
          errorMsgSelecor: `${element.name}ErrMessage`,
        });
        formData[element.id] = element.value;
        console.log(formData);
      });
      console.log(formData);
    }
  }

  render() {
    const template = compile(RegisterTemplate);
    return template({
      emailInput: this.props.emailInput.render(),
      loginInput: this.props.loginInput.render(),
      firstNameInput: this.props.firstNameInput.render(),
      secondNameInput: this.props.secondNameInput.render(),
      phoneNumberInput: this.props.phoneNumberInput.render(),
      passwordInput: this.props.passwordInput.render(),
      rePasswordInput: this.props.rePasswordInput.render(),
      registerButton: this.props.registerButton.render(),
      authorizeButton: this.props.authorizeButton.render(),
    });
  }
}
