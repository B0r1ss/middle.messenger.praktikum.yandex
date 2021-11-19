const pug = require('pug');
import Register from './Register.templ.js';

const compiledFunction = pug.compile(Register);

export default function Register() {
  return compiledFunction()
}