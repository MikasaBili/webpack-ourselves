export class Template {
  constructor (style = []) {
    this.style = style
    this.attr = []
    this.attrs = ''
    if (style.length) {
      this.join()
    }
  }
  join () {
    const classAll = this.style
    classAll.forEach((val) => {
      this.attr.push(val)
    })

    this.attrs = this.attr.join(' ')
  }
  build () {
    return `
    <div class="${this.attrs}">123123</div>
    `
  }
}
