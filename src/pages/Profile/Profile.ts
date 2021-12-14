import pug from "pug"
import ProfileTemplate from "./Profile.templ";

const compiledFunction = pug.compile(ProfileTemplate);

export default function Profile() {
  return compiledFunction()
}
