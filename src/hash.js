// 判断hash改变
export class changeHash {
  constructor (hashArray = []) {
    this._hash = ''
    this.hashArray = hashArray;
    this.setHashForWindow()
  }
  setHashForWindow () {
    window.addEventListener('hashchange', ()=>{
      this.hashName = location.hash.replace('#','')
    },false)
  }
  set hashName (value) {
    this._hash = value;
    this.disHash();
  }
  get hashName () {
    return console.log(this._hash)
  }
  disHash () {
    const hash = this.hashArray;
    hash.forEach( (val)=> {
      if (val.hash === this._hash) {
        val.body();
      }
    })
  }
}