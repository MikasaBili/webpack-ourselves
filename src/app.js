import {query} from './query.js'
import {Menu, Router} from './menu.js'
import {ChangeHash} from './hash.js'

const menuArray = []

Menu.forEach((val) => {
  const menuLi = new query.DomNew('li', {}, [val.title])
  menuLi.setEvent('click', (hash) => {
    window.location.hash = val.hash
  })
  menuArray.push(menuLi)
})

let content = new query.DomNew('ul', {class: 'isShow'}, menuArray)

query.dom('.main').appendChild(content.Create())

const router = new ChangeHash(Router)
router.setHashForWindow()
