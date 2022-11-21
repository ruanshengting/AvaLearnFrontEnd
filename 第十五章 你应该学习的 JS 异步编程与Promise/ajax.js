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
//14 使用Promise封装AJAX异步请求
function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest() //基于 new 出来的 XMLHttpRequest 实例对象, 可以发起 Ajax 的请求。
    xhr.open('GET', url) //调用 open() 方法创建请求, xhr.open('请求方式', '请求路径'...)
    xhr.send() // 调用 send() 发送请求
    xhr.onload = function () {
      //onload: 接收得到的数据
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
