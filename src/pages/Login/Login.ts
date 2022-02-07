import {compile} from "pug";
import LoginTemplate from "./Login.templ";

import Block from '../../utills/Block/Block';
import {Button} from '../../components/Button/Button';
import {Form} from '../../components/Form/Form';
import {validateInput} from '../../utills/validation';

export default class Login extends Block {
  constructor () {
    super("div", {
      loginInput: new Form({
        name: "login",
        label: "Логин",
        type: "text",
      }),
      passwordInput: new Form({
        name: "password",
        label: "Пароль",
        type: "password",
      }),
      authorizeButton: new Button({
        id: "authorizeButton",
        text: "Авторизоваться",
        type: "submit",
        style: "register__submit-button",
      }),
      registerButton: new Button({
        id: "registerButton",
        text: "Нет аккаунта?",
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
    if (eventTarget.nodeName === 'INPUT') {
      validateInput({
        value: eventTarget.value,
        type: eventTarget.name,
        errorMsgSelecor: `${eventTarget.name}ErrMessage`,
      });
    }
  }

  clickHandler(event: Event) {
    event.preventDefault()
    if (
      event.target
      === document.getElementById(this.props.authorizeButton.props.id)
    ) {
      const form = document.forms.namedItem('formLogin');
    const formData: { [key: string]: string } = {};
    const formDataArray = Array.from(form!.elements) as HTMLInputElement[];
    formDataArray.forEach(element => {
      validateInput({
        value: element.value,
        type: element.name,
        errorMsgSelecor: `${element.name}ErrMessage`,
      });
      formData[element.id] = element.value;
      console.log(formData)
    });
    console.log(formData);
    }
  }

  render() {
    const template = compile(LoginTemplate);
    return template({
      loginInput: this.props.loginInput.render(),
      passwordInput: this.props.passwordInput.render(),
      authorizeButton: this.props.authorizeButton.render(),
    });
  }
}
