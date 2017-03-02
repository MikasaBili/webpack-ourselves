import {template} from './template.js'
import {query} from '../../src/query.js'

console.log(new template(['a','b']))
export const Page = (parent) => {
  query.dom(parent).innerHTML = new template(['a','b']).build();
}