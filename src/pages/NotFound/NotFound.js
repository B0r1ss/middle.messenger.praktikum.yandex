import pug from "pug"
import NotFoundTemplate from "./NotFound.templ.js"

const compiledFunction = pug.compile(NotFoundTemplate);

export default function NotFound() {
  return compiledFunction()
}