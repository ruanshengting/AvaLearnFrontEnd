/*
function ajax(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.send()
  xhr.onload = function () {
    if (this.status == 200) {
      callback(JSON.parse(this.response))
    } else {
      throw new Error('加载失败')
    }
  }
  console.log('xhr', xhr)
}

*/
class ParamError extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'ParamError'
  }
}
//14 使用Promise封装AJAX异步请求
function ajax(url) {
  return new Promise((resolve, reject) => {
    if (!/^http/.test(url)) {
      throw new ParamError('请求地址错误')
    }
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response))
      } else {
        reject('加载失败')
      }
    }
    xhr.onerror = function () {
      reject('加载失败 onerror' + this)
    }
  })
}
