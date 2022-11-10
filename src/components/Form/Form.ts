import pug from "pug";
import Block from '../../utills/Block/Block';
import {formTempl} from './Form.templ';

export class Form extends Block {
	constructor(props: {
    name: string;
    label: string;
    type: string;
    message?: string;
    style?: string;
  }) {
		super('div', props);
	}

	render() {
		const template = pug.compile(formTempl);
		return template(this.props);
	}
}