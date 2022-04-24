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
// createPost({ title: 'post 3', body: 'this is post 3' })
//   .then(getPosts)
//   .catch((err) => console.log(err))
//处理异步
//Await/Async
console.log('Await/Async方法比promise要好')
async function init() {
  await createPost({ title: 'post 3', body: 'this is post 3' })
  getPosts()
}
init()
console.log(' **********Await/Async/fetch **********')
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log('🚀 ~ file: promise.js ~ line 44 ~ getUsers ~ data', data)
}
getUsers()
//Promise all
/*
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users',
).then((res) =>
  res.json(),
) //用fetch的话就要把结果.json,不然会得到一个response,不好处理
Promise.all([promise1, promise2, promise3, promise4]).then((value) =>
  console.log(value),
)
*/
//用Promise.all可以避免重复写.then().then(),它的执行事件是上述3个promise中最长时间的一个
