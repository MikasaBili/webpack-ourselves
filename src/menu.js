// 菜单和路由统一管理
import {query} from './query.js'
const Menu = [
  {
    title: 'default',
    hash: '/'
  },
  {
    title: 'title1',
    url: 'www.baidu.com',
    hash: '/test'
  },
  {
    title: 'title2',
    url: 'www.baidu.com',
    hash: '/test2'
  }
]

const Router = [
  {
    hash: '/',
    body: () => {
      query.dom('.bodyName').innerHTML = ''
    }
  },
  {
    hash: '/test',
    body: () => {
      require('../components/test/index.js').Page('.bodyName')
    }
  },
  {
    hash: '/test2',
    body: () => {
      require('../components/test2/index.js').Page('.bodyName')
    }
  }
]

export {
  Menu,
  Router
}
