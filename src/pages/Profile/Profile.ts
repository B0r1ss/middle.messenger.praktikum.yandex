import {compile} from "pug";
import ProfileTemplate from "./Profile.templ";

const compiledFunction = compile(ProfileTemplate);

export default function Profile() {
  return compiledFunction()
}
