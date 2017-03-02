import {template} from './template.js'
import {query} from '../../src/query.js'

export const Page = (parent) => {
  const dom = query.dom(parent)
  dom.innerHTML = new template().build();
}