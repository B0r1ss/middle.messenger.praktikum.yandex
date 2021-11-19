const pug = require('pug');
import NotFound from "./NotFound.templ.js"

const compiledFunction = pug.compile(NotFound);

export default function NotFound() {
  return compiledFunction()
}