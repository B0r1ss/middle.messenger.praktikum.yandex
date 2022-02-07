import {compile} from "pug";
import ErrorTemplate from "./Error.templ";

const compiledFunction = compile(ErrorTemplate);

export default function Error({code, message}: {[key: string]: string}) {
  return compiledFunction({
    code: code,
    message: message,
  })
}
