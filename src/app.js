import {query} from './query.js'
import Menu from './menu.js'
let content = new query.domNew('div',{class: 'isShow'}, ['123',new query.domNew('div',{class: 'test'})]);
query.dom('.main').appendChild(content.setEvent('click', ()=> {alert('1')}).Create())
console.log()