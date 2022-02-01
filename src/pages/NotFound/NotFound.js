import pug from 'pug';
import NotFoundTemplate from './NotFound.templ.ts';

const compiledFunction = pug.compile(NotFoundTemplate);

export default function NotFound() {
  return compiledFunction();
}
