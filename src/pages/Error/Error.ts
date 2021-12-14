import pug from "pug";
import ErrorTemplate from "./Error.templ.js";

const compiledFunction = pug.compile(ErrorTemplate);

export default function Error({code, message}) {
  return compiledFunction({
    code: code, 
    message: message,
  })
}
