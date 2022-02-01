
import pug from "pug";
import Block from '../../utills/Block/Block';
import buttonTempl from './Button.templ';

export class Button extends Block {
	constructor(props: {
    id: string;
    text: string;
    type?: string;
    style?: string;
  }) {
		props.style = props.style ? props.style : '';
		super('div', props);
	}

	render() {
		const template = pug.compile(buttonTempl);
		return template(this.props);
	}
}