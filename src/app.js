import {query} from './query.js'
import {Menu,Router} from './menu.js'
import {changeHash} from './hash.js'

const menuArray = []

Menu.forEach((val)=>{
  const menuLi = new query.domNew('li',{},[val.title])
  menuLi.setEvent('click', (hash) => {
    window.location.hash = val.hash;
  })
  menuArray.push(menuLi)
})

let content = new query.domNew('ul',{class: 'isShow'},menuArray);

query.dom('.main').appendChild(content.Create());

const router = new changeHash (Router)