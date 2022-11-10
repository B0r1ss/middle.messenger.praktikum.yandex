import {compile} from "pug";
import Block from "../../utills/Block/Block";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import MainPageTemplate from "./MainPage.templ";
import Router from "../../utills/Router/Router";

export default class MainPage extends Block {
  router = new Router("root");

  constructor() {
    super("div", {
      searchInput: new Form({
        name: "search",
        label: "",
        type: "text",
      }),
      textMessageInput: new Form({
        name: "textMessage",
        label: "",
        type: "text",
      }),
      moreProfileButton: new Button({
        id: "moreProfileButton",
        text: "",
        type: "button",
        style: "chart__buttonMore",
      }),
      addPropButton: new Button({
        id: "addPropButton",
        text: "",
        type: "button",
        style: "chart__addButton",
      }),
      sendMessageButton: new Button({
        id: "sendMessageButton",
        text: "",
        type: "button",
        style: "chart__sendButton",
      }),
      events: {
        click: (event: Event) => this.clickHandler(event),
      },
    });
  }
  clickHandler(event: Event) {
    event.preventDefault();
    if (event.target === document.querySelector(".sidebar__profileLink")) {
      this.router.go("/settings");
    }
  }
  render() {
    const template = compile(MainPageTemplate);
    return template({
      searchInput: this.props.searchInput.render(),
      textMessageInput: this.props.textMessageInput.render(),
      moreButton: this.props.moreProfileButton.render(),
      addPropButton: this.props.addPropButton.render(),
      sendMessageButton: this.props.sendMessageButton.render(),
    });
  }
}
