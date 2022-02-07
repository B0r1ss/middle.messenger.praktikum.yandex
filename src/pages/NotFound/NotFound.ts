import {compile} from 'pug';
import NotFoundTemplate from './NotFound.templ';

const compiledFunction = compile(NotFoundTemplate);

export default function NotFound() {
  return compiledFunction();
}
