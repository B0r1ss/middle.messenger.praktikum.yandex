import pug from "pug";
import Block from '../../utills/Block/Block';
import {formTmpl} from './form.tmpl';

export class FormPiece extends Block {
	constructor(props: {
    name: string;
    label: string;
    type: string;
    message?: string;
  }) {
		super('div', props);
	}

	render() {
		const template = pug.compile(formTmpl);
		return template(this.props);
	}
}