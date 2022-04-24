const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post 2', body: 'this is post 2' },
]
//定义这个方法
function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000) //延迟1000ms后执行这个方法
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      //const error = true
      if (!error) {
        resolve()
      } else {
        reject('Error!')
      }
    }, 2000)
  })
}
/**
 * 调用这2个方法
 * getPosts()
 **createPost({ title: 'post 3', body: 'this is post 3' })
   当createPost的方法比getPosts花的时间久我们就看不到新的post了
 */

createPost({ title: 'post 3', body: 'this is post 3' })
  .then(getPosts)
  .catch((err) => console.log(err))
//处理异步

//Promise all
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})
Promise.all([promise1, promise2, promise3]).then((value) => console.log(value))
//用Promise.all可以避免重复写.then().then()
