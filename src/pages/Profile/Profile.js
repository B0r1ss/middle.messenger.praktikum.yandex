const pug = require('pug');
import Profile from "./Profile.templ.js";

const compiledFunction = pug.compile(Profile);

export default function Profile() {
  return compiledFunction()
}

