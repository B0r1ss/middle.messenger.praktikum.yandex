import pug from "pug"
import ProfileTemplate from "./Profile.templ.js";

const compiledFunction = pug.compile(ProfileTemplate);

export default function Profile() {
  return compiledFunction()
}
