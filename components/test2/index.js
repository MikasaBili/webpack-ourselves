import {Template} from './template.js'
import {query} from '../../src/query.js'

export const Page = (parent) => {
  query.dom(parent).innerHTML = new Template(['a', 'b']).build()
}
