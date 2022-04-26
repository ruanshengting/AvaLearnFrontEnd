const button = document.querySelector('a')
const image = document.querySelector('img')
//封装一个ajax
function ajaxPromise() {
  let promise = new Promise((resolve, reject) => {
    //resolve, reject用于应对不同的接收结果
    let xhr = new XMLHttpRequest()
    xhr.open('get', 'yooA.jpg', true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(
            'xhr.status === 304是从浏览器缓存里获取资源，xhr.status >= 200 && xhr.status < 300表示成功',
          )
          resolve(xhr.responseURL)
        } else {
          reject(new Error(xhr.statusText))
        }
      }
    }
    // xhr.send(null)
    xhr.send()
  })
  return promise
}
button.addEventListener('click', () => {
  ajaxPromise()
    .then((responseURL) => {
      image.src = responseURL
    })
    .catch((statusText) => console.log('statusText', statusText))
})
