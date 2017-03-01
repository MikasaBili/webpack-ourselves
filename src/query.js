//定位dom
export const query = {
  dom: (element) => {
    return document.querySelector(element);
  },
  domAll: (element) => {
    return document.querySelectorAll(element);
  },
  domNew: class DomNew {
    //默认方法
    constructor (tagName = 'div', style={}, content=[]) {
      this.tagName = tagName;
      this.style = style;
      this.content = content;
      this.event = [];
    }
    //创建elements
    Create () {
      const tag = document.createElement(this.tagName);
      const style = this.style;
      const content = this.content;
      for (let i in style) {
        tag.setAttribute(i,style[i]);
      }
      this.event.forEach(event => {
        tag.addEventListener(event.type, event.listener);
      })
      Array.from(content).forEach(child => {
        const childEl = (child instanceof DomNew) ? child.Create() : document.createTextNode(child);
        tag.appendChild(childEl);
      });
      return tag
    }
    //添加监听
    setEvent(type,listener) {
      this.event.push({
        type: type,
        listener: listener
      })
      return this
    }
  }
}